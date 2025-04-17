import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Loader from "./Loader"; // Importing the Loader component

// A fixed amount for demonstration purposes. In production, amount can be dynamic.
const APPOINTMENT_AMOUNT = process.env.REACT_APP_APPOINTMENT_AMOUNT;

const LOCALSTORAGE_KEY = "savedAppointmentDetails";

const AppointmentCard = ({ isStandalone }) => {
  const { user } = useKindeAuth();
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const [loading, setLoading] = useState(false); // State to manage the loader
  const [availableDates, setAvailableDates] = useState([]); // State to store available dates
  const [fetchingSlots, setFetchingSlots] = useState(false); // State to manage slot fetching status

  // Initialize appointment details from local storage if present
  const [appointmentDetails, setAppointmentDetails] = useState(() => {
    const storedData = localStorage.getItem(LOCALSTORAGE_KEY);
    return storedData
      ? { ...JSON.parse(storedData), date: JSON.parse(storedData).date ? dayjs(JSON.parse(storedData).date) : null }
      : {
          name: "",
          phone: "",
          date: null, // using dayjs object for DatePicker
          slotId: "",
          // appointmentId can be attached later if provided by the backend response for slots.
          appointmentId: ""
        };
  });
  const [error, setError] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [noSlotsMessage, setNoSlotsMessage] = useState("");

  // Save appointmentDetails to local storage on change
  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(appointmentDetails));
  }, [appointmentDetails]);

  // Form validation updated to remove email validation
  const validateForm = () => {
    const { name, phone, date, slotId } = appointmentDetails;
    if (!name.trim()) {
      setError("Name is required.");
      return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }
    if (!date) {
      setError("Please select a valid appointment date.");
      return false;
    }
    if (!slotId) {
      setError("Please select an available slot.");
      return false;
    }
    setError("");
    return true;
  };

  // Fetch available dates when component mounts
  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/appointments/dates`
        );
        const data = await response.json();


        // Handle the response format: {"success":true,"data":["2025-03-21","2025-03-31"]}
        if (data.success && Array.isArray(data.data)) {
          // Convert string dates to dayjs objects and log for debugging
          const dates = data.data.map(dateStr => {
            try {
              const date = dayjs(dateStr);

              return date;
            } catch (e) {
              console.error('Error converting date:', dateStr, e);
              return null;
            }
          }).filter(date => date !== null); // Remove any failed conversions

          setAvailableDates(dates);

        } else {
          console.warn('Invalid response format from /appointments/dates:', data);
        }
      } catch (err) {
        console.error("Error fetching available dates:", err);
      }
    };

    fetchAvailableDates();
  }, []);

  // Fetch available slots when appointment date changes.
  // We also save the appointmentId from the response if available.
  useEffect(() => {
    const fetchSlots = async () => {
      setAvailableSlots([]);
      setNoSlotsMessage("");
      if (appointmentDetails.date) {
        setFetchingSlots(true); // Set fetching status to true
        const formattedDate = dayjs(appointmentDetails.date).format("YYYY-MM-DD");
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/appointments/${formattedDate}`
          );
          const data = await response.json();
          if (data.success) {
            // If slotEntry contains an appointment identifier, attach it
            if (data.slot._id) {
              setAppointmentDetails((prev) => ({ ...prev, appointmentId: data.slot._id }));
            }
            if (data.slot.slots && data.slot.slots.length > 0) {
              // Filter out slots that are already booked
              const unbookedSlots = data.slot.slots.filter(slot => !slot.booked);

              if (unbookedSlots.length > 0) {
                setAvailableSlots(unbookedSlots);
              } else {
                setNoSlotsMessage("All slots are booked for this date");
              }
            } else {
              setNoSlotsMessage(data.slot.message || "No slots available");
            }
          } else {
            setNoSlotsMessage("Failed to fetch slots");
          }
        } catch (err) {
          console.error(err);
          setNoSlotsMessage("Error fetching slots");
        } finally {
          setFetchingSlots(false); // Set fetching status to false when done
        }
      }
    };

    fetchSlots();
  }, [appointmentDetails.date]);

  // Initiate the Razorpay payment flow:
  // 1. Create an order on the backend (/appointment-payments/order).
  // 2. Launch Razorpay checkout with the received order details.
  // 3. On successful payment, verify the payment by calling /appointment-payments/verify.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is logged in; if not, store the details and prompt the user to log in.
    if (!user) {
      toast.error("Please login to proceed with payment");
      // Optionally navigate to the login page if needed
      // navigate("/login");
      return;
    }

    if (!validateForm()) {
      return;
    }

    // Show loader immediately when payment button is clicked
    setLoading(true);

    const formattedDate = dayjs(appointmentDetails.date).format("YYYY-MM-DD");
    // Ensure we have an appointmentId and slot time for the selected slot.
    const selectedSlot = availableSlots.find(
      (slot) => (slot._id || slot.id) === appointmentDetails.slotId
    );
    if (!selectedSlot) {
      setError("Selected slot not found.");
      setLoading(false); // Hide loader on error
      return;
    }

    // Prepare payload for order creation.
    const orderPayload = {
      userName: appointmentDetails.name,
      userEmail: user?.email || "",
      userPhone: appointmentDetails.phone,
      amount: APPOINTMENT_AMOUNT,
      appointmentId: appointmentDetails.appointmentId,
      slotTime: selectedSlot.time
    };

    try {
      const orderResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/appointment-payments/order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderPayload)
        }
      );
      const orderData = await orderResponse.json();
      if (!orderData.success) {
        setError(orderData.message || "Failed to create order");
        toast.error(orderData.message || "Failed to create order");
        setLoading(false); // Hide loader on error
        return;
      }

      // Launch Razorpay Checkout
      const options = {
        key: process.env.REACT_APP_APPOINTMENT_RAZORPAY_KEY, // Razorpay key from env variable
        amount: orderData.amount, // Amount in currency subunit
        currency: orderData.currency,
        name: "V Heal Rehabilitation",
        description: "Appointment Booking Payment",
        order_id: orderData.orderId,
        handler: async function (response) {
          // Keep loader showing during payment verification
          // Prepare payload for verifying payment
          const verifyPayload = {
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature
          };

          try {
            const verifyResponse = await fetch(
              `${process.env.REACT_APP_BACKEND_URL}/appointment-payments/verify`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(verifyPayload)
              }
            );
            const verifyData = await verifyResponse.json();
            if (verifyData.success) {
              toast.success(verifyData.message || "Appointment booked successfully");
              // Clear stored appointment details upon successful booking
              localStorage.removeItem(LOCALSTORAGE_KEY);
              // Navigate to the thank-you page with details once verification is successful
              navigate("/thank-you", {
                state: { ...appointmentDetails, bookedSlot: selectedSlot, date: formattedDate }
              });
            } else {
              setError(verifyData.message || "Payment verification failed");
              toast.error(verifyData.message || "Payment verification failed");
              setLoading(false);
            }
          } catch (verifyErr) {
            console.error(verifyErr);
            setError("Payment verification failed. Please try again.");
            toast.error("Payment verification failed. Please try again.");
            setLoading(false);
          }
        },
        prefill: {
          name: appointmentDetails.name,
          email: user?.email || "",
          contact: appointmentDetails.phone
        },
        theme: {
          color: "#3399cc"
        },
        modal: {
          ondismiss: function() {
            // Hide loader if Razorpay modal is dismissed
            setLoading(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      setError("Booking failed. Please try again.");
      toast.error("Booking failed. Please try again.");
      setLoading(false); // Hide loader on error
    }
  };

  // Handle change in text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prev) => ({
      ...prev,
      [name]: value
    }));
    setError("");
  };

  // Display Loader if in loading state
  if (loading) {
    return <Loader />;
  }

  return (
    <Box
      className="w-[350px] md:w-[400px] mx-auto"
      sx={{
        padding: 2,
        borderRadius: 2,
        boxShadow: 10,
        backgroundColor: "#ffffff"
      }}
    >
      <Typography variant="h6" gutterBottom className="text-center text-primary font-semibold">
        Book Your Appointment
      </Typography>
      <div className="bg-gray-100 rounded-md p-3 mb-4 flex flex-col justify-center items-center">
        <Typography variant="body2" className="text-gray-600 mb-1">
          Professional Consultation
        </Typography>
        <Typography variant="h5" className="text-center font-bold text-primary">
          ₹{APPOINTMENT_AMOUNT}
        </Typography>
        <Typography variant="caption" className="text-gray-500 mt-1">
          One-time payment • Secure checkout
        </Typography>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Field */}
        <CustomTextField
          label="Name"
          type="text"
          name="name"
          value={appointmentDetails.name}
          onChange={handleChange}
          className="mb-4"
          inputClassName="bg-gray-100"
          labelClassName="font-bold"
        />
        {/* Phone Field */}
        <CustomTextField
          label="Phone"
          type="tel"
          name="phone"
          value={appointmentDetails.phone}
          onChange={handleChange}
          className="mb-4"
          inputClassName="bg-gray-100"
          labelClassName="font-bold"
        />
        {/* Appointment Date Field using MUI Calendar */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Appointment Date"
            value={appointmentDetails.date}
            onChange={(newValue) => {
              setAppointmentDetails((prev) => ({ ...prev, date: newValue, slotId: "" }));
              setError("");
            }}
            slotProps={{
              day: (ownerState) => {
                try {
                  // Make sure ownerState and ownerState.day exist and have format method
                  if (!ownerState || !ownerState.day || typeof ownerState.day.format !== 'function') {
                    return {};
                  }

                  // Check if this date is in our available dates
                  const dateStr = ownerState.day.format("YYYY-MM-DD");
                  const isAvailable = availableDates.some(date => {
                    return date && typeof date.format === 'function' && date.format("YYYY-MM-DD") === dateStr;
                  });

                  // Return custom styling for available dates
                  return {
                    sx: isAvailable ? {
                      backgroundColor: 'rgba(76, 175, 80, 0.1)', // Light green background
                      borderRadius: '50%',
                      border: '2px solid #4caf50', // Green border
                      color: '#1e1e1e', // Keep text dark for readability
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: 'rgba(76, 175, 80, 0.2)', // Slightly darker on hover
                      }
                    } : {}
                  };
                } catch (error) {
                  console.error('Error in day slot props:', error);
                  return {};
                }
              }
            }}
          />
        </LocalizationProvider>
        {/* Display available slots if any */}
        {appointmentDetails.date && (
          <Box sx={{ my: 2 }}>
            <Typography variant="subtitle1" className="font-bold">
              Available Slots:
            </Typography>
            {fetchingSlots ? (
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Fetching available slots...
              </Typography>
            ) : availableSlots.length > 0 ? (
              <Box sx={{ mt: 1, position: 'relative' }}>
                {/* Desktop navigation header with title and arrows */}
                <Box sx={{
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  mb: 1.5,
                  justifyContent: 'space-between'
                }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                    Navigate through available slots
                  </Typography>

                  {/* Navigation arrows in top right */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      onClick={() => {
                        const container = scrollContainerRef.current;
                        if (container) {
                          // Smoother scrolling with smaller increment
                          const targetScroll = container.scrollLeft - 150;
                          container.scrollTo({
                            left: targetScroll,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                        width: '28px',
                        height: '28px',
                        border: '1px solid rgba(76, 175, 80, 0.5)',
                        padding: '4px',
                        '&:hover': { backgroundColor: 'rgba(76, 175, 80, 0.1)' }
                      }}
                      size="small"
                    >
                      <FaChevronLeft size={14} color="#4caf50" />
                    </IconButton>

                    <IconButton
                      onClick={() => {
                        const container = scrollContainerRef.current;
                        if (container) {
                          // Smoother scrolling with smaller increment
                          const targetScroll = container.scrollLeft + 150;
                          container.scrollTo({
                            left: targetScroll,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                        width: '28px',
                        height: '28px',
                        border: '1px solid rgba(76, 175, 80, 0.5)',
                        padding: '4px',
                        '&:hover': { backgroundColor: 'rgba(76, 175, 80, 0.1)' }
                      }}
                      size="small"
                    >
                      <FaChevronRight size={14} color="#4caf50" />
                    </IconButton>
                  </Box>
                </Box>

                {/* Mobile hint */}
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', mb: 0.5, gap: 0.5, justifyContent: 'center' }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                    Swipe to see more slots
                  </Typography>
                  <FaArrowCircleRight size={16} color="#4caf50" style={{ marginLeft: '4px' }} />
                </Box>

                {/* Slot container without absolute positioned arrows */}
                <Box sx={{ width: '100%', my: 1 }}>

                  {/* Scrollable container */}
                  <Box
                    ref={scrollContainerRef}
                    sx={{
                      display: "flex",
                      gap: 2,
                      overflowX: "auto",
                      pb: 1,
                      position: 'relative',
                      px: { xs: 1, sm: 2 }, // Less padding needed now that arrows are in the header
                      scrollBehavior: 'smooth', // Smooth scrolling
                      WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
                      scrollSnapType: { xs: 'x mandatory', sm: 'none' }, // Snap on mobile for better experience
                      '&::-webkit-scrollbar': {
                        height: '6px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        borderRadius: '6px',
                      },
                      '&::-webkit-scrollbar-track': {
                        backgroundColor: 'rgba(0,0,0,0.05)',
                      },
                    }}
                  >

                  {availableSlots.map((slot) => {
                    const slotIdentifier = slot._id || slot.id;
                    return (
                      <Button
                        key={slotIdentifier}
                        variant={appointmentDetails.slotId === slotIdentifier ? "contained" : "outlined"}
                        onClick={() =>
                          setAppointmentDetails((prev) => ({ ...prev, slotId: slotIdentifier }))
                        }
                        sx={{
                          minWidth: '90px',
                          mx: 0.5, // Add a bit of margin to prevent buttons from being too close to arrows
                          flexShrink: 0,
                          borderRadius: '20px',
                          borderColor: appointmentDetails.slotId === slotIdentifier ? '#4caf50' : 'rgba(0, 0, 0, 0.23)',
                          backgroundColor: appointmentDetails.slotId === slotIdentifier ? '#4caf50' : 'transparent',
                          color: appointmentDetails.slotId === slotIdentifier ? 'white' : 'inherit',
                          fontWeight: 'medium',
                          scrollSnapAlign: 'center', // For mobile snap scrolling
                          '&:hover': {
                            borderColor: '#4caf50',
                            backgroundColor: appointmentDetails.slotId === slotIdentifier ? '#4caf50' : 'rgba(76, 175, 80, 0.08)',
                          }
                        }}
                      >
                        {slot.time}
                      </Button>
                    );
                  })}
                  </Box>

                  {/* No right arrow here anymore - moved to header */}
                </Box>
              </Box>
            ) : (
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                {noSlotsMessage}
              </Typography>
            )}
          </Box>
        )}
        {/* Error Message */}
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        {/* Submit Button */}
        <CustomButton
          className="px-6 py-3 text-white bg-primary hover:bg-tertiary rounded-lg flex items-center justify-center"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Processing...
            </>
          ) : (
            "Proceed to Payment"
          )}
        </CustomButton>
      </form>
    </Box>
  );
};

export default AppointmentCard;
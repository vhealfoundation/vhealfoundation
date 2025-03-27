import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Loader from "./Loader"; // Importing the Loader component

// A fixed amount for demonstration purposes. In production, amount can be dynamic.
const APPOINTMENT_AMOUNT = 1000; // in INR

const LOCALSTORAGE_KEY = "savedAppointmentDetails";

const AppointmentCard = ({ isStandalone }) => {
  const { user } = useKindeAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // State to manage the loader

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

  // Fetch available slots when appointment date changes.
  // We also save the appointmentId from the response if available.
  useEffect(() => {
    const fetchSlots = async () => {
      setAvailableSlots([]);
      setNoSlotsMessage("");
      if (appointmentDetails.date) {
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
              setAvailableSlots(data.slot.slots);
            } else {
              setNoSlotsMessage(data.slot.message || "No slots available");
            }
          } else {
            setNoSlotsMessage("Failed to fetch slots");
          }
        } catch (err) {
          console.error(err);
          setNoSlotsMessage("Error fetching slots");
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

    const formattedDate = dayjs(appointmentDetails.date).format("YYYY-MM-DD");
    // Ensure we have an appointmentId and slot time for the selected slot.
    const selectedSlot = availableSlots.find(
      (slot) => (slot._id || slot.id) === appointmentDetails.slotId
    );
    if (!selectedSlot) {
      setError("Selected slot not found.");
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
        return;
      }

      // Launch Razorpay Checkout
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY, // Razorpay key from env variable
        amount: orderData.amount, // Amount in currency subunit
        currency: orderData.currency,
        name: "V Heal Rehabilitation",
        description: "Appointment Booking Payment",
        order_id: orderData.orderId,
        handler: async function (response) {
          // Show loader immediately once the payment is made
          setLoading(true);
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
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      setError("Booking failed. Please try again.");
      toast.error("Booking failed. Please try again.");
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
            renderInput={(params) => (
              <CustomTextField
                {...params}
                name="date"
                className="mb-4"
                inputClassName="bg-gray-100"
                labelClassName="font-bold"
              />
            )}
          />
        </LocalizationProvider>
        {/* Display available slots if any */}
        {appointmentDetails.date && (
          <Box sx={{ my: 2 }}>
            <Typography variant="subtitle1" className="font-bold">
              Available Slots:
            </Typography>
            {availableSlots.length > 0 ? (
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1 }}>
                {availableSlots.map((slot) => {
                  const slotIdentifier = slot._id || slot.id;
                  return (
                    <Button
                      key={slotIdentifier}
                      variant={appointmentDetails.slotId === slotIdentifier ? "contained" : "outlined"}
                      onClick={() =>
                        setAppointmentDetails((prev) => ({ ...prev, slotId: slotIdentifier }))
                      }
                    >
                      {slot.time}
                    </Button>
                  );
                })}
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
          className="px-6 py-3 text-white bg-primary hover:bg-tertiary rounded-lg"
          type="submit"
        >
          Proceed to Payment
        </CustomButton>
      </form>
    </Box>
  );
};

export default AppointmentCard;
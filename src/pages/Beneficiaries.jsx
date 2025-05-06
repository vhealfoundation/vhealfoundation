import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "../hoc/Layout";
import BeneficiaryCard from "../components/BeneficiaryCard";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader"; // Import Loader component

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false); // State for payment verification loader
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Get donation details from location state or local storage
  const [donationDetails, setDonationDetails] = useState(() => {
    const locationState = location.state;
    if (locationState && Object.keys(locationState).length > 0) {
      return locationState;
    }

    // If no location state, try to get from local storage
    const storedData = localStorage.getItem("savedDonationDetails");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return {
        amount: parsedData.customAmount,
        name: parsedData.name,
        email: parsedData.email || "",
        phone: parsedData.phone
      };
    }

    return {};
  });

  // Define primary color to match theme
  const primaryColor = '#fd8917';

  // Fetch data from API
  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/beneficiary`
        );
        setBeneficiaries(response.data.data);
      } catch (error) {
        console.error("Error fetching beneficiaries:", error);
        toast.error("Failed to load beneficiaries. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchBeneficiaries();
  }, []);

  // Initialize selected beneficiary from local storage if available
  useEffect(() => {
    const storedBeneficiary = localStorage.getItem("selectedBeneficiary");
    if (storedBeneficiary) {
      setSelectedBeneficiary(JSON.parse(storedBeneficiary));
    }
  }, []);

  // Handle Beneficiary Selection
  const handleBeneficiarySelect = (beneficiary) => {
    setSelectedBeneficiary(beneficiary);

    // Save selected beneficiary to local storage
    localStorage.setItem("selectedBeneficiary", JSON.stringify(beneficiary));

    // Scroll to donation button
    if (donationDetails && donationDetails.amount) {
      setTimeout(() => {
        document.getElementById('donation-button')?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  };

  // Create Razorpay Order
  const createRazorpayOrder = async (donationDetails) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/payments/order`,
        {
          donorName: donationDetails.donorName,
          donorEmail: donationDetails.donorEmail,
          donorPhone: donationDetails.donorPhone,
          amount: donationDetails.amount,
          beneficiaryId: donationDetails.beneficiaryId,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating Razorpay order:", error.response || error);
      throw error;
    }
  };

  // Handle Payment
  const handlePayment = async () => {
    if (!donationDetails || !selectedBeneficiary || (!donationDetails.amount && !donationDetails.customAmount)) {
      toast.error("Please select a beneficiary and enter donation amount.");
      return;
    }

    // Show loader immediately when payment button is clicked
    setPaymentLoading(true);

    try {
      const orderDetails = await createRazorpayOrder({
        amount: donationDetails.amount || donationDetails.customAmount,
        donorName: donationDetails.name,
        donorEmail: donationDetails.email,
        donorPhone: donationDetails.phone,
        beneficiaryId: selectedBeneficiary._id,
      });

      const options = {
        key: process.env.REACT_APP_DONATION_RAZORPAY_KEY_ID,
        amount: orderDetails.amount,
        currency: "INR",
        name: "V Heal Foundation",
        description: "Donation Payment",
        order_id: orderDetails.orderId,
        handler: async (response) => {
          // Keep loader showing during payment verification
          try {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
            // Send both payment ID and order ID to the backend for verification
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/payments/verify`, {
              razorpayPaymentId: razorpay_payment_id,
              razorpayOrderId: razorpay_order_id,
              razorpaySignature: razorpay_signature,
            });

            // Clear the donation details and selected beneficiary from local storage only after successful payment
            localStorage.removeItem("savedDonationDetails");
            localStorage.removeItem("selectedBeneficiary");

            toast.success("Payment Successful! Thank you for your donation.");
            navigate("/thank-you");
          } catch (error) {
            console.error("Payment verification failed:", error);
            toast.error("Payment verification failed. Please contact support.");
            setPaymentLoading(false);
          }
        },
        prefill: {
          name: donationDetails.name,
          email: donationDetails.email,
          contact: donationDetails.phone,
        },
        theme: {
          color: primaryColor,
        },
        modal: {
          ondismiss: function() {
            // Hide loader if Razorpay modal is dismissed
            setPaymentLoading(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Unable to initiate payment. Please try again later.");
      setPaymentLoading(false); // Hide loader on error
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // If payment verification is in progress, show Loader
  if (paymentLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="mt-16 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4" style={{ color: primaryColor }}>
            Meet Our Beneficiaries
          </h2>
          <div className="w-[150px] mx-auto rounded-full border-4 border-b border-yellow-400 opacity-90 mb-2"></div>
          <p className="text-center text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-4">
            Choose a beneficiary to make a donation to support their cause and help transform lives.
          </p>


        </motion.div>

        {/* Display selected beneficiary and donation button */}
        {selectedBeneficiary && donationDetails && (donationDetails.amount || donationDetails.customAmount) && (
          <motion.div
            id="donation-button"
            className="flex flex-col items-center mt-8 bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedBeneficiary.image}
                alt={selectedBeneficiary.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
              />
              <div>
                <h3 className="text-xl font-bold" style={{ color: primaryColor }}>
                  {selectedBeneficiary.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {selectedBeneficiary.age} years old
                </p>
              </div>
            </div>

            <div className="w-full bg-orange-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Donation Amount:</span>
                <span className="text-xl font-bold" style={{ color: primaryColor }}>
                  ₹{donationDetails.amount || donationDetails.customAmount}
                </span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full py-4 rounded-lg text-white font-medium text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              style={{ backgroundColor: primaryColor }}
              disabled={paymentLoading}
            >
              {paymentLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </>
              ) : (
                "Proceed to Payment"
              )}
            </button>
          </motion.div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {beneficiaries.map((beneficiary) => (
              <BeneficiaryCard
                key={beneficiary._id}
                name={beneficiary.name}
                age={beneficiary.age}
                requirements={beneficiary.requirements}
                image={beneficiary.image}
                description={beneficiary.description}
                amountRaised={beneficiary.amount_raised || 0}
                onSelect={() => handleBeneficiarySelect(beneficiary)}
              />
            ))}
          </motion.div>
        )}

        {/* Empty state if no beneficiaries */}
        {!loading && beneficiaries.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-gray-500 text-lg">No beneficiaries available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout(Beneficiaries);
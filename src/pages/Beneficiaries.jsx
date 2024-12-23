import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "../hoc/Layout";
import BeneficiaryCard from "../components/BeneficiaryCard";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const loaction = useLocation();
  
  const donationDetails = loaction.state || {};

  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/beneficiary`
        );
        setBeneficiaries(response.data.data);
      } catch (error) {
        console.error("Error fetching beneficiaries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeneficiaries();
  }, []);

  // Handle Beneficiary Selection
  const handleBeneficiarySelect = (beneficiary) => {
    setSelectedBeneficiary(beneficiary);
  };

  // Create Razorpay Order
  const createRazorpayOrder = async (donationDetails) => {
    try {
    
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/payments/order`, {
        donorName: donationDetails.donorName,
        donorEmail: donationDetails.donorEmail,
        donorPhone: donationDetails.donorPhone,
        amount: donationDetails.amount,
        beneficiaryId: donationDetails.beneficiaryId,
      });

      return response.data;
    } catch (error) {
      console.error("Error creating Razorpay order:", error.response || error);
      throw error;
    }
  };

  
  

  // Handle Payment
  const handlePayment = async () => {
    if (!donationDetails || !selectedBeneficiary) {
      console.error("No donation details or beneficiary selected.");
      return;
    }

    try {
      const orderDetails = await createRazorpayOrder({
        amount: donationDetails.amount ,
        donorName: donationDetails.name,
        donorEmail: donationDetails.email,
        donorPhone: donationDetails.phone,
        beneficiaryId: selectedBeneficiary._id, 
      });



      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay key
        amount: orderDetails.amount,
        currency: "INR",
        name: "Dymphna And Medals Foundation",
        description: "Donation Payment",
        order_id: orderDetails.orderId,
        handler: async (response) => {
          try {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
        
            // Send both payment ID and order ID to the backend for verification
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/payments/verify`, {
              razorpayPaymentId: razorpay_payment_id,
              razorpayOrderId: razorpay_order_id,  
              razorpaySignature: razorpay_signature,
            });
        
            toast.success("Payment Successful! Thank you for your donation.");
            navigate("/thank-you");
          } catch (error) {
            console.error("Payment verification failed:", error);
            toast.error("Payment verification failed. Please contact support.");
          }
        },        
        prefill: {
          name: donationDetails.name,
          email: donationDetails.email,
          contact: donationDetails.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Unable to initiate payment. Please try again later.");
    }
  };

  return (
    <div className="mt-16 max-w-7xl mx-auto p-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          Meet Our Beneficiaries
        </h2>
        <div className="w-[120px] rounded-full border-4 border-b border-yellow-400 opacity-90"></div>
        <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Choose a beneficiary to make a donation to support their cause.
        </p>
      </div>

      {/* Display selected beneficiary and donation button */}
      {selectedBeneficiary && donationDetails && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePayment}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            Proceed to Donate ₹{donationDetails.amount} for {selectedBeneficiary.name}
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <div className="text-lg text-gray-500">Loading...</div>
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 "
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
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
              amountRaised={beneficiary.amount_raised}
              onSelect={() => handleBeneficiarySelect(beneficiary)}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Layout(Beneficiaries);

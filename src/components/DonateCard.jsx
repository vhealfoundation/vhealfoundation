import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";



const DonateCard = () => {
  const { user } = useKindeAuth();
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const email = user?.email || "";
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");



  const navigate = useNavigate();

  // Quick donation amounts
  const quickAmounts = [1000, 2000, 5000, 10000];


  // Handle quick amount button click
  const handleQuickAmount = (amount) => {
    setCustomAmount(amount.toString());
    setDonationAmount(amount);
    setError("");
  };

  // Handle custom amount input
  const handleCustomAmount = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*$/)) {
      setCustomAmount(amount);
      setDonationAmount(""); // Clear quick amount when custom input is provided
    }
    setError(""); // Clear any previous errors
  };

  // Form validation
  const validateForm = () => {
    if (!customAmount || Number(customAmount) <= 0) {
      setError("Please enter a valid donation amount.");
      return false;
    }
    if (!name.trim()) {
      setError("Name is required.");
      return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }
    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const donationData = {
      amount: customAmount || donationAmount,
      name,
      email,
      phone,
    };
    
    if (user?.email) {

      navigate("/beneficiaries", { state: donationData  });
    } else {
      toast.error("Please login to donate");
    }
  };

  return (
    <Box
      className="w-[310px] md:w-[400px]"
      sx={{
        padding: 2,
        borderRadius: 2,
        boxShadow: 10,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h6" gutterBottom className="text-primary text-center">
        Donate to a Cause
      </Typography>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Quick Donation Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {quickAmounts.map((amount) => (
            <CustomButton
              key={amount}
              className={`${customAmount == amount ? "bg-primary text-white" : "bg-white text-tertiary border border-tertiary hover:bg-primary hover:text-white"
                } hover:bg-primary`}
              onClick={() => handleQuickAmount(amount)}
            >
              ₹{amount}
            </CustomButton>
          ))}
        </div>

        {/* Custom Amount Field */}
        <CustomTextField
          label="Custom Amount"
          type="number"
          value={customAmount}
          onChange={handleCustomAmount}
          error={Boolean(customAmount) && Number(customAmount) <= 0}
          className="mt-6 mb-4"
          inputClassName="bg-gray-100"
          labelClassName="font-bold"
        />

        {/* Name Field */}
        <CustomTextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError(""); // Clear any previous errors
          }}
          className="mb-4"
          inputClassName="bg-gray-100"
          labelClassName="font-bold"
        />


        {/* Phone Field */}
        <CustomTextField
          label="Phone"
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setError(""); // Clear any previous errors
          }}
          className="mb-4"
          inputClassName="bg-gray-100"
          labelClassName="font-bold"
        />

        {/* Error Message */}
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        {/* Submit Button */}
        <CustomButton
          className="text-white bg-primary hover:bg-primary-dark"
          type="submit"
        >
          ❤️ Donate Now
        </CustomButton>
      </form>
    </Box>
  );
};

export default DonateCard;

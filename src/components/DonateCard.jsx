import React, { useState } from "react";
import {Box, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";

const DonateCard = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Quick amounts for donation
  const quickAmounts = [10, 20, 50, 100];

  // Handle quick donation amount selection
  const handleQuickAmount = (amount) => {
    setDonationAmount(amount);
    setCustomAmount(""); // Clear the custom amount if a quick amount is selected
  };

  // Handle custom amount input
  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount(""); // Clear the quick donation amount if custom amount is entered
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!donationAmount && !customAmount) {
      setError("Please enter a donation amount.");
      return;
    }
    if (!name || !email) {
      setError("Name and email are required.");
      return;
    }

    // Proceed with donation logic
    setError("");
    alert(`Thank you for your donation of $${donationAmount || customAmount}.`);
  };

  return (
    <Box className="w-[310px] md:w-[400px]" sx={{ padding: 2, borderRadius: 2, boxShadow: 10, backgroundColor: "#f5f5f5", }}>
      <Typography variant="h6" gutterBottom className="text-primary">
        Donate to a Cause
      </Typography>


      <form onSubmit={handleSubmit} className="flex flex-col gap-0">
        {/* Quick Amount Selection */}
        <div className="grid grid-cols-2 gap-2 mb-4 ">
          {quickAmounts.map((amount) => (
            <CustomButton
              key={amount}
              className="bg-primary hover:bg-primary-dark"
              onClick={() => handleQuickAmount(amount)}
            >
              ${amount}
            </CustomButton>
          ))}
        </div>

 
       <CustomTextField
          label="Custom Amount"
          type="number"
          value={customAmount}
          onChange={handleCustomAmount}
          error={Boolean(customAmount) && customAmount.length > 10}
          className="mt-6 mb-4 "
          inputClassName="bg-gray-100"
          labelClassName="font-bold"
        />


        <CustomTextField
          label="Name"
           type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={Boolean(name) && name.length > 10}
          className="mb-4 "
          inputClassName="bg-gray-100"
          labelClassName="font-bold"
        />

        <CustomTextField
          label="Email"
            type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(email) && email.length > 30}
          className="mb-4 "
          inputClassName="bg-gray-100"
          labelClassName="font-bold"
        />




        {/* Error Message */}
        {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}

        {/* Submit Button */}

        <CustomButton
          className="bg-primary hover:bg-primary-dark"
          type="submit"
        >
          <span>❤️</span>
          Donate Now
        </CustomButton>


      </form>
    </Box>
  );
};

export default DonateCard;

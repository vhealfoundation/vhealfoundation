import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const LOCAL_STORAGE_KEY = "savedDonationDetails";

const DonateCard = () => {
  const { user } = useKindeAuth();
  const navigate = useNavigate();

  // Initialize state with local storage values if available
  const [customAmount, setCustomAmount] = useState(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData).customAmount || "" : "";
  });
  const [name, setName] = useState(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData).name || "" : "";
  });
  const [phone, setPhone] = useState(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData).phone || "" : "";
  });
  // Email is taken from the authenticated user if available
  const email = user?.email || "";
  const [error, setError] = useState("");

  // Save donation details in local storage on state change
  useEffect(() => {
    const donationData = { customAmount, name, phone };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(donationData));
  }, [customAmount, name, phone]);

  // Handle custom amount input
  const handleCustomAmount = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*$/)) {
      setCustomAmount(amount);
    }
    setError("");
  };

  const handlePhone = (e) => {
    const phoneNumber = e.target.value;
    if (phoneNumber.match(/^\d*$/)) {
      setPhone(phoneNumber);
    }
    setError("");
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
      amount: customAmount,
      name,
      email,
      phone,
    };

    if (user?.email) {
      // Store donation details in local storage (don't remove it)
      // We'll only remove it after a successful payment
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
        customAmount,
        name,
        phone,
        email
      }));
      navigate("/beneficiaries", { state: donationData });
    } else {
      // Save donation details and prompt user to login; the data will be prefilled after login.
      toast.error("Please login to donate");
    }
  };

  return (
    <Box
      className="w-[350px] md:w-[400px]"
      sx={{
        padding: 2,
        borderRadius: 2,
        boxShadow: 10,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h6" gutterBottom className="text-primary text-center">
        Donate to V HEAL Foundation
      </Typography>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Custom Amount Field */}
        <CustomTextField
          label="Amount"
          type="number"
          value={customAmount}
          onChange={handleCustomAmount}
          error={Boolean(customAmount) && Number(customAmount) <= 0}
          className="mt-6 mb-4"
          inputClassName="bg-gray-100"
        />

        {/* Name Field */}
        <CustomTextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          className="mb-4"
          inputClassName="bg-gray-100"
        />

        {/* Phone Field */}
        <CustomTextField
          label="Phone"
          type="tel"
          value={phone}
          onChange={handlePhone}
          className="mb-4"
          inputClassName="bg-gray-100"
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
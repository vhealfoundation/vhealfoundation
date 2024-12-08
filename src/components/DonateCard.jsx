import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";

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
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 2, borderRadius: 2, boxShadow: 10 , backgroundColor: "#f5f5f5",}}>
      <Typography variant="h6" gutterBottom color="primary">
        Donate to a Cause
      </Typography>
      
      <form onSubmit={handleSubmit}>
        {/* Quick Amount Selection */}
        <Grid container spacing={2}>
          {quickAmounts.map((amount) => (
            <Grid item xs={6} key={amount}>
              <Button
                variant={donationAmount === amount ? "contained" : "outlined"}
                fullWidth
                onClick={() => handleQuickAmount(amount)}
              >
                ₹{amount}
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Custom Amount Input */}
        <TextField
          label="Custom Amount"
          type="number"
          fullWidth
          value={customAmount}
          onChange={handleCustomAmount}
          sx={{ mt: 2 }}
        />

        {/* Name and Email Fields */}
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mt: 2 }}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mt: 2 }}
        />

        {/* Error Message */}
        {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}

        {/* Submit Button */}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Donate
        </Button>
      </form>
    </Box>
  );
};

export default DonateCard;

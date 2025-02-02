import React, { useState } from "react";
import toast from "react-hot-toast";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const AppointmentCard = ({ isStandalone }) => {
  const { user } = useKindeAuth();
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Form validation
  const validateForm = () => {
    const { name, phone, date } = appointmentDetails;
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
    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

   
      if (isStandalone) {
        // If isStandalone is true, navigate to a different page
        navigate("/confirmation", { state: appointmentDetails });
      } else {
        // If isStandalone is false, store the appointment details in local storage
        localStorage.setItem("appointmentDetails", JSON.stringify(appointmentDetails));
        toast.success("Appointment details saved locally.");
      }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  return (
    <Box
      className="w-[310px] md:w-[400px] mx-auto mt-12"
      sx={{
        padding: 2,
        borderRadius: 2,
        boxShadow: 10,
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        className="text-center text-primary font-semibold"
      >
        Book Your Appointment
      </Typography>
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

        {/* Appointment Date Field */}
        <CustomTextField
          label="Appointment Date"
          type="date"
          name="date"
          value={appointmentDetails.date}
          onChange={handleChange}
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
          className="px-6 py-3 text-white bg-primary hover:bg-tertiary rounded-lg"
          type="submit"
        >
          Book Appointment
        </CustomButton>
      </form>
    </Box>
  );
};

export default AppointmentCard;

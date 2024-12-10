import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    // Handle form submission (e.g., sending data to the server)
    console.log("Form Data:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setIsSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

      {isSubmitted ? (
        <div className="text-center text-green-500">
          <h3 className="text-2xl">Thank you for reaching out!</h3>
          <p>Your message has been successfully sent. We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <CustomTextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            inputClassName="w-full"
            labelClassName="text-xl font-semibold"
          />

          <CustomTextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            inputClassName="w-full"
            labelClassName="text-xl font-semibold"
          />

          <CustomTextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            inputClassName="w-full"
            labelClassName="text-xl font-semibold"
            rows="5"
            isTextarea // Pass this prop to make the field a textarea
          />

          <CustomButton
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark"
          >
            Submit
          </CustomButton>
        </form>
      )}
    </div>
  );
};

export default ContactCard;

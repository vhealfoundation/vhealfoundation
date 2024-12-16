import React, { useState, useRef } from "react";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null); // Track errors
  const messageRef = useRef(null); // Reference for textarea

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // For message, dynamically adjust the height of the textarea
    if (name === "message" && messageRef.current) {
      messageRef.current.style.height = "auto"; // Reset height
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`; // Adjust to content
    }
  };

  // Validate email format
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields and email format
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      // Send the email data to the backend
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          subject: `New message from ${formData.name}`,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // Reset form and show success message
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setError(null);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send your message. Please try again later.");
    }
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
            onChange={(e) => {
              const textarea = e.target;
              setFormData((prev) => ({ ...prev, message: textarea.value }));

              // Auto-adjust height for textarea
              textarea.style.height = "auto"; // Reset height
              textarea.style.height = `${textarea.scrollHeight}px`; // Adjust to fit content
            }}
            inputClassName="w-full resize-none overflow-hidden"
            labelClassName="text-xl font-semibold"
            rows="1" // Default to a single row
            textarea
            size="large"
          />


          {error && <p className="text-red-500 text-center">{error}</p>}

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

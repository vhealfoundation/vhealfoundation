import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      alert('Please fill in all fields');
      return;
    }
    
    // Handle form submission (e.g., sending data to the server)
    console.log('Form Data:', formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setIsSubmitted(true);
  };

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <h2 className='text-3xl font-bold text-center mb-6'>Contact Us</h2>

      {isSubmitted ? (
        <div className="text-center text-green-500">
          <h3 className="text-2xl">Thank you for reaching out!</h3>
          <p>Your message has been successfully sent. We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor="name" className='block text-xl font-semibold'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='w-full p-3 mt-2 border border-gray-300 rounded-lg'
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className='block text-xl font-semibold'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 mt-2 border border-gray-300 rounded-lg'
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className='block text-xl font-semibold'>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='w-full p-3 mt-2 border border-gray-300 rounded-lg'
              placeholder="Your message"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className='w-full p-3 bg-[#00df9a] text-white rounded-lg hover:bg-green-600 duration-300'
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;

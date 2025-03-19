import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../hoc/Layout";
import ContactCard from '../components/ContactCard';
import ContactLeft from '../components/ContactLeft';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LineSeperator from '../components/LineSeperator';
import { motion } from 'framer-motion';
import DonateCard from '../components/DonateCard';
import AppointmentCard from '../components/AppointmentCard';

// Add CSS for animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
`;

// Custom Map Marker
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
  iconSize: [32, 32],
});

const Contact = () => {
  const navigate = useNavigate();
  const [showDonateCard, setShowDonateCard] = useState(false);
  const [showAppointmentCard, setShowAppointmentCard] = useState(false);

  // Function to toggle cards
  const toggleDonateCard = () => {
    setShowDonateCard(true);
    setShowAppointmentCard(false);
  };

  const toggleAppointmentCard = () => {
    setShowAppointmentCard(true);
    setShowDonateCard(false);
  };

  const closeCards = () => {
    setShowDonateCard(false);
    setShowAppointmentCard(false);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Define primary color for consistent styling
  const primaryColor = '#fd8917';
  const primary = '#003153';

  // Add the styles to the document head
  useEffect(() => {
    // Create style element
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <div className="bg-gray-100 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
             <div className="flex flex-col items-center gap-4">
             <h2 className="text-3xl pt-6 md:text-4xl font-bold text-primary text-center">
              Connect With Us
            </h2>
            <LineSeperator className="mb-8" />
             </div>
              

            <p className="text-center text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Whether you're looking to volunteer, donate, or seek help, we're here to support your journey. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Map and CTA Section */}
      <div className="py-6 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Map Section */}
            <motion.div
              className="w-full md:w-3/5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col items-start gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Find Us Here</h2>
              <LineSeperator className="mb-4" />
              </div>

              <div className="rounded-lg overflow-hidden shadow-xl">
                <MapContainer
                  center={[13.055808, 80.229134]}
                  zoom={15}
                  style={{ height: "450px", width: "100%", zIndex: 0 }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                  />
                  <Marker position={[13.055808, 80.229134]} icon={customIcon}>
                    <Popup>
                      V Heal Foundation <br /> Helping Former Inmates.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='flex flex-col items-start'>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Mission</h2>
              <LineSeperator className="mb-4"/>
              </div>
              <p className="text-gray-600 mb-8 text-lg">
                Join us in our mission to provide guidance and resources to individuals rebuilding their lives. Your support makes a significant difference in the lives of those we serve.
              </p>
              <div className="grid grid-cols-1 gap-6">
                <button
                  className="text-white py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-3 hover:bg-orange-600"
                  style={{ backgroundColor: primaryColor }}
                  onClick={toggleDonateCard}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg font-medium">Donate Now</span>
                </button>
                <button
                  className="border-2 py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-3 hover:bg-gray-50"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                  onClick={toggleAppointmentCard}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg font-medium">Book Appointment</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Options Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-primary">
              Get In Touch
            </h2>
            <LineSeperator className="mb-4"/>

            <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              We're here to help you on your journey. Choose the option that best suits your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Consultation Card */}
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-primary">FOR CONSULTATION</h3>
                <LineSeperator className="mb-4"/>


                <p className="text-center text-gray-600 mb-8">To start your Healing Journey...</p>

                <div className="flex items-center justify-center gap-3 mb-6 bg-gray-50 p-3 rounded-lg">
                  <div className="p-2 rounded-full" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">9840050175</span>
                </div>

                <button
                  className="w-full text-white py-3 rounded-lg transition duration-300 mt-4 hover:bg-orange-600"
                  style={{ backgroundColor: primaryColor }}
                  onClick={toggleAppointmentCard}
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>

            {/* Contribution Card */}
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-primary">FOR CONTRIBUTION</h3>
                <LineSeperator className="mb-4"/>


                <p className="text-center text-gray-600 mb-8">My contribution to support their second chance...</p>

                <div className="flex items-center justify-center gap-3 mb-6 bg-gray-50 p-3 rounded-lg">
                  <div className="p-2 rounded-full" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">8056041136</span>
                </div>

                <button
                  className="w-full text-white py-3 rounded-lg transition duration-300 mt-4 hover:bg-orange-600"
                  style={{ backgroundColor: primaryColor }}
                  onClick={toggleDonateCard}
                >
                  Donate Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>



      {/* General Contact Section */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-primary">
              Involve With Us
            </h2>
            <LineSeperator className="mb-4"/>

            <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              Reach out to us with your questions or join our team of dedicated volunteers and make a difference in the lives of those who need it most.
            </p>
          </motion.div>

          {/* Modal Cards for Donate and Appointment */}
          {(showDonateCard || showAppointmentCard) && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="w-[350px] md:w-[400px] bg-white rounded-lg shadow-xl relative animate-fadeIn">
                <div className="absolute -top-3 -right-3">
                  <button
                    onClick={closeCards}
                    className="bg-white rounded-full p-1 shadow-md text-primary hover:text-orange-600 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
               
                {showDonateCard && <DonateCard />}
                {showAppointmentCard && <AppointmentCard />}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg shadow-lg p-6"
            >
              <ContactLeft />
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg"
            >
              <ContactCard />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout(Contact);

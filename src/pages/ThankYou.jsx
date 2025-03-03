import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../hoc/Layout";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const ThankYou = () => {
  const navigate = useNavigate();
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });



  useEffect(() => {

    const timer = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  useEffect(() => {
    // Update window dimensions for confetti
    const handleResize = () =>
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tick animation variants
  const tickVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };



  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-blue-200">
      {/* Confetti */}
      <Confetti width={windowDimensions.width} height={windowDimensions.height} />

      {/* Main Content */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Tick Animation */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          className="w-16 h-16 mx-auto text-green-500 mb-4"
        >
          <motion.circle
            cx="26"
            cy="26"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={tickVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            d="M14 27l10 10L38 16"
            variants={tickVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>

        {/* Success Message */}
        <motion.div
          className="text-4xl font-bold text-green-600 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Payment Successful!
        </motion.div>
        <motion.p
          className="text-gray-600 text-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Thank you. Redirecting you to the home page...
        </motion.p>


        
      </motion.div>
    </div>
  );
};

export default Layout(ThankYou);

import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import LineSeperator from "./LineSeperator";

const useCounter = (start, end, duration, resetTrigger) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!resetTrigger) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, end, duration, resetTrigger]);

  return count;
};

const StatsCard = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Animated counters with inView as resetTrigger
  const fundraisersCount = useCounter(0, 56, 2000, inView);
  const raisedCount = useCounter(0, 234000, 2000, inView);
  const donationsCount = useCounter(0, 160527, 2000, inView);

  // Icons for each stat
  const renderIcon = (type) => {
    switch (type) {
      case 'fundraisers':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'raised':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'donations':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-4 py-8 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-3">Our Impact</h2>
        <LineSeperator className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fundraisers Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-center text-gray-700 text-lg font-medium mb-1">Fundraisers</h3>
              <p className="text-center text-4xl font-bold" style={{ color: '#fd8917' }}>
                {fundraisersCount}+
              </p>
              <p className="text-center text-gray-500 text-sm mt-2">Campaigns for mental health</p>
            </div>
            <div className="h-2" style={{ backgroundColor: '#fd8917' }}></div>
          </motion.div>

          {/* Raised Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-center text-gray-700 text-lg font-medium mb-1">Raised</h3>
              <p className="text-center text-4xl font-bold" style={{ color: '#fd8917' }}>
                ₹{raisedCount.toLocaleString()}+
              </p>
              <p className="text-center text-gray-500 text-sm mt-2">For rehabilitation programs</p>
            </div>
            <div className="h-2" style={{ backgroundColor: '#fd8917' }}></div>
          </motion.div>

          {/* Donations Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-center text-gray-700 text-lg font-medium mb-1">Donations</h3>
              <p className="text-center text-4xl font-bold" style={{ color: '#fd8917' }}>
                {donationsCount.toLocaleString()}+
              </p>
              <p className="text-center text-gray-500 text-sm mt-2">Supporting mental wellness</p>
            </div>
            <div className="h-2" style={{ backgroundColor: '#fd8917' }}></div>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your support helps us provide mental health services and rehabilitation programs for those who need it most.
          </p>
          <Link to="/toconnect">
          <button className="bg-primary mt-4 px-6 py-3 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
           >
            Make a Difference Today
          </button></Link>
         
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;

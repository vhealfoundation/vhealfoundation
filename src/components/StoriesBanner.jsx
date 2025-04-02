import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaQuoteLeft, FaAward, FaStar, FaTrophy } from "react-icons/fa";
import { RiVipCrownFill } from "react-icons/ri";

const StoriesBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* Background with enhanced gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400"
        style={{ backgroundColor: '#fd8917' }}
      >
        {/* Enhanced decorative elements */}
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute left-1/2 top-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Floating icons background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <FaAward className="absolute top-12 left-[20%] text-white text-3xl transform -rotate-12" />
            <FaStar className="absolute top-24 right-[25%] text-white text-2xl transform rotate-12" />
            <FaTrophy className="absolute bottom-20 left-[30%] text-white text-3xl transform rotate-6" />
            <RiVipCrownFill className="absolute bottom-12 right-[35%] text-white text-2xl transform -rotate-12" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center gap-6"
          >
            {/* Decorative top elements */}
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaTrophy className="text-white/80 text-2xl" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <RiVipCrownFill className="text-white/80 text-3xl" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <FaTrophy className="text-white/80 text-2xl" />
              </motion.div>
            </div>

            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaQuoteLeft className="text-white/30 text-4xl mb-4" />
            </motion.div>

            {/* Main Content */}
            <div className="space-y-4 max-w-2xl">              
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Commendations from<br />the Champions
              </h2>

              <motion.button
                onClick={() => navigate("/accolades")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white rounded-full px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
              >
                <span className="flex items-center gap-2" style={{ color: '#fd8917' }}>
                  View Accolades
                  <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Partner logos with decorative elements */}
            <div className="mt-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <FaAward className="text-white/30 text-2xl" />
                </motion.div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-80">
                <div className="h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                <div className="h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                <div className="h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                <div className="h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StoriesBanner;
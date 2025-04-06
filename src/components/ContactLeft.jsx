import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ContactLeft = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-xl overflow-hidden p-6 md:p-8 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full -ml-48 -mb-48 blur-3xl z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Title with accent line */}
        <div className="mb-8 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-0.5 bg-orange-300"></div>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Why Reach Out to Us?</h2>
        </div>
        
        {/* List items */}
        <ul className="space-y-6">
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="mr-4 text-orange-400 flex-shrink-0 mt-1">
              <FaCheckCircle size={22} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">Know About Our Mission</h3>
              <p className="text-gray-100/80">
                Discover how we're making a difference and how you can be part of our mission.
              </p>
            </div>
          </motion.li>
          
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="mr-4 text-orange-400 flex-shrink-0 mt-1">
              <FaCheckCircle size={22} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">Volunteer Opportunities</h3>
              <p className="text-gray-100/80">
                Find out how you can lend your time and skills to support our cause.
              </p>
            </div>
          </motion.li>
          
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="mr-4 text-orange-400 flex-shrink-0 mt-1">
              <FaCheckCircle size={22} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">To Contribute, To achieve our Mission</h3>
              <p className="text-gray-100/80">
                Get details on how to contribute and help us achieve our goals.
              </p>
            </div>
          </motion.li>
          
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="mr-4 text-orange-400 flex-shrink-0 mt-1">
              <FaCheckCircle size={22} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">Know about our Happenings</h3>
              <p className="text-gray-100/80">
                Stay informed about upcoming events and ways to participate.
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ContactLeft;

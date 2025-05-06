import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CardWithIndex = ({ imageSrc, title, description, index }) => {
  return (
    <Link to={`/what-we-do?index=${index}`} className="group block h-full">
      <motion.div
        className="relative h-[460px] md:h-[490px] w-full max-w-sm overflow-hidden rounded-xl shadow-lg transition-all duration-300 flex flex-col bg-white"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden z-10">
          <div className="absolute transform rotate-45 bg-orange-500 text-white shadow-lg w-24 h-24 -top-12 -right-12"></div>
        </div>

        {/* Image Container with enhanced styling */}
        <div className="relative overflow-hidden h-[270px]">
          <motion.img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={imageSrc || 'https://via.placeholder.com/400x270?text=Image+Not+Available'}
            alt={title || 'Card image'}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x270?text=Image+Not+Available';
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content with modern styling */}
        <div className="flex flex-col flex-1 p-3 overflow-hidden">
          {/* Title with accent line */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-0.5 bg-orange-300"></div>
              <div className="w-12 h-1 bg-orange-500"></div>
            </div>
            {title && (
              <h3 className="text-lg font-bold text-primary">
                {title}
              </h3>
            )}
          </div>

          {/* Description with better typography */}
          <p className="flex-1 text-primary text-sm leading-relaxed text-justify">
            {description}
          </p>

          {/* Modern button */}
          <div className="mt-4">
            <button className="w-[150px] px-6 py-2.5 bg-primary text-white rounded-full font-medium transition-all duration-300 hover:bg-primary-dark flex items-center gap-2">
              To Engage
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CardWithIndex;

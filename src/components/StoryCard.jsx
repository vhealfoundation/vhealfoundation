import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StoryCard = ({ image, title, description, link }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image */}
      <div className="h-56 md:h-64 w-full bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">
          {description}
        </p>
        <Link to ='/stories/5'
          className="flex items-center text-primary font-semibold hover:underline"
        >
          Read More
          <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default StoryCard;

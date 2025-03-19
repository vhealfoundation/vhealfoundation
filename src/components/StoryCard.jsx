import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LineSeperator from "./LineSeperator";

const StoryCard = ({ id, image, title, description}) => {
  // Define primary color to match theme
  const primaryColor = '#fd8917';

  return (
    <motion.div
      className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <div className="h-56 md:h-64 w-full bg-gray-200 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
       <div className="flex flex-col items-start gap-2">
       <h3 className="text-xl md:text-2xl font-bold text-primary">{title}</h3>
       <LineSeperator className="mb-4" width={80}/>
       </div>

        <p className="text-gray-600 text-sm md:text-base line-clamp-3">
          {description}
        </p>
        <Link
          to={`/accolades/${id}`}
          className="border-2 border-primary text-primary inline-flex items-center font-semibold rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-orange-50"
          style={{ color: primaryColor }}
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default StoryCard;

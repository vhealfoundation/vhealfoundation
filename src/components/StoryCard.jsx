import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LineSeperator from "./LineSeperator";

const StoryCard = ({ id, image, title, description, isTestimonial = false }) => {
  // Determine the target route based on isTestimonial prop
  const targetRoute = isTestimonial ? `/testimonials/${id}` : `/accolades/${id}`;

  return (
    // Entire card wrapped in Link for navigation
    <Link to={targetRoute} className="group block">
      <motion.div
        className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
            <span className="text-primary text-sm font-medium">
              {isTestimonial ? "Testimonial" : "Accolade"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow space-y-4">
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-xl md:text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
              {title}
            </h3>
            <LineSeperator width={60} className="opacity-70" />
          </div>

          <p className="text-gray-600 text-sm md:text-base line-clamp-3 flex-grow">
            {description}
          </p>

          {/* Read More Button Styled Element */}
          <div className="group inline-flex items-center justify-between mt-4 w-1/2 bg-white border-2 border-primary text-primary rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 hover:bg-primary hover:text-white">
            <span>Read More</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default StoryCard;
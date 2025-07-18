import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AccoladeCard = ({ id, image, title, description, content, isTestimonial = false }) => {
  // Determine the target route based on isTestimonial prop
  const targetRoute = isTestimonial ? `/testimonials/${id}` : `/accolades/${id}`;

  // Extract name and designation from content[0].title if available, otherwise use main title
  let name = title;
  let designation = "";

  if (content && content.length > 0 && content[0].title) {
    const fullTitle = content[0].title;
    if (fullTitle.includes(",")) {
      const parts = fullTitle.split(",");
      name = parts[0].trim();
      designation = parts.slice(1).join(",").trim();
    } else {
      name = fullTitle;
    }
  } else if (title && title.includes(",")) {
    const parts = title.split(",");
    name = parts[0].trim();
    designation = parts.slice(1).join(",").trim();
  }

  return (
    // Entire card wrapped in Link for navigation
    <Link to={targetRoute} className="group block h-full">
      <motion.div
        className="relative h-full overflow-hidden rounded-xl shadow-xl transition-all duration-300 flex flex-col"
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
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Left badge */}
          {!isTestimonial ? (
        <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md z-10">
            <span className="text-white text-sm font-medium">
             Prisoner
            </span>
          </div> ) : null}
        </div>

        {/* Content with modern styling */}
        <div className="p-6 flex flex-col flex-grow space-y-4 bg-white">
          {/* Title with accent line */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-0.5 bg-orange-300"></div>
              <div className="w-12 h-1 bg-orange-500"></div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors">
              {name}
            </h3>
            {designation && (
              <p className="text-gray-600 text-sm md:text-base italic font-semibold mt-1">
                {designation}
              </p>
            )}
          </div>

          {/* Description with better typography */}
          <p className="text-gray-700 text-sm md:text-base line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Spacer to push button to bottom */}
          <div className="flex-grow"></div>

          {/* Modern Read More Button */}
          <div className="inline-flex items-center justify-center mt-4 w-full bg-white border-2 border-primary text-primary rounded-full px-6 py-2.5 font-medium transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg transform group-hover:-translate-y-1">
            <span>Read More</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
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

export default AccoladeCard;

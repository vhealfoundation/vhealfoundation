import React from "react";
import { motion } from "framer-motion";

const StoryDetailCard = ({ coverImage, title, description, content }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full">
      {/* Full-width Hero Banner */}
      <motion.div
        className="relative w-full overflow-hidden shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-orange-500/75 mix-blend-multiply z-10"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full -mr-32 -mt-32 blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full -ml-48 -mb-48 blur-3xl z-0"></div>

        {/* Enhanced image container with parallax effect */}
        <div className="relative h-[600px] overflow-hidden">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-full object-cover scale-110 transform transition-transform duration-10000 hover:scale-100"
          />
        </div>

        {/* Content overlay with improved typography */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-20">
          <motion.div
            className="max-w-4xl text-center space-y-8"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
              {title?.split(',').map((part, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <br />}
                  <span className="inline-block">{part.trim()}</span>
                </React.Fragment>
              ))}
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-0.5 bg-white/60"></div>
              <div className="w-24 h-1 bg-orange-500"></div>
              <div className="w-12 h-0.5 bg-white/60"></div>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Story Content with Modern Design */}
        <div className="space-y-32 py-12">
          {content?.map((section, index) => (
            <motion.div
              key={section._id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              variants={itemVariants}
            >
              {/* Image with further enhanced styling */}
              <div className="w-full md:w-1/2">
                <div className="relative group overflow-hidden rounded-xl shadow-xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute transform rotate-45 bg-orange-500 text-white shadow-lg w-24 h-24 -top-12 -right-12"></div>
                  </div>


                </div>
              </div>

              {/* Enhanced text content with modern styling */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-orange-300"></div>
                    <div className="w-16 h-1 bg-orange-500"></div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    {section.title?.split(',').map((part, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <br />}
                        <span className="inline-block">{part.trim()}</span>
                      </React.Fragment>
                    ))}
                  </h2>
                </div>
                <p className="text-gray-700 text-justify leading-relaxed">
                  {section.description}
                </p>
                <div className="w-16 h-1 bg-gray-200 mt-6"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StoryDetailCard;

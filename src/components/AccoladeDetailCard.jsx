import React from "react";
import { motion } from "framer-motion";

const AccoladeDetailCard = ({ coverImage, title, description, content }) => {
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
            {/* Enhanced title with decorative elements */}
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="w-16 h-0.5 bg-white/60"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-16 h-0.5 bg-white/60"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide">
                {name}
              </h1>
              
              {designation && (
                <div className="bg-orange-400/20 border border-orange-300/50 px-6 py-3 rounded-full backdrop-blur-sm">
                  <p className="text-xl md:text-2xl text-orange-100 italic font-medium">
                    {designation}
                  </p>
                </div>
              )}
            </div>

            {/* Enhanced description */}
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto font-light"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            {/* Decorative scroll indicator */}
            <motion.div
              className="flex flex-col items-center space-y-2 mt-12"
              variants={itemVariants}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm text-white/70 uppercase tracking-wider">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
              </div>
            </motion.div>
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
        {/* Accolade Content with Modern Design */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Text content with enhanced design */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-0.5 bg-orange-400"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="flex items-center space-x-2 pt-4">
                  <div className="w-12 h-0.5 bg-orange-300"></div>
                  <div className="w-6 h-0.5 bg-orange-500"></div>
                  <div className="w-3 h-0.5 bg-orange-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AccoladeDetailCard;

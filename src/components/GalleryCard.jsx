import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

const GalleryCard = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation for each image
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  console.log(images);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((image, index) => (
          <motion.div
            key={image._id || index} // Use _id if available, fallback to index
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)} // Pass the entire image object to modal
          >
            <motion.img
              src={image.url} // Use the `url` property from the image object
              alt={image.caption || `Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
            />

            {/* Caption (if exists) */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm">
                {image.caption}
              </div>
            )}

            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p className="text-white font-bold text-lg">View Image</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close modal on backdrop click
          >
            <motion.div
              className="relative flex items-center justify-center h-[90vh] w-[90vw] max-w-[1400px]"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close on inside click
            >
              <div className="relative flex items-center justify-center h-full w-full">
                <div className="relative bg-transparent rounded-lg overflow-hidden">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.caption || "Selected Image"}
                    className="max-h-[85vh] max-w-[85vw] object-contain"
                    style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' }}
                  />

                  {/* Floating caption display */}
                  {selectedImage.caption && (
                    <div className="absolute bottom-4 left-0 right-0 mx-auto bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm p-3 md:p-4 w-fit max-w-[90%] rounded-lg mx-auto text-center">
                      <p className="text-white text-sm md:text-base">{selectedImage.caption}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Improved close button */}
              <button
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200 hover:rotate-90 focus:outline-none z-10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <AiFillCloseCircle className="text-3xl" />
              </button>

              {/* Navigation hint */}
              <div className="absolute bottom-2 right-4 text-white text-xs opacity-60">
                <p>Click outside to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryCard;
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
            
            {/* Category Badge (if available) */}
            {image.categoryTitle && (
              <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                {image.categoryTitle}
              </div>
            )}
            
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
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close modal on backdrop click
          >
            <motion.div
              className="relative p-2 max-w-4xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close on inside click
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption || "Selected Image"}
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg mx-auto"
              />
              
              {/* Display caption in modal if available */}
              {selectedImage.caption && (
                <div className="bg-white p-4 rounded-b-lg mt-2">
                  <p className="text-center text-gray-800">{selectedImage.caption}</p>
                </div>
              )}
              
              <AiFillCloseCircle
                className="absolute top-4 right-4 text-white text-3xl cursor-pointer hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryCard;
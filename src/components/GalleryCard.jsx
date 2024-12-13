import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

const GalleryCard = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Set the delay here for each image
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

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
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          >
            <motion.img
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
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

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)} // Close modal on backdrop click
        >
          <motion.div
            className="relative p-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
            <AiFillCloseCircle
              className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
              onClick={() => setSelectedImage(null)}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryCard;

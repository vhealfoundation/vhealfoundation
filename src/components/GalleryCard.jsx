import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

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

  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
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
            onClick={() => openLightbox(image)} // Pass the entire image object to modal
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption || "Selected Image"}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute top-0 right-0 m-4">
                <button
                  onClick={closeLightbox}
                  className="bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-b-lg p-4 mt-2">
                <h3 className="text-xl font-bold text-white text-center">{selectedImage.caption}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryCard;
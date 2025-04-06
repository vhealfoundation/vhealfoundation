import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../hoc/Layout';
import { relatedImagesData } from '../constants/data';
import { motion, AnimatePresence } from 'framer-motion';
import LineSeperator from '../components/LineSeperator';
import { FaSearch, FaTimes } from 'react-icons/fa';

const ImageGallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Get the gallery data for this ID
  const galleryData = relatedImagesData[id];

  // If no data found, show error message
  if (!galleryData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">Gallery Not Found</h1>
        <p className="mt-4 text-gray-600">The gallery you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

  return (
    <div className="mt-12 pb-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-primary text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {galleryData.title}
          </motion.h1>
          <LineSeperator className="my-4 mx-auto" />
          <motion.p
            className="text-gray-700 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {galleryData.description}
          </motion.p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryData.images.map((image) => (
            <motion.div
              key={image.id}
              className="group cursor-pointer overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => openLightbox(image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <FaSearch className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="pt-3">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 text-center">{image.caption}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
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
                alt={selectedImage.caption}
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

export default Layout(ImageGallery);

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../hoc/Layout';
import { relatedImagesData } from '../constants/data';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaVideo, FaPhoneAlt, FaComments } from 'react-icons/fa';
import '../styles/gridLayout.css';

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
      <div className="bg-gradient-to-br from-primary/85 via-primary/70 to-orange-500/75 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {galleryData.title}
          </motion.h1>
          <div className="flex items-center justify-center space-x-2 my-4">
            <div className="w-12 h-0.5 bg-white/60"></div>
            <div className="w-24 h-1 bg-orange-500"></div>
            <div className="w-12 h-0.5 bg-white/60"></div>
          </div>
          <motion.p
            className="text-white text-lg md:text-xl max-w-3xl mx-auto font-medium italic backdrop-blur-sm bg-white/5 py-3 px-6 rounded-full inline-block mt-4 border border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {galleryData.description}
          </motion.p>
        </div>
      </div>

      {/* Sections */}
      {galleryData.sections ? (
        <div className="max-w-6xl mx-auto px-4 py-12">
          {galleryData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-16">
              {/* Section Title */}
              <div className="mb-8 pl-2 md:pl-10 ">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-0.5 bg-orange-300"></div>
                  <div className="w-16 h-1 bg-orange-500"></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">{section.title}</h2>
              </div>

              {/* Section Gallery Grid or Tree Structure */}
              {section.title === "Modes of Counselling" ? (
                <motion.div
                  className="w-full py-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Tree-like structure for Modes of Counselling */}
                  <div className="relative max-w-3xl mx-auto px-4">
                    {/* Main node */}
                    <motion.div
                      className="bg-primary text-white p-6 rounded-xl shadow-lg max-w-[280px] w-full mx-auto mb-16 text-center relative z-10"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <FaComments className="text-white text-4xl" />
                      </div>
                      <h3 className="text-xl font-bold">Modes of Counselling</h3>
                    </motion.div>

                    {/* Vertical line */}
                    <div className="absolute top-[9.5rem] left-1/2 w-0.5 h-16 bg-orange-500 -translate-x-1/2"></div>

                    {/* Horizontal line - visible only on desktop */}
                    <div className="absolute top-[13.5rem] left-1/2 w-[80%] h-0.5 bg-orange-500 -translate-x-1/2 hidden md:block"></div>

                    {/* Child nodes */}
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-6 md:gap-4">
                      {/* Vertical lines to child nodes - visible only on desktop */}
                      <div className="absolute top-[13.5rem] left-[10%] w-0.5 h-12 bg-orange-500 hidden md:block"></div>
                      <div className="absolute top-[13.5rem] left-1/2 w-0.5 h-12 bg-orange-500 -translate-x-1/2 hidden md:block"></div>
                      <div className="absolute top-[13.5rem] left-[90%] w-0.5 h-12 bg-orange-500 hidden md:block"></div>

                      {/* Mobile vertical line */}
                      <div className="absolute top-[9.5rem] left-1/2 w-0.5 h-[calc(100%-9.5rem)] bg-orange-500 -translate-x-1/2 md:hidden -z-10"></div>

                      <motion.div
                        className="bg-white border-2 border-primary text-primary p-5 rounded-xl shadow-md max-w-[280px] w-full md:w-56 text-center md:mt-28 relative z-10"
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaVideo className="text-orange-500 text-3xl" />
                        </div>
                        <h4 className="font-bold mb-2 text-lg">Video</h4>
                        <p className="text-sm text-gray-600">Virtual face-to-face counselling via video call</p>
                      </motion.div>

                      <motion.div
                        className="bg-white border-2 border-primary text-primary p-5 rounded-xl shadow-md max-w-[280px] w-full md:w-56 text-center md:mt-28 relative z-10"
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaPhoneAlt className="text-primary text-2xl" />
                        </div>
                        <h4 className="font-bold mb-2 text-lg">Voice</h4>
                        <p className="text-sm text-gray-600">Audio call counselling for convenience</p>
                      </motion.div>

                      <motion.div
                        className="bg-white border-2 border-primary text-primary p-5 rounded-xl shadow-md max-w-[280px] w-full md:w-56 text-center md:mt-28 relative z-10"
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaComments className="text-orange-500 text-2xl" />
                        </div>
                        <h4 className="font-bold mb-2 text-lg">Chat</h4>
                        <p className="text-sm text-gray-600">Text-based counselling through messaging</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="w-full"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                    {section.images.map((image) => (
                      <motion.div
                        key={image.id}
                        className="group cursor-pointer overflow-hidden rounded-xl shadow-md flex flex-col"
                        variants={itemVariants}
                        whileHover={{ y: -8, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', transition: { duration: 0.2 } }}
                        onClick={() => openLightbox(image)}
                        style={{
                          width: 'calc(100% - 1rem)',
                          maxWidth: '280px',
                          margin: '0.25rem 0.5rem',
                          flex: '0 0 auto',
                        }}

                    >
                      <div className="relative aspect-square overflow-hidden rounded-t-xl">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                            <FaSearch className="text-white text-xl" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white rounded-b-xl flex-grow flex flex-col justify-center border-t border-gray-100">
                        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-primary text-center line-clamp-2">{image.caption}</h3>
                      </div>
                    </motion.div>
                  ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <motion.div
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
              {galleryData.images.map((image) => (
                <motion.div
                  key={image.id}
                  className="group cursor-pointer overflow-hidden rounded-xl shadow-md flex flex-col"
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', transition: { duration: 0.2 } }}
                  onClick={() => openLightbox(image)}
                  style={{
                    width: 'calc(100% - 1rem)',
                    maxWidth: '280px',
                    margin: '0.25rem 0.5rem',
                    flex: '0 0 auto',
                  }}

              >
                <div className="relative aspect-square overflow-hidden rounded-t-xl">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <FaSearch className="text-white text-xl" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-b-xl flex-grow flex flex-col justify-center border-t border-gray-100">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-primary text-center line-clamp-2">{image.caption}</h3>
                </div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      )}

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

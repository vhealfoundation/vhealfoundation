import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import LineSeperator from "./LineSeperator";
import { useInView } from "react-intersection-observer";
import {reviewsData} from "../constants/data";


const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  // For responsive display
  const [cardsToShow, setCardsToShow] = useState(3);
  const autoPlayRef = useRef(null);

  // Update cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (reviewsData.length - cardsToShow + 1));
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isPaused, cardsToShow, reviewsData.length]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Manual navigation
  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (reviewsData.length - cardsToShow + 1)
    );
  };

  const goToPrev = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + (reviewsData.length - cardsToShow + 1)) % (reviewsData.length - cardsToShow + 1)
    );
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar
        key={i}
        className={`${i < rating ? "text-yellow-400" : "text-gray-300"} text-lg`}
      />
    ));
  };

  // Get visible cards
  const visibleCards = reviewsData.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div
      ref={ref}
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Client Testimonials
          </h2>
          <LineSeperator className="mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from those who have experienced transformation through our counseling services
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-4 md:px-10">
            <div className="flex gap-6 transition-all duration-500 ease-in-out">
              <AnimatePresence mode="wait">
                {visibleCards.map((review, index) => (
                  <motion.div
                    key={review.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`flex-shrink-0 w-full ${
                      cardsToShow === 1 ? 'w-full' :
                      cardsToShow === 2 ? 'w-1/2' :
                      'w-1/3'
                    } p-4`}
                    style={{ flex: `0 0 calc(100% / ${cardsToShow})` }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col relative overflow-hidden border-t-4 border-primary">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden z-0">
                        <div className="absolute transform rotate-45 bg-orange-500/10 w-24 h-24 -top-12 -right-12"></div>
                      </div>

                      <div className="absolute -top-6 -left-6 text-orange-500/10 z-0">
                        <FaQuoteLeft className="text-7xl" />
                      </div>

                      {/* Content */}
                      <div className="z-10 flex flex-col h-full">
                        {/* Review Text */}
                        <div className="flex-grow mb-4">
                          <p className="text-gray-600 italic relative z-10 text-base">
                            "{review.review}"
                          </p>
                        </div>

                        {/* Profile and Rating */}
                        <div className="mt-auto pt-4 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-lg text-primary">{review.name}</h3>
                              <p className="text-gray-500 text-sm">{review.role}</p>
                            </div>
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: reviewsData.length - cardsToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsPaused(true);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-primary w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

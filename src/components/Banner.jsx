import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import CustomButton from "./CustomButton";
import { Link } from "react-scroll";
import {slides} from "../constants/data";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right-to-left, -1 for left-to-right
  const [showOverlay, setShowOverlay] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const autoPlayRef = useRef(null);
  const isFirstRender = useRef(true);
  const slideTimerRef = useRef(null);


  // Start the sequence for a new slide
  const startSlideSequence = () => {
    // Reset states
    setShowOverlay(false);
    setShowContent(false);

    // Step 1: Show the overlay after a delay (picture is already visible)
    setTimeout(() => {
      setShowOverlay(true);

      // Step 2: Show the content after the overlay transition
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
    }, 1000);
  };

  // When a new slide becomes active
  useEffect(() => {
    startSlideSequence();

    // Clear any existing timers
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }

    // Set up auto-advance timer
    slideTimerRef.current = setTimeout(() => {
      setPreviousSlide(currentSlide);
      setDirection(1); // Right to left for auto-advance
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [currentSlide, slides.length]);

  // Manual slide change function
  const handleSlideChange = (index) => {
    if (index !== currentSlide) {
      setPreviousSlide(currentSlide);
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  };

  // Variants for slide animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1 // Start fully visible
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1 // Stay fully visible while exiting
    })
  };

  // Variants for overlay animations (right to left)
  const overlayVariants = {
    hidden: {
      width: "0%",
      right: 0,
      left: "auto"
    },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  // Variants for content animations
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 150,
      transition: {
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4
      }
    }
  };


  const mobilecontentVariants = {
    hidden: {
      opacity: 0,
      y: 0
    },
    visible: {
      opacity: 1,
      y: 100,
      transition: {
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4
      }
    }
  };
  return (
    <section className="relative h-auto overflow-hidden z-0">
      {/* Desktop Layout */}
      <div className="hidden md:block relative h-[730px] overflow-hidden z-0">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
            onAnimationComplete={() => {
              if (isFirstRender.current) {
                isFirstRender.current = false;
              }
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
            >
              {/* Dark overlay (always present) */}


              {/* Lighter overlay with left-to-right animation */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-35"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    key="overlay"
                  ></motion.div>
                )}
              </AnimatePresence>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center px-12 z-10">
                <AnimatePresence>
                  {showContent && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="content"
                      className="flex flex-col items-center gap-6 text-white text-center max-w-4xl bg-opacity-100"
                    >
                      <h2 className="font-semibold leading-tight md:text-[57px] text-[35px] text-shadow-lg">
                        {slides[currentSlide].title}
                      </h2>
                      <p className="w-4/5 md:text-[25px] text-[18px] font-normal p-2 rounded-lg shadow-xl" style={{ backgroundColor: '#fd8917' }}>
                        {slides[currentSlide].subtitle}
                      </p>

                      {currentSlide === 0 && (
                        <Link
                          to="what-we-do"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-60}
                          duration={800}
                          className="mx-auto mt-4"
                        >
                          <CustomButton className="w-[180px] h-12 text-white shadow-lg transform hover:scale-105 transition-transform" style={{ backgroundColor: '#fd8917', borderColor: '#fd8917' }}>
                            Learn More
                            <AiOutlineArrowRight size={20} />
                          </CustomButton>
                        </Link>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots for Desktop */}
        <div className="absolute bottom-6 z-30 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-transparent hover:bg-white hover:bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative h-[500px] overflow-hidden z-0">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
            >
              {/* Dark overlay (always present) */}


              {/* Lighter overlay with left-to-right animation */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-35"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    key="overlay"
                  ></motion.div>
                )}
              </AnimatePresence>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center px-4 z-10">
                <AnimatePresence>
                  {showContent && (
                    <motion.div
                      variants={mobilecontentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="content"
                      className="flex flex-col items-center gap-4 text-white text-center bg-opacity-100 z-10"
                    >
                      <h2 className="font-semibold leading-tight text-[35px] text-shadow-lg">
                        {slides[currentSlide].title}
                      </h2>
                      <p className="w-4/5 text-[16px] font-normal p-2 rounded-lg shadow-xl" style={{ backgroundColor: '#fd8917' }}>
                        {slides[currentSlide].subtitle}
                      </p>

                      {currentSlide === 0 && (
                        <Link
                          to="what-we-do"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-60}
                          duration={800}
                          className="mx-auto mt-4"
                        >
                          <CustomButton className="w-[150px] h-12 text-white shadow-lg transform hover:scale-105 transition-transform" style={{ backgroundColor: '#fd8917', borderColor: '#fd8917' }}>
                            Learn More
                            <AiOutlineArrowRight size={20} />
                          </CustomButton>
                        </Link>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots for Mobile */}
        <div className="absolute bottom-4 z-30 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-transparent hover:bg-white hover:bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;










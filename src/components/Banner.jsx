import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import CustomButton from "./CustomButton";
import { Link } from "react-scroll";
import { slides } from "../constants/data";

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
    }, 10000); // Change slide every 7 seconds

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

  // Variants for content animations - improved positioning
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 50,
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
      y: 80
    },
    visible: {
      opacity: 1,
      y: 30,
      transition: {
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4
      }
    }
  };

  const backgroundVariants = {
    initial: {
      scale: 1
    },
    animate: {
      scale: 1.2,
      transition: {
        duration: 7,
        ease: "linear"
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
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
            onAnimationComplete={() => {
              if (isFirstRender.current) {
                isFirstRender.current = false;
              }
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover"
            >
              <motion.div
                variants={backgroundVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-cover"
                style={{
                  backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
                  backgroundPosition: slides[currentSlide].backgroundPosition || 'center top'
                }}
              />
              {/* Dark overlay (always present) */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Lighter overlay with left-to-right animation */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
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
                      className="flex flex-col items-center  text-white text-center max-w-4xl"
                    >
                      {/* Title with decorative elements */}
                      <div className="relative">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full opacity-70"></div>
                        <h2 className="font-bold leading-tight md:text-[50px] text-[30px] text-shadow-lg tracking-wide whitespace-pre-line">
                          {slides[currentSlide].title}
                        </h2>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full opacity-70"></div>
                      </div>

                      {/* Subtitle with dramatic highlight */}
                      <div className="mt-20 relative bg-black/50 backdrop-blur-sm rounded-full pb-4  px-8 ">
                        <div className="flex justify-between -mb-8">
                          <div className="text-orange-500 text-6xl opacity-60 translate-y-4">"</div>
                          <div className="text-orange-500 text-6xl opacity-60 translate-y-4">"</div>
                        </div>
                        <p className="md:text-[28px] text-[20px] text-orange-500 font-medium leading-tight italic px-8">
                          {slides[currentSlide].subtitle}
                        </p>
                      </div>
                      {/* Subtitle with new styling */}
                      {/*  <div className="relative mt-4 max-w-3xl">
                        <p className="italic md:text-[28px] text-[20px] font-light tracking-wide text-shadow-md">
                          {slides[currentSlide].subtitle}
                        </p>

                      </div> */}

                      {/*   {currentSlide === 0 && (
                        <Link
                          to="what-we-do"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-60}
                          duration={800}
                          className="mx-auto mt-12"
                        >
                          <CustomButton
                            className="w-[200px] h-14 text-white shadow-xl transform hover:scale-105 transition-transform text-lg font-medium"
                            style={{
                              backgroundColor: '#fd8917',
                              borderColor: '#fd8917',
                              boxShadow: '0 4px 14px rgba(253, 137, 23, 0.5)'
                            }}
                          >
                            Learn More
                            <AiOutlineArrowRight size={22} />
                          </CustomButton>
                        </Link>
                      )} */}







                      {currentSlide === 0 && (
                        <Link
                          to="what-we-do"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-60}
                          duration={800}
                          className="mx-auto mt-8"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                            <div className="relative flex items-center gap-2 px-8 py-4 bg-black rounded-full border border-orange-500">
                              <span className="text-xl font-semibold text-white group-hover:text-orange-200 transition-colors">
                                Learn More
                              </span>
                              <AiOutlineArrowRight
                                size={24}
                                className="text-orange-500 group-hover:translate-x-1 transition-transform"
                              />
                            </div>
                          </motion.button>
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
        <div className="absolute bottom-8 z-30 left-1/2 transform -translate-x-1/2 flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                ? "bg-white scale-125 w-8"
                : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative h-[550px] overflow-hidden z-0">
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
             
            >
              <motion.div
                variants={backgroundVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
                }}
              />
              {/* Dark overlay (always present) */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Lighter overlay with left-to-right animation */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    key="overlay"
                  ></motion.div>
                )}
              </AnimatePresence>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center px-6 z-10">
                <AnimatePresence>
                  {showContent && (
                    <motion.div
                      variants={mobilecontentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="content"
                      className="flex flex-col items-center gap-6 text-white text-center z-10 mt-4"
                    >
                        {/* Title with decorative elements */}
                        <div className="relative">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full opacity-70"></div>
                        <h2 className="font-bold leading-tight md:text-[50px] text-[30px] text-shadow-lg tracking-wide whitespace-pre-line">
                          {slides[currentSlide].title}
                        </h2>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full opacity-70"></div>
                      </div>

                      {/* Subtitle with dramatic highlight */}
                      <div className="mt-4 relative bg-black/50 backdrop-blur-sm rounded-full pb-4 px-12">
                        <div className="flex justify-between -mb-4">
                          <div className="text-orange-500 text-3xl opacity-60 translate-y-4">"</div>
                          <div className="text-orange-500 text-3xl opacity-60 translate-y-4">"</div>
                        </div>
                        <p className="text-[18px] text-orange-500 font-medium leading-tight italic px-2">
                          {slides[currentSlide].subtitle}
                        </p>
                      </div>
                      {currentSlide === 0 && (
                        <Link
                          to="what-we-do"
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          offset={-60}
                          duration={800}
                          className="mx-auto mt-2"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                            <div className="relative flex items-center gap-2 px-8 py-4 bg-black rounded-full border border-orange-500">
                              <span className="text-md font-semibold text-white group-hover:text-orange-200 transition-colors">
                                Learn More
                              </span>
                              <AiOutlineArrowRight
                                size={18}
                                className="text-orange-500 group-hover:translate-x-1 transition-transform"
                              />
                            </div>
                          </motion.button>
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
        <div className="absolute bottom-6 z-30 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                ? "bg-white scale-125 w-6"
                : "bg-white/50 hover:bg-white/70"
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










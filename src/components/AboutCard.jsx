import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LineSeperator from "./LineSeperator";

const AboutCard = ({ sections = [], isAbout = false, isMission = false, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRefs = useRef([]);

  // Initialize refs for each section
  useEffect(() => {
    if (sections && sections.length > 0) {
      sectionRefs.current = Array(sections.length).fill().map((_, i) => sectionRefs.current[i] || React.createRef());
    }
  }, [sections]);

  // Handle window innerWidth safely with useEffect
  const [rootMargin, setRootMargin] = useState("880px");

  useEffect(() => {
    const handleResize = () => {
      setRootMargin(window.innerWidth <= 768 ? "1300px" : "880px");
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { ref, inView } = useInView({
    rootMargin,
    threshold: 0.2,
  });

  // Handle navigation
  const goToSection = (index) => {
    if (!sections || sections.length === 0) return;

    // Pause auto-sliding when user manually navigates
    setIsPaused(true);

    if (index >= 0 && index < sections.length) {
      setCurrentIndex(index);
      // Save current index to sessionStorage
      sessionStorage.setItem('whatWeDo-selectedIndex', index.toString());

      if (sectionRefs.current && sectionRefs.current[index]?.current) {
        sectionRefs.current[index].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  };

  const nextSection = () => goToSection(currentIndex + 1);
  const prevSection = () => goToSection(currentIndex - 1);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setIsPaused(true); // Pause auto-sliding on touch
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      nextSection();
    }
    if (touchEnd - touchStart > 100) {
      // Swipe right
      prevSection();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSection();
      } else if (e.key === 'ArrowLeft') {
        prevSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  // // Auto-slide functionality
  // useEffect(() => {
  //   if (!sections || sections.length <= 1 || isPaused) return;

  //   const autoSlideInterval = setInterval(() => {
  //     if (currentIndex < sections.length - 1) {
  //       setCurrentIndex(prevIndex => prevIndex + 1);
  //     } else {
  //       setCurrentIndex(0);
  //     }
  //   }, 5000); // Change slide every 5 seconds

  //   return () => {
  //     clearInterval(autoSlideInterval);
  //   };
  // }, [currentIndex, sections, isPaused]);

  // Reset pause state after some inactivity
  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 10000); // Resume auto-sliding after 10 seconds of inactivity

      return () => {
        clearTimeout(pauseTimeout);
      };
    }
  }, [isPaused]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  // Mouse hover handlers to pause/resume auto-slide
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section
      className="px-4 pb-12 md:px-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      {/* Core Pillars heading - only shown when isAbout is true */}
      {isAbout && (
        <div className="text-center">
          <h2 className="text-primary text-3xl font-bold mb-3">Core Pillars</h2>
          <LineSeperator className="mb-8" />
        </div>
      )}

      {/* Enhanced Section navigation indicators */}
      {sections && sections.length > 1 && (
        <div className="flex justify-center mt-8 mb-6 gap-3">
          {sections.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => goToSection(index)}
              className={`h-3 rounded-full transition-all duration-300 ${currentIndex === index
                ? 'w-8'
                : 'bg-gray-300 hover:bg-gray-400 w-3 hover:w-4'
                }`}
              style={{
                backgroundColor: currentIndex === index ? '#fd8917' : undefined
              }}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Map through sections */}
      <div className="mt-8 relative">
        <AnimatePresence mode="wait">
          {sections && sections.length > 0 && (
            <motion.div
              key={`section-${currentIndex}`}
              ref={sectionRefs.current[currentIndex]}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sectionVariants}
              className="min-h-[500px] flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isAbout ? (
                // Modified layout for isAbout=true to fill the space below the image
                <div className="w-full">
                  <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full`}>
                    {/* Left column with image and features below */}
                    <div className="w-full md:w-1/2 flex flex-col">
                      <motion.div
                        ref={ref}
                        className="w-full mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          className="rounded-lg shadow-lg w-full h-auto object-cover object-top max-h-[350px] md:max-h-[600px]"
                          src={sections[currentIndex]?.image}
                          alt={sections[currentIndex]?.alt || "Image"}
                        />

                      </motion.div>
                    </div>

                    {/* Right column with all content */}
                    <motion.div
                      ref={ref}
                      className="w-full flex flex-col pr-0 md:w-2/3 md:block md:pr-4 lg:pr-12 xl:pr-16"
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="h3 mb-3 text-primary text-3xl font-bold">{sections[currentIndex]?.heading}</h3>
                      <div className="architects-daughter-regular text-xl text-[#fd8917] mb-2">
                        {sections[currentIndex]?.subheading}
                      </div>
                      <p className="text-xl text-primary mb-6 text-justify">
                        {sections[currentIndex]?.description}
                      </p>

                      {/* All features */}
                      {sections[currentIndex]?.features && sections[currentIndex]?.features.length > 0 && (
                        <div className="text-lg text-primary -mb-2">
                          {sections[currentIndex]?.features?.map((feature, featureIndex) => {
                            // First, replace || with a temporary placeholder to preserve it during single | split
                            const tempFeature = feature.replace(/\|\|/g, '###LINEBREAK###');
                            const featureParts = tempFeature.split("|").map(part => part.trim()).filter(part => part);
                            if (featureParts.length === 0) return null;

                            const heading = featureParts[0];
                            // Restore the || delimiter in bullet points
                            const bulletPoints = featureParts.slice(1).map(point => point.replace(/###LINEBREAK###/g, '||'));

                            return (
                              <div key={featureIndex} className="mb-6">
                                <h4 className="font-bold text-primary mb-3">{heading}</h4>
                                {bulletPoints.length > 0 && (
                                  <div className="ml-4 flex flex-col md:flex-row md:gap-x-4">
                                    {/* First Column */}
                                    <ul className="flex-1 flex flex-col">
                                      {bulletPoints.slice(0, Math.ceil(bulletPoints.length / 2)).map((point, pointIndex) => {
                                        // Check if the point contains double pipe delimiter for line breaks
                                        const parts = point.split('||').map(part => part.trim());

                                        return (
                                          <li
                                            key={`left-${pointIndex}`}
                                            className="flex items-start mb-2"
                                          >
                                            <div className="mt-1 p-1 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                              </svg>
                                            </div>
                                            <div>
                                              <div>{parts[0]}</div>
                                              {parts[1] && <div className="text-gray-600 text-sm mt-1 italic">{parts[1]}</div>}
                                            </div>
                                          </li>
                                        );
                                      })}
                                    </ul>

                                    {/* Second Column - Only show on desktop and if there are more than half the items */}
                                    {bulletPoints.length > Math.ceil(bulletPoints.length / 2) && (
                                      <ul className="hidden md:flex flex-1 flex-col">
                                        {bulletPoints.slice(Math.ceil(bulletPoints.length / 2)).map((point, pointIndex) => {
                                          // Check if the point contains double pipe delimiter for line breaks
                                          const parts = point.split('||').map(part => part.trim());

                                          return (
                                            <li
                                              key={`right-${pointIndex}`}
                                              className="flex items-start mb-2"
                                            >
                                              <div className="mt-1 p-1 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                              </div>
                                              <div>
                                                <div>{parts[0]}</div>
                                                {parts[1] && <div className="text-gray-600 text-sm mt-1 italic">{parts[1]}</div>}
                                              </div>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    )}
                                  </div>
                                )}

                              </div>
                            );
                          })}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              ) : (
                // Original layout for non-about pages
                <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full`}>
                  <motion.div
                    ref={ref}
                    className="w-full md:w-1/2 md:mb-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={sections[currentIndex]?.image}
                        alt={sections[currentIndex]?.alt || "Image"}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    ref={ref}
                    className="text-justify w-full flex flex-col pr-0 md:w-1/2 md:block md:pr-4 lg:pr-12 xl:pr-16"
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className=" h3 mb-3 text-primary text-3xl font-bold">{sections[currentIndex]?.heading}</h3>
                    <div className="architects-daughter-regular  text-xl text-[#fd8917] mb-2">
                      {sections[currentIndex]?.subheading}
                    </div>
                    <p className="text-xl text-primary mb-4">
                      {sections[currentIndex]?.description}
                    </p>
                    {isMission ? (
                      <div className="text-lg text-primary -mb-2">
                        {sections[currentIndex]?.features?.map((feature, featureIndex) => {
                          // First, replace || with a temporary placeholder to preserve it during single | split
                          const tempFeature = feature.replace(/\|\|/g, '###LINEBREAK###');
                          const featureParts = tempFeature.split("|").map(part => part.trim()).filter(part => part);

                          // If there are no parts, return null
                          if (featureParts.length === 0) return null;

                          // Get the first part as the heading
                          const heading = featureParts[0];
                          // Get the rest of the parts as bullet points and restore the || delimiter
                          const bulletPoints = featureParts.slice(1).map(point => point.replace(/###LINEBREAK###/g, '||'));

                          return (
                            <div key={featureIndex} className="mb-4">
                              {/* Render the heading */}
                              <h4 className="font-bold text-primary mb-2">{heading}</h4>

                              {/* Render the bullet points */}
                              {bulletPoints.length > 0 && (
                                <ul className="ml-4">
                                  {bulletPoints.map((point, pointIndex) => {
                                    // Check if the point contains double pipe delimiter for line breaks
                                    const parts = point.split('||').map(part => part.trim());

                                    return (
                                      <li
                                        key={`${featureIndex}-${pointIndex}`}
                                        className="flex items-start mb-2"
                                      >
                                        <div className="mt-1 p-1 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                          </svg>
                                        </div>
                                        <div>
                                          <div>{parts[0]}</div>
                                          {parts[1] && <div className="text-gray-600 text-sm mt-1">{parts[1]}</div>}
                                        </div>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : null}

                  </motion.div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation arrows - now at top right */}
        {sections && sections.length > 1 && (
          <div className="-right-6 absolute top-0 flex gap-2 z-10 hidden md:flex">
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={prevSection}
              disabled={currentIndex === 0}
              className={`bg-white/80 hover:bg-white p-2 rounded-full shadow-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              style={{ color: '#fd8917' }}
              aria-label="Previous section"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={nextSection}
              disabled={currentIndex === sections.length - 1}
              className={`bg-white/80 hover:bg-white p-2 rounded-full shadow-lg ${currentIndex === sections.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              style={{ color: '#fd8917' }}
              aria-label="Next section"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        )}

        {/* Enhanced Mobile navigation buttons */}
        {sections && sections.length > 1 && (
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={prevSection}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${currentIndex === 0
                ? 'text-primary cursor-not-allowed bg-gray-100'
                : 'bg-white shadow-md hover:shadow-lg'
                }`}
              style={{
                color: currentIndex === 0 ? undefined : '#fd8917',
                backgroundColor: currentIndex === 0 ? undefined : 'white'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous</span>
            </button>

            <button
              onClick={nextSection}
              disabled={currentIndex === sections.length - 1}
              className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 ${currentIndex === sections.length - 1
                ? 'text-primary cursor-not-allowed bg-gray-100'
                : 'bg-white shadow-md hover:shadow-lg'
                }`}
              style={{
                color: currentIndex === sections.length - 1 ? undefined : '#fd8917',
                backgroundColor: currentIndex === sections.length - 1 ? undefined : 'white'
              }}
            >
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutCard;

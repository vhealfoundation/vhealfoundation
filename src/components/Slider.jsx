import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";
import LineSeperator from "./LineSeperator";

const Slider = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-900">
      <h1 className="pt-12 text-4xl font-bold italic text-center text-white mb-3">Testimonials</h1>
      <div className="flex justify-center mb-8">
        <LineSeperator />
      </div>

      <div className="relative cflex justify-center items-center h-[500px] md:h-[550px] overflow-hidden">
        {/* Left Arrow */}
        <CustomButton
          className="border-2 rounded-full absolute bottom-3 md:bottom-[45%] left-28 md:left-8 text-white text-2xl p-3 rounded-full shadow-lg z-10 hover:scale-110 transition-transform duration-300"
          
          onClick={handlePrev}
        >
          &#8592;
        </CustomButton>

        {/* Cards */}
        <div className="flex justify-center items-center relative w-full h-full">
          {testimonials.map((testimonial, index) => {
            const isCenter = index === current;
            const isLeft = index === (current - 1 + testimonials.length) % testimonials.length;
            const isRight = index === (current + 1) % testimonials.length;

            return (
              <motion.div
                key={index}
                className={`absolute w-[90%] sm:w-[80%] max-w-sm h-[350px] sm:h-[400px] p-4 bg-secondary shadow-xl rounded-lg flex flex-col items-center text-center
          border-t-4 ${isCenter ? "scale-100 z-30" : "border-transparent scale-75 z-20 opacity-50"
                  }
          ${isLeft ? "translate-x-[-120%]" : ""}
          ${isRight ? "translate-x-[120%]" : ""}`}
                style={{ borderColor: isCenter ? '#fd8917' : 'transparent' }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isCenter ? 1 : 0.5,
                  scale: isCenter ? 1 : 0.75,
                  x: isLeft ? "-120%" : isRight ? "120%" : "0%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Profile Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 shadow-md object-cover ${isCenter ? "" : "border-gray-300"
                    } mb-4`}
                  style={{ borderColor: isCenter ? '#fd8917' : '' }}
                />
                {/* Testimonial Content */}
                <p className="text-lg sm:text-xl font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm sm:text-base text-gray-600 italic mt-2">"{testimonial.message}"</p>
                <p className="mt-4 text-xs sm:text-sm text-gray-500">
                  <span className="font-semibold" style={{ color: '#fd8917' }}>Helped through:</span> {testimonial.supportType}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <CustomButton
          className="border-2 rounded-full absolute bottom-3 md:bottom-[45%] right-28 md:right-8 text-white text-2xl  p-3 rounded-full shadow-lg z-10 hover:scale-110 transition-transform duration-300"
         
          onClick={handleNext}
        >
          &#8594;
        </CustomButton>
      </div>
    </div>
  );
};

export default Slider;

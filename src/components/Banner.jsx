import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../assets/hero.jpg";
import AppointmentBg from "../assets/hero3.jpg";
import DonateCard from "./DonateCard";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import CustomButton from "./CustomButton";
import { Link } from "react-scroll";
import AppointmentCard from "./AppointmentCard";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      backgroundImage: Hero,
      content: (
        <>
          <h2>
            <span className="font-semibold leading-none md:text-[57px] text-[35px]">
              Join Us in Empowering
            </span>
            <br />
            <span className="font-semibold leading-none md:text-[57px] text-[35px]">
              Lives for a Better Future
            </span>
          </h2>
          <p className="md:text-[25px] w-full md:w-3/4 text-[16px] font-normal mt-3 md:mt-6">
            We are a non-profit organization dedicated to helping released
            jailers reintegrate into society, rebuild their lives, and regain
            their dignity.
          </p>
          <Link
            to="what-we-do"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={800}
          >
            <CustomButton className="w-[150px] h-12 text-white bg-primary hover:bg-primary-dark">
              Get Involved
              <AiOutlineArrowRight size={20} />
            </CustomButton>
          </Link>
        </>
      ),
      extraContent: <DonateCard />,
    },
    {
      backgroundImage: AppointmentBg,
      content: (
        <>
        <h2>
            <span className="font-semibold leading-none md:text-[57px] text-[35px]">
             Your Mental Health Matters
            </span>
            <br />
            <span className="font-semibold leading-none md:text-[57px] text-[35px]">
              Don't Wait, Book an Appointment!
            </span>
          </h2>
          
          <p className="md:text-[25px] w-full md:w-3/4 text-[16px] font-normal mt-3 md:mt-6">
            Book an appointment with our expert psychiatrists and take the
            first step toward better mental well-being.
          </p>
          <button
            className="w-[200px] h-12 mt-4 md:mt-6 text-white bg-primary hover:bg-primary-dark rounded-lg flex items-center justify-center gap-2"
            onClick={() => navigate("/appointments")}
          >
            Book Now <AiOutlineArrowRight size={20} />
          </button>
        </>
      ),
      extraContent: <AppointmentCard isStandalone={false} />
    },
  ];

  return (
    <section className="relative h-auto overflow-hidden">
      {/* Desktop Layout - Cards overlaid on image */}
      <div className="hidden md:block relative h-[730px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-35"></div>
            <div className="relative h-full flex flex-row items-center justify-between px-12 pr-40">
              <div className="mt-20 flex items-center opacity-100">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-4 text-white w-[750px] px-[60px]"
                >
                  {slide.content}
                </motion.div>
              </div>
              {slide.extraContent && (
                <div className="z-20 opacity-100">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slide.extraContent}
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Dots for Desktop */}
        <div className="absolute bottom-6 z-30 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full border-2 border-white ${
                currentSlide === index ? "bg-white" : "bg-transparent"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Separate image and cards */}
      <div className="md:hidden">
        {/* Image Background Section */}
        <div className="relative h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-35"></div>
              <div className="relative h-full flex flex-col items-center pb-10">
                <div className="mt-16 flex items-center opacity-100">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-2 text-white px-4 w-full"
                  >
                    {slide.content}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}

          {/* Dots for Mobile */}
          <div className="absolute bottom-4 z-30 left-1/2 transform -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full border-2 border-white ${
                  currentSlide === index ? "bg-white" : "bg-transparent"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Cards Section - below the image (mobile only) */}
        <div className="bg-white py-8 px-4">
          <div className="transition-opacity duration-500 opacity-100">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {slides[currentSlide].extraContent}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

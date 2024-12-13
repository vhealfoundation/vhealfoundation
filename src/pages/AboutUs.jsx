import React from "react";
import { motion } from "framer-motion";
import Layout from "../hoc/Layout";
import AboutCard from "../components/AboutCard";
import { sections } from "../constants/data";
import AboutVideo from "../assets/aboutVideo.mp4";

const AboutUs = () => {
  const cardAnimation = (direction) => ({
    hidden: { x: direction === "left" ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  });

  return (
    <div className="mt-16 space-y-8" style={{backgroundVideo: `url(${AboutVideo})`}}>

      <div className="relative flex flex-col items-center gap-4">
        <div className="w-full h-full absolute inset-0 -z-10"></div>
        <video
          autoPlay
          loop
          muted
          className="w-full h-[800px] object-cover"
        >
          <source src={AboutVideo} type="video/mp4" />
        </video>

        <div className="z-10 top-6 md:top-10 absolute flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
            How We Work
          </h1>
          <div className="w-[120px] rounded-full border-4 border-b border-yellow-400 opacity-90"></div>
        </div>


        {/* Motion Card for Mission */}
        <motion.div
          className="absolute top-[16%] md:top-[30%] flex justify-start"
          initial="hidden"
          animate="visible"
          variants={cardAnimation("left")}
        >
          <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white p-4 md:p-8 rounded-r-lg shadow-lg w-[90%] md:w-[40%] backdrop-blur-sm bg-opacity-60">
            <h2 className="text-xl md:text-2xl font-bold">Our Mission</h2>
            <p className="text-md md:text-lg">
              To empower former inmates with the tools, resources, and
              opportunities they need to rebuild their lives, reintegrate into
              society, and unlock their full potential. We aim to break the
              cycle of recidivism by fostering dignity, compassion, and second
              chances.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="absolute top-[70%] md:top-[60%]">
        {/* Motion Card for Vision */}
        <motion.div
          className="relative flex justify-end"
          initial="hidden"
          animate="visible"
          variants={cardAnimation("right")}
        >
          <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white p-4 md:p-8 rounded-l-lg shadow-lg w-[90%] md:w-[40%] backdrop-blur-sm bg-opacity-60">
            <h2 className="text-xl md:text-2xl  font-bold">Our Vision</h2>
            <p className="text-md md:text-lg">
              To create a world where every individual leaving incarceration is
              met with acceptance, opportunity, and the support they need to
              thrive. Together, we envision a society that uplifts lives,
              reduces stigma, and builds stronger communities by investing in
              rehabilitation and restoration.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Additional Sections */}
      <div>
        <AboutCard sections={sections} />
      </div>
    </div>
  );
};

export default Layout(AboutUs);

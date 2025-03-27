import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Layout from "../hoc/Layout";
import AboutCard from "../components/AboutCard";
import AboutVideo from "../assets/aboutVideo.mp4";
import Loader from "../components/Loader";
import LineSeperator from "../components/LineSeperator";

const AboutUs = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideIn = (direction) => ({
    hidden: {
      x: direction === "left" ? -100 : 100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  });

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/aboutcards`);
        setAbout(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  // Mission items with icons
  const missionItems = [
    "Promote psychological-social counseling services to individuals and families.",
    "Provide psychological counseling and training to individuals at workplace.",
    "Provide counseling and training programmes for prisoners before and after their release.",
    "Provide social and psychological reintegration for prisoners after their release.",
    "Uplift and empower women prisoners.",
    "Upskill prisoners inside the prison and educate them on job opportunities after their release.",
    "Identify the skill gaps and provide appropriate training for prisoners to learn new skills inside the prison.",
    "Establish centers for employment generation for prisoners after their release.",
    "Provide legal and financial support to economically downtrodden prisoners for legal aid and to secure bail.",
    "Provide rehabilitation for prisoners who are mentally ill after their release.",
    "Provide educational, financial and social support to children of economically downtrodden prisoners.",
    "Provide required relief and assistance to family members of economically downtrodden prisoners who are outside the prison."
  ];

  return (
    <div className="mt-16 space-y-8">
      {/* Hero Section with Video Background */}
      <div className="relative flex flex-col items-center">
        <div className="w-full h-full absolute inset-0 -z-10"></div>
        <video
          autoPlay
          loop
          muted
          className="w-full h-[600px] object-cover brightness-[0.7]"
        >
          <source src={AboutVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            About Us
          </motion.h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            <LineSeperator className="mb-6" width="150px" />
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-center max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            V Heal Foundation (VHF) is a public charitable trust founded by Maria Nalini Xavier under the Indian Trust Act.
          </motion.p>
        </div>
      </div>

      {/* About Us Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="p-8 md:p-12">
          <div className="mb-10">
              <p className="text-lg text-gray-700 leading-relaxed text-justify tracking-wide">
                V Heal Foundation is a fiduciary association of Mental Health and Social Work professionals passionate to promote mental health and wellbeing though counselling, training and coaching. The foundation also fosters to uplift the underprivileged and undeserved in prison and after their release.
              </p>
            </div>

            {/* Our Mission Section */}
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideIn("left")}
            >
              <h2 className="text-3xl font-bold mb-3" style={{ color: '#fd8917' }}>Our Mission</h2>
              <LineSeperator className="mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {missionItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full" style={{ backgroundColor: 'rgba(253, 137, 23, 0.15)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fd8917">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-justify text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Additional Sections */}
      <div>
        {loading && <Loader />}
        <AboutCard sections={about} isAbout={true} />
      </div>
    </div>
  );
};

export default Layout(AboutUs);

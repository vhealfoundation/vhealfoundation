import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Layout from "../hoc/Layout";
import AboutCard from "../components/AboutCard";
import AboutVideo from "../assets/aboutVideo.mp4";
import Loader from "../components/Loader";
import { FaCheckCircle } from "react-icons/fa";
import SEO from "../components/SEO";

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
    "Promote psychological-social counselling services to individuals and families.",
    "Provide psychological counselling and training to individuals at workplace.",
    "Provide counselling and training programmes for prisoners before and after their release.",
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
      <SEO
        title="About Best Foundation for Mental Health & Social Work"
        description="Learn about V Heal Foundation - the best foundation for mental health professionals providing counselling, training, coaching & prisoner rehabilitation. Donate now to support our mission."
        keywords={[
          'Best Foundation', 'Best Counselling', 'Mental Health Foundation', 'Mental Health Professionals', 'Social Work',
          'V Heal Foundation', 'About Foundation', 'Counselling Services', 'Training', 'Coaching', 'Foundation About Us',
          'Prisoner Rehabilitation', 'Rehabilitation for Prisoners', 'Donate Now', 'Maria Nalini Xavier', 'Chennai',
          'New Life', 'Second Chances', 'Foundation Services', 'Mental Health Support', 'Counselling Foundation',
          'Best Mental Health Foundation', 'Foundation Work', 'Social Work Foundation', 'Rehabilitation Services',
          'Counselling and Coaching', 'Mental Health Training', 'Foundation Mission', 'Counselling Center',
          'Foundation Chennai', 'Life Transformation', 'Prisoner Support', 'Mental Wellbeing Foundation'
        ]}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "V Heal Foundation",
            "alternateName": "Best Foundation for Mental Health & Social Work",
            "description": "Best foundation for mental health professionals providing counselling, training, coaching & prisoner rehabilitation",
            "url": "https://vhealfoundation.org/aboutus",
            "foundingDate": "2020",
            "founder": {
              "@type": "Person",
              "name": "Maria Nalini Xavier",
              "jobTitle": "Founder & Director"
            },
            "mission": "To promote mental health and wellbeing through counselling, training and coaching while uplifting underprivileged and underserved populations",
            "serviceArea": {
              "@type": "Place",
              "name": "India"
            }
          }
        }}
      />
      {/* Hero Section with Video Background */}
      <div className="relative flex flex-col items-center">
        <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/40 to-orange-500/40 mix-blend-multiply z-10"></div>
        <video
          autoPlay
          loop
          muted
          className="w-full h-[600px] object-cover"
        >
          <source src={AboutVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-20">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-md"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            About Us
          </motion.h1>
          <div className="flex items-center justify-center space-x-2 my-4">
            <div className="w-12 h-0.5 bg-white/60"></div>
            <div className="w-24 h-1 bg-orange-500"></div>
            <div className="w-12 h-0.5 bg-white/60"></div>
          </div>
          <motion.p
            className="text-white text-lg md:text-xl max-w-3xl mx-auto font-medium italic backdrop-blur-sm bg-white/5 py-4 px-8 rounded-xl inline-block mt-4 border border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            V Heal Foundation is a fiduciary association of Mental Health and Social Work professionals passionate to promote mental health and wellbeing though counselling, training and coaching. The foundation also fosters to uplift the underprivileged and undeserved in prison and after their release.
          </motion.p>
        </div>
      </div>

      {/* About Us Content Section */}
      <div className="mx-auto px-4 md:px-20 pb-12">
        <motion.div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="p-8 md:p-12">
            {/* Introduction Section with Keywords */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-primary">About Our Foundation</h2>
              <p className="text-lg text-primary leading-relaxed text-justify tracking-wide mb-4">
                V Heal Foundation stands as the <strong>best foundation</strong> for mental health and social work, providing the <strong>best counselling</strong> services to transform lives. Our foundation specializes in comprehensive <strong>counselling</strong>, professional <strong>coaching</strong>, and dedicated <strong>rehabilitation for prisoners</strong>, offering them a pathway to a <strong>new life</strong> and <strong>second chances</strong>.
              </p>
              <p className="text-lg text-primary leading-relaxed text-justify tracking-wide">
                As a leading <strong>mental health foundation</strong>, we combine expert <strong>counselling services</strong> with innovative <strong>training</strong> programs. Our <strong>foundation</strong> brings together experienced professionals dedicated to <strong>rehabilitation</strong>, <strong>coaching</strong>, and providing comprehensive support for <strong>mental health</strong> and social work initiatives. Through our <strong>counselling and coaching</strong> programs, we create opportunities for <strong>life transformation</strong> and sustainable <strong>rehabilitation services</strong>.
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
              <h2 className="text-3xl font-bold mb-3 text-primary">Our Mission</h2>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-0.5 bg-orange-300"></div>
                <div className="w-16 h-1 bg-orange-500"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {missionItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-orange-500 flex-shrink-0 mt-1">
                      <FaCheckCircle size={18} />
                    </span>
                    <p className="text-justify text-primary">{item}</p>
                  </div>
                ))}
              </div>

              {/* Donate Now CTA */}
              {/* <motion.div
                className="mt-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideIn("right")}
              >
                <a
                  href="/toconnect"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">💝</span>
                  Donate Now to Support Our Mission
                </a>
                <p className="mt-3 text-sm text-gray-600">
                  Your support helps us provide <strong>best counselling</strong> services to those in need
                </p>
              </motion.div> */}
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

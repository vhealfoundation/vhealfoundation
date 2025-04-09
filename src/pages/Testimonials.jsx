import React, { useState, useEffect } from "react";
import Layout from "../hoc/Layout";
import StoryCard from "../components/StoryCard";
import axios from "axios";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Animation configuration

  // Fetch testimonials from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/stories`);
        setTestimonials(response.data.data);

      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load. Please try again later.");

      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500 bg-red-50 px-6 py-4 rounded-lg shadow-md">{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-16 pb-12 bg-gray-50">
      <div className="bg-gradient-to-br from-primary/85 via-primary/70 to-orange-500/75 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
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
            Words speak out our vision and mission
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Testimonials Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {testimonials.map((testimonial, index) => (
              <StoryCard
                key={testimonial._id || index}
                id={testimonial._id || index}
                image={testimonial.coverimage}
                title={testimonial.title}
                description={testimonial.description}
              />
            ))}
          </motion.div>
        )}

        {/* Empty state if no testimonials */}
        {!loading && testimonials.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-gray-500 text-lg">No testimonials available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout(Testimonials);
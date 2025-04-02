import React, { useState, useEffect } from "react";
import Layout from "../hoc/Layout";
import StoryCard from "../components/StoryCard";
import axios from "axios";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import LineSeperator from '../components/LineSeperator';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Define primary color to match theme
  const primaryColor = '#fd8917';

  // Fetch stories from the API
  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/testimonials`);
        setStories(response.data.data);

      } catch (err) {
        console.error("Error fetching stories:", err);
        setError("Failed to load. Please try again later.");

      } finally {
        setLoading(false);
      }
    };

    fetchStories();
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
          <motion.div
          className="flex flex-col items-center gap-4 bg-gray-100 pb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl pt-6 md:text-4xl font-bold text-primary text-center">
            Accolades
          </h2>
          <LineSeperator className="mb-4" />

          <p className="text-center text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4 py-2 bg-yellow-100 rounded shadow-md">
              Commendations from the Champions
            </p>

        </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
    

        {/* Stories Grid */}
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
            {stories.map((story, index) => (
              <StoryCard
                key={story._id || index}
                id={story._id || index} // Use unique _id from API if available
                image={story.coverimage}
                title={story.title}
                description={story.description}
                isTestimonial={true}
              />
            ))}
          </motion.div>
        )}

        {/* Empty state if no stories */}
        {!loading && stories.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-gray-500 text-lg">No stories available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout(Stories);

import React, { useState, useEffect } from "react";
import Layout from "../hoc/Layout";
import AccoladeCard from "../components/AccoladeCard";
import axios from "axios";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const Accolades = () => {
  const [accolades, setAccolades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Animation configuration

  // Fetch accolades from the API
  useEffect(() => {
    const fetchAccolades = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/testimonials`);
        setAccolades(response.data.data);

      } catch (err) {
        console.error("Error fetching accolades:", err);
        setError("Failed to load. Please try again later.");

      } finally {
        setLoading(false);
      }
    };

    fetchAccolades();
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="mt-16 pb-12 bg-gray-50">
      <SEO
        title="Accolades - Best Foundation Success Stories"
        description="Commendations from Champions. Inspiring journeys of transformation through the best counselling services. Read success stories and donate now to support more transformations."
        keywords={[
          'Best Foundation', 'Best Counselling', 'Mental Health Foundation', 'Accolades', 'Success Stories',
          'Transformation', 'Hope', 'Mental Health Success', 'V Heal Foundation', 'Foundation Accolades',
          'Champions', 'Commendations', 'Donate Now', 'Inspiring Journeys', 'Life Transformation',
          'New Life', 'Second Chances', 'Rehabilitation Success', 'Prisoner Rehabilitation', 'Foundation Success',
          'Counselling Success', 'Mental Health Stories', 'Foundation Impact', 'Rehabilitation for Prisoners',
          'Counselling Services', 'Foundation Services', 'Mental Health Support', 'Foundation Work',
          'Social Work Foundation', 'Rehabilitation Services', 'Counselling and Coaching', 'Foundation Recognition'
        ]}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Accolades - Best Foundation Success Stories",
          "description": "Inspiring journeys of transformation through the best counselling services and mental health support",
          "url": "https://vhealfoundation.org/accolades",
          "mainEntity": {
            "@type": "Organization",
            "name": "V Heal Foundation",
            "alternateName": "Best Foundation for Mental Health"
          },
          "about": "Success Stories and Commendations from Champions"
        }}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/85 via-primary/70 to-orange-500/75 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Accolades
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Commendations from Champions
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">


        {/* Accolades Grid */}
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
            {accolades.map((accolade, index) => (
              <AccoladeCard
                key={accolade._id || index}
                id={accolade._id || index} // Use unique _id from API if available
                image={accolade.coverimage}
                title={accolade.title}
                description={accolade.description}
                content={accolade.content}
                isTestimonial={false}
              />
            ))}
          </motion.div>
        )}

        {error && (
          <div className="flex justify-center items-center py-20">
            <p className="text-xl text-red-500">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout(Accolades);

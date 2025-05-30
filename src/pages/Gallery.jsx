import React, { useEffect, useState } from "react";
import Layout from "../hoc/Layout";
import GalleryCard from "../components/GalleryCard";
import axios from "axios";
import Loader from "../components/Loader";
import { Tab } from '@headlessui/react';
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const CATEGORIES = [
  "COUNSELLING SERVICES",
  "ASSESSMENTS",
  "TRAINING",
  "COACHING",
  "REHABILITATION OF PRISONERS",
  "LATEST BLOGS"
];

const Gallery = () => {
  const [galleryData, setGalleryData] = useState({ categories: [] });
  const [loading, setLoading] = useState(true);
  const [tabLoading, setTabLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch data from the gallery API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/gallery`);
        setGalleryData(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Get all images across all categories
  const getAllImages = () => {
    let allImages = [];
    if (galleryData && galleryData.categories) {
      galleryData.categories.forEach(category => {
        if (category.images && category.images.length > 0) {
          // Add category title to each image for filtering
          const imagesWithCategory = category.images.map(img => ({
            ...img,
            categoryTitle: category.title
          }));
          allImages = [...allImages, ...imagesWithCategory];
        }
      });
    }
    return allImages;
  };

  // Get images for a specific category
  const getCategoryImages = (categoryTitle) => {
    if (!galleryData || !galleryData.categories) return [];

    const category = galleryData.categories.find(cat => cat.title === categoryTitle);
    return category ? category.images.map(img => ({
      ...img,
      categoryTitle: category.title
    })) : [];
  };

  // Get images based on selected category
  const getDisplayImages = () => {
    if (selectedCategory === "all") {
      return getAllImages();
    } else {
      return getCategoryImages(selectedCategory);
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <SEO
        title="Happenings"
        description="Take a look at our events, experiences and endeavours chiselling minds and lives. Explore our gallery of counselling services, assessments, training, coaching, and rehabilitation programs."
        keywords={[
          'V Heal Foundation', 'happenings', 'gallery', 'events', 'counselling services',
          'assessments', 'training', 'coaching', 'rehabilitation of prisoners'
        ]}
      />
      <div className="bg-gradient-to-br from-primary/85 via-primary/70 to-orange-500/75 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Happenings
          </motion.h1>
          <div className="flex items-center justify-center space-x-2 my-4">
            <div className="w-12 h-0.5 bg-white/60"></div>
            <div className="w-24 h-1 bg-orange-500"></div>
            <div className="w-12 h-0.5 bg-white/60"></div>
          </div>
          <motion.p
            className="text-white text-lg md:text-xl max-w-4xl mx-auto font-medium italic backdrop-blur-sm bg-white/5 py-3 px-6 rounded-full inline-block mt-4 border border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Take a look at our events, experiences and endeavours chiselling minds and lives
          </motion.p>
        </div>
      </div>
      {loading && <Loader />}

      {!loading && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Tab.Group>
            <Tab.List className="flex flex-wrap justify-center space-x-1 rounded-xl bg-blue-900/10 p-1 mb-8">
              <Tab
                key="all"
                onClick={() => {
                  setTabLoading(true);
                  setSelectedCategory("all");
                  // Simulate a small delay to show loading state
                  setTimeout(() => setTabLoading(false), 500);
                }}
                className={({ selected }) =>
                  `rounded-lg py-2 px-4 text-sm font-bold leading-5 transition-colors
                  ${selected
                    ? 'bg-primary text-white shadow'
                    : 'text-gray-700 hover:bg-white/[0.12] hover:text-primary'
                  }`
                }
              >
                ALL
              </Tab>

              {CATEGORIES.map((category) => {
                // Only show categories that have images
                /* const hasImages = galleryData.categories?.some(
                  cat => cat.title === category && cat.images?.length > 0
                );

                if (!hasImages) return null; */

                return (
                  <Tab
                    key={category}
                    onClick={() => {
                      setTabLoading(true);
                      setSelectedCategory(category);
                      // Simulate a small delay to show loading state
                      setTimeout(() => setTabLoading(false), 500);
                    }}
                    className={({ selected }) =>
                      `rounded-lg py-2 px-4 text-sm font-bold leading-5 transition-colors
                      ${selected
                        ? 'bg-primary text-white shadow'
                        : 'text-gray-700 hover:bg-white/[0.12] hover:text-primary'
                      }`
                    }
                  >
                    {category}
                  </Tab>
                );
              })}
            </Tab.List>
          </Tab.Group>

          {tabLoading ? (
            <div className="flex justify-center items-center py-20">
              <p className="ml-3 text-lg text-primary font-medium">Loading...</p>
            </div>
          ) : (
            <GalleryCard images={getDisplayImages()} />
          )}
        </div>
      )}


    </div>
  );
};

export default Layout(Gallery);
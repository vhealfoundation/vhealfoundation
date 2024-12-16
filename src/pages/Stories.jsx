import React, { useState, useEffect } from "react";
import Layout from "../hoc/Layout";
import StoryCard from "../components/StoryCard";
import axios from "axios"; // Import axios for API calls

const Stories = () => {
  const [stories, setStories] = useState([]); // State to hold stories data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch stories from the API
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/stories`);
        setStories(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching stories:", err);
        setError("Failed to load stories. Please try again later.");
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading Stories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-14 px-4 md:px-48 p-8 space-y-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Stories of Hope and Change
        </h1>
        <div className="w-[120px] rounded-full border-4 border-b border-yellow-400 opacity-90"></div>
      </div>
      <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
        Discover how your generosity is transforming lives. These stories are a
        testament to the power of giving.
      </p>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <StoryCard
            id={story._id || index} // Use unique _id from API if available
            image={story.coverimage}
            title={story.title}
            description={story.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Layout(Stories);

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../hoc/Layout";
import StoryDetailCard from "../components/StoryDetailCard";
import axios from "axios";

const StoryDetail = () => {
  const { id } = useParams();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  // Fetch story data based on id
  useEffect(() => {
    const fetchStory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/stories/${id}`);
        setStories(response.data.data); 
    
      } catch (err) {
        console.error("Error fetching story:", err);
        setError("Failed to load. Please try again later.");
      }
    };

    fetchStory();
  }, [id]);

  console.log(stories);


  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }


  return (
    <div className="mt-16">
      <div className="flex flex-col items-center gap-4">
      </div>
      <StoryDetailCard  coverImage={stories.coverimage} title={stories.title} description={stories.description} content={stories.content} />
    </div>
  );
};

export default Layout(StoryDetail);

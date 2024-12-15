import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../hoc/Layout";
import StoryDetailCard from "../components/StoryDetailCard";
import axios from "axios";

const StoryDetail = () => {
  const { id } = useParams(); // Get the story id from the URL
  const [stories, setStories] = useState([]); // State to hold stories data


  // Fetch story data based on id
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/stories/${id}`);
        setStories(response.data.data); // Assuming the response contains stories in story object
    
      } catch (err) {
        console.error("Error fetching story:", err);
        
      }
    };

    fetchStory();
  }, [id]);


  return (
    <div className="mt-16">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl pt-6 md:text-4xl font-bold text-primary text-center">
          Story Detail
        </h2>
        <div className="w-[120px] rounded-full border-4 border-b border-yellow-400 opacity-90"></div>
        <StoryDetailCard  coverImage={stories.coverimage} title={stories.title} description={stories.description} content={stories.content} />
      </div>
    </div>
  );
};

export default Layout(StoryDetail);

import React from "react";
import Layout from "../hoc/Layout";
import StoryCard from "../components/StoryCard";
import {stories} from "../constants/data"


const Stories = () => {
    return (
        <div className="mt-16 max-w-7xl mx-auto p-8 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Stories of Hope and Change
        </h1>
        <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Discover how your generosity is transforming lives. These stories are a
          testament to the power of giving.
        </p>
  
        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard
              key={index}
              image={story.image}
              title={story.title}
              description={story.description}
              link={story.link}
            />
          ))}
        </div>
      </div>
    )
};

export default Layout(Stories);
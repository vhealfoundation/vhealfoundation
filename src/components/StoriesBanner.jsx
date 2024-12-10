import React from "react";
import { useNavigate } from "react-router-dom";

const StoriesBanner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/stories");
  };

  return (
    <div className="bg-primary text-white py-12 px-8 md:px-16 shadow-lg">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">
          Inspiring Stories of Hope
        </h2>
        <p className="mt-4 text-lg md:text-xl">
          Discover how your support is changing lives around the world. These stories are a testament to the power of giving.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={handleNavigate}
        className="w-1/3 bg-white text-primary font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
      >
        Read Stories
      </button>
    </div>
  </div>
  );
};

export default StoriesBanner;

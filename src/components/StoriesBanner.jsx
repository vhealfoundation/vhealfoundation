import React from "react";
import { useNavigate } from "react-router-dom";

const StoriesBanner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/accolades");
  };

  return (
    <div className="text-white py-12 px-8 md:px-16 shadow-lg" style={{ backgroundColor: '#fd8917' }}>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
      {/* Text Section */}
      <div className="text-center md:text-left">
  <h2 className="text-3xl md:text-4xl font-bold">
    Celebrating Achievements & Accolades
  </h2>
  <p className="mt-4 text-lg md:text-xl">
    Recognizing milestones, honors, and achievements that reflect dedication and excellence. These accolades showcase the impact of passion and perseverance.
  </p>
</div>

{/* Button */}
<button
  onClick={handleNavigate}
  className="w-1/2 md:w-1/3 bg-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
  style={{ color: '#fd8917' }}
>
  View Accolades
</button>

    </div>
  </div>
  );
};

export default StoriesBanner;

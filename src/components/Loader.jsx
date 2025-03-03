import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-70 bg-black">
      <div className="relative">
      <div className="w-12 h-12 border-4 border-transparent border-t-purple-200 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-b-indigo-200 rounded-full animate-spin delay-200"></div>
      </div>
      
    </div>
  );
};

export default Loader;

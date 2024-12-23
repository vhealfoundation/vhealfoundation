import React from "react";

const Loader = () => {
  return (
    <div className="mt-6 flex justify-center items-center space-x-3 py-4">
      <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <span className="text-primary text-sm font-medium">Loading...</span>
    </div>
  );
};

export default Loader;

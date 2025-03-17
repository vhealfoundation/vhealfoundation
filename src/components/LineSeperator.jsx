import React from 'react';

const LineSeperator = ({ width = "120px", height = "5px", className = "" }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div 
        className="rounded-full" 
        style={{ 
          width: width, 
          height: height,
          backgroundColor: "#fd8917" 
        }}
      ></div>
    </div>
  );
};

export default LineSeperator;
import React from 'react';

const LineSeperator = ({ width = "120px", height = "5px", className = "", color }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div
        className="rounded-full"
        style={{
          width: width,
          height: height,
          backgroundColor: color || "#fd8917"
        }}
      ></div>
    </div>
  );
};

export default LineSeperator;
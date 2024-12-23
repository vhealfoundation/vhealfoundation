import React from 'react';

const CustomButton = ({
  className = '',
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <button
      className={`mt-4 flex items-center justify-center gap-2 px-4 py-2  rounded-md ${className} hover:scale-105 transition-all duration-300`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;

import React, { useState } from "react";

const CustomTextField = ({
  label = "",
  placeholder = "",
  value,
  onChange,
  type = "text",
  error = false,
  helperText = "",
  className = "",
  inputClassName = "",
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`${focused? "mt-2" : "mt-0"} relative w-full ${className}`}>
      {/* Label */}
      <label
        className={`absolute left-3 transition-all duration-200 ${
          focused || value
            ? "-top-5 text-xs text-primary"
            : "top-4 text-gray-500 pl-2"
        } ${error ? "text-red-500" : ""}`}
      >
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full mt-1 p-3.5 border-2 rounded-md outline-none transition-all hover:border-gray-500
          focus:ring-1 focus:ring-primary focus:border-none
          ${error ? "border-red-500" : "border-gray-300"}
          ${inputClassName}`}
        placeholder={placeholder}
        {...props}
      />

      {/* Helper Text */}
      {helperText && (
        <p
          className={`mt-1 text-sm ${
            error ? "text-red-500" : "text-gray-500"
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default CustomTextField;

import React from "react";
import { motion } from "framer-motion";

const BeneficiaryCard = ({ name, age, requirements, image, description, amountRaised, onSelect }) => {
  // Define primary color to match theme
  const primaryColor = '#fd8917';

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl overflow-hidden hover:cursor-pointer hover:shadow-2xl transition-all duration-300"
      onClick={onSelect}
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full font-medium shadow-md">
          {age} years old
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold" style={{ color: primaryColor }}>{name}</h3>
        <div className="w-[60px] rounded-full border-2 border-b border-yellow-400 opacity-90 mb-2"></div>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">Amount Raised</span>
            <span className="font-bold" style={{ color: primaryColor }}>₹{amountRaised}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full"
              style={{
                width: `${Math.min(100, (amountRaised / 10000) * 100)}%`,
                backgroundColor: primaryColor
              }}
            ></div>
          </div>
        </div>

        {/* Requirements */}
        <div className="pt-2">
          <span className="font-medium text-gray-700 block mb-2">Needs: </span>
          <div className="flex flex-wrap gap-2">
            {requirements.map((req, index) => (
              <span
                key={index}
                className="inline-block bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                {req}
              </span>
            ))}
          </div>
        </div>

        {/* Select button */}
        <button
          className="w-full mt-2 py-2 rounded-lg border-2 font-medium transition-colors duration-300 hover:bg-orange-50"
          style={{ borderColor: primaryColor, color: primaryColor }}
        >
          Select to Donate
        </button>
      </div>
    </motion.div>
  );
};

export default BeneficiaryCard;

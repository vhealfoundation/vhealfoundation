import React from "react";
import { motion } from "framer-motion";

const BeneficiaryCard = ({ name, age, requirements, image, description, amountRaised, onSelect }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer"
      onClick={onSelect}
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}  
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full">
          {age} years old
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-bold text-primary">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="text-sm">
          <span className="font-semibold">Needs: </span>
          {requirements.map((req, index) => (
            <span
              key={index}
              className="inline-block bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md mr-2"
            >
              {req}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Amount Raised: </span>₹{amountRaised}
        </div>
      </div>
    </motion.div>
  );
};

export default BeneficiaryCard;

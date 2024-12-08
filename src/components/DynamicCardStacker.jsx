import React from 'react';
import DynamicCard from './DynamicCard';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

// Extracted component to handle motion and inView
const AnimatedCard = ({ eachData }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <DynamicCard
        title={eachData.title}
        subtitle={eachData.subtitle}
        rating={eachData.rating}
        backgroundColors={eachData.backgroundColors}
        image={eachData.image}
        className="shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]"
      />
    </motion.div>
  );
};

const DynamicCardStacker = ({ data }) => {
  return (
    <div>
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center card-stacker py-10">
        {data.map((eachData, index) => (
          <DynamicCard
            key={index}
            title={eachData.title}
            subtitle={eachData.subtitle}
            rating={eachData.rating}
            backgroundColors={eachData.backgroundColors}
            image={eachData.image}
            className={
              index !== 0
                ? 'ml-0 md:-ml-32 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]'
                : ''
            }
          />
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-2  items-center justify-center py-10 md:hidden">
        {data.map((eachData, index) => (
          <AnimatedCard key={index} eachData={eachData} />
        ))}
      </div>
    </div>
  );
};

export default DynamicCardStacker;

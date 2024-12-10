import React from 'react';
import DynamicCard from './DynamicCard';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Hero from '../assets/hero.jpg'

// Extracted component to handle motion and inView
const AnimatedCard = ({ eachData }) => {
  const { ref, inView } = useInView({ rootMargin: "-120px", threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className='mb-4'
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
    <div
      className="relative bg-fixed bg-cover bg-center text-white py-8 rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${Hero})`,
      }}
    >
      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
      {/* Desktop Layout */}
      <div className='flex flex-col items-center gap-4 '>
        <h1 className="mt-12 text-3xl text-center md:text-4xl font-medium italic text-white opacity-90">
          Areas We Help
        </h1>
        <div className='w-[120px] rounded-full border-4 border-b border-yellow-400 opacity-90'></div>
      </div>

      <div className="hidden md:flex items-center justify-center card-stacker py-10 pb-20">
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

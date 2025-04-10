import React from 'react';
import DynamicCard from './DynamicCard';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Hero from '../assets/we-minister-2.png';

// Extracted component to handle motion and inView
const AnimatedCard = ({ eachData, id }) => {
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
        id={id}
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
      className="relative bg-fixed bg-cover bg-center text-white py-8 shadow-xl overflow-hidden"
      style={{
        backgroundImage: `url(${Hero})`,
      }}
    >
      {/* Primary and Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-orange-500/75 mix-blend-multiply z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full -mr-32 -mt-32 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full -ml-48 -mb-48 blur-3xl z-0"></div>
      {/* Desktop Layout */}
      <div className='flex flex-col items-center gap-4 relative z-20'>
        <h1 className="mt-4 text-3xl text-center md:text-5xl font-bold text-white drop-shadow-md">
          We Minister
        </h1>
        <div className="flex items-center justify-center space-x-2 my-2">
          <div className="w-12 h-0.5 bg-white/60"></div>
          <div className="w-24 h-1 bg-orange-500"></div>
          <div className="w-12 h-0.5 bg-white/60"></div>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center card-stacker pt-16 pb-20 relative z-20">
        {data.map((eachData, index) => (
          <DynamicCard
            key={index}
            id={index}
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
      <div className="flex flex-col gap-2 items-center justify-center py-10 md:hidden relative z-20">
        {data.map((eachData, index) => (
          <AnimatedCard key={index} eachData={eachData} id={index} />
        ))}
      </div>
    </div>
  );
};

export default DynamicCardStacker;

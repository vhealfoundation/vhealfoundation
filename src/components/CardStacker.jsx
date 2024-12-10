import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { useInView } from 'react-intersection-observer';

// Component to handle motion and inView logic
const AnimatedCard = ({ card, delay }) => {
  const { ref, inView } = useInView({
    rootMargin: window.innerWidth <= 768 ? "-30px" : "100px",
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full md:w-auto mb-4"
    >
      <Card
        imageSrc={card.imageSrc}
        title={card.title}
        description={card.description}
        link={card.link}
      />
    </motion.div>
  );
};

const CardStacker = ({ data }) => {
  const { ref, inView } = useInView({
    rootMargin: window.innerWidth <= 768 ? "0px" : "-100px",
    threshold: 0.2,
  });
  return (
    <div>
      {/* Desktop Layout */}
      <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className="mt-12 text-3xl text-center md:text-4xl font-bold italic text-primary">
        What We Do
      </h1>
      <div className='w-[120px] rounded-full border-4 border-b border-yellow-400'></div>
      </div>
      
      <div className="hidden md:flex items-center justify-center gap-4 py-10">
        {data.map((card, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.5 }}

          >
            <Card
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="px-4 flex flex-col gap-4 items-center justify-center pt-8 pb-2 md:hidden">
        {data.map((card, index) => (
          <AnimatedCard key={index} card={card} delay={index * 0.3} />
        ))}
      </div>
    </div>
  );
};

export default CardStacker;

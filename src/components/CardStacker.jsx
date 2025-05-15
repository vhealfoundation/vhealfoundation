import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CardWithIndex from "./CardWithIndex";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Loader from "./Loader";
import LineSeperator from "./LineSeperator";

// Component to handle motion and inView logic
const AnimatedCard = ({ card, delay, index }) => {
  const { ref, inView } = useInView({
    rootMargin: window.innerWidth <= 768 ? "-30px" : "100px",
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: delay || 0 }}
      className="w-full max-w-sm mb-4"
    >
      <CardWithIndex
        imageSrc={card.image}
        title={card.title}
        description={card.features[0]}
        index={index}
      />
    </motion.div>
  );
};


const CardStacker = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { ref, inView } = useInView({
    rootMargin: window.innerWidth <= 768 ? "0px" : "-100px",
    threshold: 0.2,
  });

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchSections = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sections`);
        setData(response.data.data);
      } catch (err) {
        setError("Failed to load. Please try again later.");
        setLoading(false);
      }
      finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>

      <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className="mt-12 text-3xl text-center md:text-4xl font-bold italic text-primary">
        Mission
      </h1>

      <LineSeperator className="mb-8" />

      </div>
      {loading && <Loader />}


      <div className="hidden md:flex items-center justify-center gap-6 py-10 px-4 md:px-8">
        {data && data.length > 0 ? (
          data.map((card, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              className="max-w-sm"
            >
              <CardWithIndex
                imageSrc={card.image}
                title={card.title}
                description={card.features[0]}
                index={index}
              />
            </motion.div>
          ))
        ) : !loading ? (
          <p className="text-center text-gray-500">No data available</p>
        ) : null}
      </div>

      {/* Mobile Layout */}
      <div className="px-4 flex flex-col gap-6 items-center justify-center pt-8 pb-8 md:hidden">
        {data && data.length > 0 ? (
          data.map((card, index) => (
            <AnimatedCard key={index} card={card} delay={index * 0.3} index={index} />
          ))
        ) : !loading ? (
          <p className="text-center text-gray-500">No data available</p>
        ) : null}
      </div>
    </div>
  );
};

export default CardStacker;

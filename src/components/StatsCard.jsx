import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const useCounter = (start, end, duration, resetTrigger) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!resetTrigger) return;

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, end, duration, resetTrigger]);

  return count;
};

const StatsCard = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Animated counters with inView as resetTrigger
  const fundraisersCount = useCounter(0, 56, 2000, inView);
  const raisedCount = useCounter(0, 234000, 2000, inView);
  const donationsCount = useCounter(0, 160527, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full p-4"
    >
      <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 p-4">
        {/* Fundraisers */}
        <div className="flex flex-col items-center text-center w-full md:w-auto">
          <p className="text-lg md:text-xl font-semibold">Fundraisers</p>
          <p className="text-2xl md:text-3xl font-bold text-Violet">
            {fundraisersCount}+
          </p>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block border-r-2 h-12"></div>

        {/* Raised */}
        <div className="flex flex-col items-center text-center w-full md:w-auto">
          <p className="text-lg md:text-xl font-semibold">Raised</p>
          <p className="text-2xl md:text-3xl font-bold text-Cyan">
            ₹{raisedCount.toLocaleString()}+
          </p>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block border-r-2 h-12"></div>

        {/* Donations */}
        <div className="flex flex-col items-center text-center w-full md:w-auto">
          <p className="text-lg md:text-xl font-semibold">Donations</p>
          <p className="text-2xl md:text-3xl font-bold text-Violet">
            ₹{donationsCount.toLocaleString()}+
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutCard = ({ sections }) => {
  const { ref, inView } = useInView({
    rootMargin: window.innerWidth <= 768 ? "430px" : "250px",
    threshold: 0.2,
  });
  return (
    <section className="px-4 py-12 md:px-48 border-t border-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
          Reach goals that matter
        </div>
        <div className="mb-4">One product, unlimited solutions</div>
        <div className="text-xl text-gray-400">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.
        </div>
      </div>

      {/* Map through sections */}
      <div className="flex flex-col gap-12 md:gap-0">
        {sections.map((section, index) => {
          // Calculate delay based on the index
          const delay = index * 0.3;

          // Motion variants
          const fadeUp = {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
          };
          const fadeHorizontal = {
            hidden: { opacity: 0, x: section.reverse ? -10 : 10 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay },
            },
          };

          return (
            <div
              key={index}
              className={`mt-2 md:mt-12 flex flex-col-reverse ${
                section.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-12`}
            >
            
             
              <motion.div
                ref={ref}
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
              >
                <img
                  className="h-full w-full object-cover rounded-md"
                  src={section.image}
                  alt={section.alt || "Image"}
                />
              </motion.div>

            
              <motion.div
                ref={ref}
                className="flex flex-col  pr-0 md:block md:pr-4 lg:pr-12 xl:pr-16"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeHorizontal}
              >
                <div className="architects-daughter-regular text-xl text-primary mb-2">
                  {section.subheading}
                </div>
                <h3 className="h3 mb-3 text-3xl font-bold ">{section.heading}</h3>
                <p className="text-xl text-gray-400 mb-4">
                  {section.description}
                </p>
                <ul className="text-lg text-gray-400 -mb-2">
                  {section.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center mb-2"
                    >
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutCard;

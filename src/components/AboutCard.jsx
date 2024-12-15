import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutCard = ({ sections }) => {
  const { ref, inView } = useInView({
    rootMargin: window.innerWidth <= 768 ? "1300px" : "880px",
    threshold: 0.2,
  });
  return (
    <section className="px-4 pt-4 pb-8 md:px-48">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
          Empower Lives. Build Communities.
        </div>
        <div className="mb-4">Transforming Second Chances into Success Stories</div>
        <div className="text-xl text-gray-400">
          Your support helps former jailers rebuild their lives, find meaningful opportunities, and contribute positively to society — because everyone deserves a second chance.
        </div>
      </div>

      {/* Map through sections */}
      <div className="mt-8 flex flex-col gap-12 md:gap-0">
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
              className={`mt-2 md:mt-12 flex flex-col-reverse ${section.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12`}
            >


              <motion.div
                ref={ref}
                className="w-full md:w-1/2 mx-auto md:col-span-5 lg:col-span-6  md:mb-0"
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
                className="w-full flex flex-col  pr-0 md:w-1/2 md:block md:pr-4 lg:pr-12 xl:pr-16"
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

import React from "react";
import Hero from "../assets/hero.jpg";
import DonateCard from "./DonateCard";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from 'react-icons/ai';
import CustomButton from "./CustomButton";


const Banner = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[600px] md:h-[730px] mb-[350px] md:mb-0"
      style={{ backgroundImage: ` url(${Hero}) ` }}
    >
      <div className="absolute inset-0  bg-black bg-opacity-25"></div>
      <div className="relative flex flex-col md:flex-row items-center pr-0 justify-between md:px-12 md:pr-40">
        <div className="mt-20 md:mt-32 flex items-center opacity-100">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col gap-0 md:gap-4 text-white px-4 w-full md:w-[750px] md:px-[60px] ">
              <h2 className="">
                <span className="font-semibold leading-none md:text-[57px] text-[35px] ">Join Us In Saving
                </span> <br />
                <div className="font-semibold leading-none md:text-[57px] text-[35px]">
                  In Saving Lives
                </div>
                <div className="font-semibold leading-none md:text-[57px] text-[35px]">
                  No Additives
                </div>
              </h2>



              <p className="md:text-[25px] w-3/4 text-[16px] font-normal mt-6">
                We are a non-profit organization dedicated to combating the<br />
                devastating effects of cancer on individuals and their<br />
                families.


              </p>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className=""
              >
                <CustomButton
                  className="w-[150px] h-12 bg-primary hover:bg-primary-dark "
                  >

                  Get Involved
                  <AiOutlineArrowRight size={20} />
                  </CustomButton>
              </motion.div>

            </div>
          </motion.div>
        </div>
        <div className="mt-6 md:mt-32 z-10 opacity-100">

          <motion.div
               ref={ref}
               initial={{ opacity: 0, y: 100 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8 , delay: 0.6}}
          >
            <DonateCard />
          </motion.div>


        </div>


      </div>

    </section>
  );
};

export default Banner;
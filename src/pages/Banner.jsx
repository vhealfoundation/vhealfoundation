import React from "react";
import Hero from "../assets/hero.jpg";
import DonateCard from "../components/DonateCard";
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion";

const Banner = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-[530px] md:h-[730px] mb-[350px] md:mb-0"
            style={{ backgroundImage: ` url(${Hero}) ` }}
        >
            <div className="absolute inset-0  bg-black bg-opacity-25"></div> {/* Optional dark overlay */}
            <div className="relative flex flex-col md:flex-row items-center justify-between md:px-12">
                <div className="mt-16 flex items-center">

                   <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8}}
                    >
                         <div className="text-white w-[300px] md:w-[750px] px-[20px] md:px-[60px] ">
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


                        {/* Paragraph */}
                        <p className="md:text-[25px] w-3/4 text-[16px] font-normal mt-6">
                            We are a non-profit organization dedicated to combating the<br />
                            devastating effects of cancer on individuals and their<br />
                            families.


                        </p>
                    </div>
                    </motion.div>
                </div>
                <div className="mt-2 md:mt-16 p-4">
             
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8}}
                    >
                        <DonateCard />
                    </motion.div>
                
                  
                </div>


            </div>
        </section>
    );
};

export default Banner;
import React from "react";
import Hero from "../assets/hero.jpg";
import DonateCard from "../components/DonateCard";
import {motion} from "framer-motion";

const Banner = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat md:h-[730px] h-[500px]"
            style={{ backgroundImage: ` url(${Hero}) ` }}
        >
            <div className="absolute inset-0  bg-black bg-opacity-25"></div> {/* Optional dark overlay */}
            <div className="relative flex flex-col md:flex-row items-center justify-between md:px-12">
                <div className="mt-12 md:mt-16 flex items-center">

                   <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 10 }}
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
                <div className="mt-16 p-4">
             
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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
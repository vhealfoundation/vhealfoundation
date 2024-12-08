import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import donation from "../assets/donation.png";

const AboutCard = () => {
    const { ref, inView } = useInView({
        rootMargin: window.innerWidth <= 768 ? "300px" : "100px", 
        threshold: 0.2,
    });

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9 } },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.5 }, // Added a delay of 500ms
        },
    };
    
    const fadeLeft = {
        hidden: { opacity: 0, x: 10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.5 }, // Added a delay of 500ms
        },
    };
    

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

            <div className="mt-12flex flex-col gap-12 md:gap-0">
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                    <motion.div
                        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeUp}
                        ref={ref}
                    >
                        <img className="h-full w-full object-cover" src={donation} alt="Features 02" />
                    </motion.div>
                    <motion.div
                        className="mt-4 md:mt-0 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeLeft}
                        ref={ref}
                    >
                        <div className="md:pr-4 lg:pr-12 xl:pr-16">
                            <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                            <h3 className="h3 mb-3">Keep projects on schedule</h3>
                            <p className="text-xl text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul className="text-lg text-gray-400 -mb-2">
                                <li className="flex items-center mb-2">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Duis aute irure dolor in reprehenderit</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Excepteur sint occaecat</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Amet consectetur adipiscing elit</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col gap-12 md:gap-0">
                <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-12">
                    <motion.div
                        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeUp}
                        ref={ref}
                    >
                        <img className="h-full w-full object-cover" src={donation} alt="Features 02" />
                    </motion.div>
                    <motion.div
                        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeRight}
                        ref={ref}
                    >
                        <div className="md:pr-4 lg:pr-12 xl:pr-16">
                            <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                            <h3 className="h3 mb-3">Keep projects on schedule</h3>
                            <p className="text-xl text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul className="text-lg text-gray-400 -mb-2">
                                <li className="flex items-center mb-2">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Duis aute irure dolor in reprehenderit</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Excepteur sint occaecat</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Amet consectetur adipiscing elit</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutCard;

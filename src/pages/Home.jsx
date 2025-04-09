import React, { useState, useEffect } from "react";
import Layout from "../hoc/Layout";
import Banner from "../components/Banner";
import StatsCard from "../components/StatsCard";
import AboutCard from "../components/AboutCard";
import CardStacker from "../components/CardStacker";
import DynamicCardStacker from "../components/DynamicCardStacker";
import Slider from "../components/Slider";
import ContactCard from "../components/ContactCard";
import ContactLeft from "../components/ContactLeft";
import { data, aboutData, testimonials } from "../constants/data";
import StoriesBanner from "../components/StoriesBanner";
import PopUpCard from "../components/PopUpCard";
import { motion } from "framer-motion";
import LineSeperator from "../components/LineSeperator";

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="pt-12 relative">
{/*             {showModal && <PopUpCard onClose={closeModal} />} */}
            <div className="relative z-0">
                <Banner />
            </div>
            <div className="">
                <StatsCard />
            </div>
            <div className="mt-5">
                 <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="inline-flex text-sm font-semibold py-1 px-3 m-2 rounded-full mb-4"
                          style={{ color: '#fd8917', backgroundColor: 'rgba(253, 137, 23, 0.15)' }}
                        >
                          Mental Health • Counselling • Rehabilitation
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="mb-3 text-2xl font-bold text-primary"
                        >
                          V Heal Foundation
                        </motion.div>
                        <LineSeperator className="mb-4" />
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-xl text-primary"
                        >
                         V Heal Foundation is a fiduciary association of Mental Health and Social Work professionals passionate to promote mental health and wellbeing though counselling, training and coaching. The foundation also fosters to uplift the underprivileged and undeserved in prison and after their release.
                        </motion.div>
                      </div>
                <AboutCard sections={aboutData} />
            </div>
            <div>
                <DynamicCardStacker data={data}></DynamicCardStacker>
            </div>
            <section className="" id='what-we-do'>
                <CardStacker />
            </section>
           {/*  <div className="mt-5">
                <Slider testimonials={testimonials} />
            </div> */}
            <div className="">
                <StoriesBanner />
            </div>
            <div className="max-w-6xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="">
                    <ContactLeft />
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <ContactCard />
                </div>
            </div>
        </div>
    );
};

export default Layout(Home);

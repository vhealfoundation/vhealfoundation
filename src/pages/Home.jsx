import React from "react";
import Layout from "../hoc/Layout";
import Banner from "./Banner";
import StatsCard from "../components/StatsCard";
import AboutCard from "../components/AboutCard";
import Contact from "./ContactUs";
import CardStacker from "../components/CardStacker";
import DynamicCardStacker from "../components/DynamicCardStacker";
import { data, cardData } from "../constants/data";



const Home = () => {
    return (
        <div className="pt-16 bg-gray-100 mb-[500px]">
            <div className="">
                <Banner />

            </div>
            <div className="mt-5">
                <StatsCard />
            </div>
            <div className="mt-5">
                <AboutCard />
            </div>

            <div className="mt-5">
                <CardStacker data={cardData} />
            </div>
            <div className="mt-5 bg-black flex items-center justify-center">

                <DynamicCardStacker data={data}></DynamicCardStacker>

            </div>

            <div className="mt-5">
                <Contact />
            </div>

        </div>
    );
};

export default Layout(Home);
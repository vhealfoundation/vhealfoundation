import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../hoc/Layout";
import Banner from "../components/Banner";
import StatsCard from "../components/StatsCard";
import AboutCard from "../components/AboutCard";
import CardStacker from "../components/CardStacker";
import DynamicCardStacker from "../components/DynamicCardStacker";
import Slider from "../components/Slider";
import ContactCard from "../components/ContactCard";
import ContactLeft from "../components/ContactLeft";
import { data, cardData, sections, testimonials } from "../constants/data";
import StoriesBanner from "../components/StoriesBanner";



const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/stories");
    };

    return (
        <div className="pt-16">
            <div className="">
                <Banner />

            </div>
            <div className="mt-5">
                <StatsCard />
            </div>
            <div className="mt-5">

                <AboutCard sections={sections} />
            </div>
            <div>
                <DynamicCardStacker data={data}></DynamicCardStacker>
            </div>

           
           

            <div className="">
                <CardStacker data={cardData} />
            </div>

            <div className="mt-5">
                <Slider testimonials={testimonials} />
            </div>
            <div className="">
                <StoriesBanner />
            </div>

            <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side */}
                <div className="bg-gray-100 rounded-lg shadow-lg">
                    <ContactLeft />
                </div>

                {/* Right Side */}
                <div className="bg-white rounded-lg shadow-lg">
                    <ContactCard />
                </div>
            </div>

        </div>
    );
};

export default Layout(Home);
import React from "react";
import Layout from "../hoc/Layout";
import AboutCard from "../components/AboutCard";
import { sections } from "../constants/data";
const StoryDetail = () => {
  return (
    <div className="mt-16">
      <div className='flex flex-col items-center gap-4 '>
         <h2 className="text-3xl pt-6 md:text-4xl font-bold text-primary text-center">
          Story Detail
        </h2>
        <div className='w-[120px] rounded-full border-4 border-b border-yellow-400 opacity-90'></div>
        <AboutCard sections={sections} />
        
      </div>

    </div>
  );
};

export default Layout(StoryDetail);

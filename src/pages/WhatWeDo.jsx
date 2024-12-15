import React, { useEffect, useState } from "react";
import Layout from "../hoc/Layout";
import AboutCard from "../components/AboutCard";
import axios from "axios";

const WhatWeDo = () => {
  const [sections, setSections] = useState([]);



  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sections`);
        setSections(response.data.data); 
      
      } catch (err) {
        console.error(err);
      }
    };

    fetchSections();
  }, []); 


  return (
    <div className="mt-16">
      <div className='flex flex-col items-center gap-4 '>
        <h2 className="text-3xl pt-6 md:text-4xl font-bold text-primary text-center">
          What We Do
        </h2>
        <div className='w-[120px] rounded-full border-4 border-b border-yellow-400 opacity-90'></div>
        <AboutCard sections={sections} /> 
      </div>
    </div>
  );
};

export default Layout(WhatWeDo);

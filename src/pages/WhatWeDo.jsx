import React, { useEffect, useState } from "react";
import Layout from "../hoc/Layout";
import AboutCard from "../components/AboutCard";
import axios from "axios";
import Loader from "../components/Loader";
import LineSeperator from "../components/LineSeperator";

const WhatWeDo = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchSections = async () => {

      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/sections`);
        setSections(response.data.data); 
      
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []); 


  return (
    <div className="mt-16">
      {loading && <Loader />}
      <div className='flex flex-col items-center gap-4 '>
        <h2 className="text-3xl pt-6 md:text-4xl font-bold text-primary text-center">
          What We Do
        </h2>
        <LineSeperator className="mb-6" width="150px" />
        <AboutCard sections={sections} /> 
      </div>
    </div>
  );
};

export default Layout(WhatWeDo);

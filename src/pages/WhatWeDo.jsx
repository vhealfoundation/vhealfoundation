import React, { useEffect, useState } from "react";
import Layout from "../hoc/Layout";
import AboutCard from "../components/AboutCard";
import axios from "axios";
import Loader from "../components/Loader";
import LineSeperator from "../components/LineSeperator";
import ContactCard from "../components/ContactCard";
import ContactLeft from "../components/ContactLeft";
import { useLocation } from "react-router-dom";


const WhatWeDo = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Get the index from URL query parameters
  const getIndexFromUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    const indexParam = searchParams.get('index');
    return indexParam ? parseInt(indexParam, 10) : 0;
  };

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
          Mission
        </h2>
        <LineSeperator className="mb-6" width="150px" />
        <AboutCard sections={sections} initialIndex={getIndexFromUrl()} />
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

export default Layout(WhatWeDo);

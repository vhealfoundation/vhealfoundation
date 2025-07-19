import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../hoc/Layout";
import AccoladeDetailCard from "../components/AccoladeDetailCard";
import axios from "axios";
import Loader from "../components/Loader";

const AccoladeDetail = () => {
  const { id } = useParams();
  const [accolade, setAccolade] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  // Fetch accolade data based on id
  useEffect(() => {
    const fetchAccolade = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/testimonials/${id}`);
        setAccolade(response.data.data); 
    
      } catch (err) {
        console.error("Error fetching accolade:", err);
        setError("Failed to load. Please try again later.");
      }
      finally {
        setLoading(false);
      }
    };

    fetchAccolade();
  }, [id]);




  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }


  return (
    <div className="mt-16">
      {loading && <Loader />}
      <div className="flex flex-col items-center gap-4">
      </div>
      <AccoladeDetailCard  coverImage={accolade.coverimage} title={accolade.title} description={accolade.description} content={accolade.content} /> 
    </div>
  );
};

export default Layout(AccoladeDetail);

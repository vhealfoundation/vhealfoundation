import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../hoc/Layout";
import AccoladeDetailCard from "../components/AccoladeDetailCard";
import axios from "axios";
import Loader from "../components/Loader";

const TestimonialDetail = () => {
  const { id } = useParams();
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch testimonial data based on id
  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/stories/${id}`);
        setTestimonial(response.data.data); 
    
      } catch (err) {
        console.error("Error fetching testimonial:", err);
        setError("Failed to load. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonial();
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
      <AccoladeDetailCard
        coverImage={testimonial.coverimage}
        title={testimonial.title}
        description={testimonial.description}
        content={testimonial.content}
      />
    </div>
  );
};

export default Layout(TestimonialDetail);
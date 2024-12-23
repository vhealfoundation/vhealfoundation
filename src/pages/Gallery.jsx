import React, { useEffect, useState } from "react";
import Layout from "../hoc/Layout";
import GalleryCard from "../components/GalleryCard";
import axios from "axios";
import Loader from "../components/Loader";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch data from the gallery API
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/gallery`);
        setImages(response.data.data.images);

      } catch (err) {
        console.error(err);
        setError("Failed to load. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl pt-6 md:text-4xl font-bold text-primary text-center">
          Our Gallery
        </h2>
        <div className="w-[120px] rounded-full border-4 border-b border-yellow-400 opacity-90"></div>
        {loading && <Loader />}
      </div>
      <GalleryCard images={images} /> {/* Pass the fetched images to GalleryCard */}
    </div>
  );
};

export default Layout(Gallery);

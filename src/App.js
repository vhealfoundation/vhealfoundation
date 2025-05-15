import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Stories from "./pages/Stories";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import ImageGallery from "./pages/ImageGallery";
import ScrollMemory from "./components/ScrollMemory";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/custom-colors.css";
import WhatWeDo from "./pages/WhatWeDo";
import StoryDetail from "./pages/StoryDetail";
import TestimonialDetail from "./pages/TestimonialDetail";
import Beneficiaries from "./pages/Beneficiaries";
import ThankYou from "./pages/ThankYou";
import YourDonations from "./pages/YourDonations";
import YourAppointments from "./pages/YourAppointments";


function App() {
  const location = useLocation();

  return (
    <div>

      <AnimatePresence>
        <ScrollMemory />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route path="/aboutus" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><AboutUs /></motion.div>} />
          <Route path="/what-we-do" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><WhatWeDo /></motion.div>} />
          <Route path="/happenings" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><Gallery /></motion.div>} />
          <Route path="/accolades" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><Stories /></motion.div>} />
              <Route path="/testimonials" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><Testimonials /></motion.div>} />
              <Route path="/testimonials/:id" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><TestimonialDetail /></motion.div>} />
          <Route path="/accolades/:id" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><StoryDetail /></motion.div>} />
          <Route path="/beneficiaries" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><Beneficiaries /></motion.div>} />
          <Route path="/toconnect" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><Contact /></motion.div>} />
          <Route path="/thank-you" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><ThankYou /></motion.div>} />
          <Route path="/your-donations" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><YourDonations /></motion.div>} />
            <Route path="/your-appointments" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><YourAppointments /></motion.div>} />
            <Route path="/image-gallery/:id" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}><ImageGallery /></motion.div>} />

        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

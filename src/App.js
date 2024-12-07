import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";

function App() {
  const location = useLocation();

  return (
    <div>

      <AnimatePresence>
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
            transition={{ duration: 0.8}}><AboutUs /></motion.div>} />
          <Route path="/contactus" element={<motion.div
           initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8}}><Contact /></motion.div>} />

        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

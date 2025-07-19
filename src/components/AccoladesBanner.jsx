import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaQuoteLeft, FaAward, FaStar, FaTrophy } from "react-icons/fa";
import { RiVipCrownFill } from "react-icons/ri";
import axios from "axios";

const AccoladesBanner = () => {
  const navigate = useNavigate();
  const [accolades, setAccolades] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch accolades from the API
  useEffect(() => {
    const fetchAccolades = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/testimonials`);
        setAccolades(response.data.data.slice(0, 3)); // Get first 3 accolades
      } catch (err) {
        console.error("Error fetching accolades:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAccolades();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background with enhanced gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400"
        style={{ backgroundColor: '#fd8917' }}
      >
        {/* Enhanced decorative elements */}
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute left-1/2 top-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Floating icons background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <FaAward className="absolute top-12 left-[20%] text-white text-3xl transform -rotate-12" />
            <FaStar className="absolute top-24 right-[25%] text-white text-2xl transform rotate-12" />
            <FaTrophy className="absolute bottom-20 left-[30%] text-white text-3xl transform rotate-6" />
            <RiVipCrownFill className="absolute bottom-12 right-[35%] text-white text-2xl transform -rotate-12" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title and Button */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Decorative top elements */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <FaTrophy className="text-white/80 text-2xl" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <RiVipCrownFill className="text-white/80 text-3xl" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <FaTrophy className="text-white/80 text-2xl" />
                </motion.div>
              </div>

              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FaQuoteLeft className="text-white/30 text-4xl mb-4" />
              </motion.div>

              {/* Main Content */}
              <div className="space-y-6">              
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Commendations from Champions
                </h2>
                
                <p className="text-white/90 text-lg leading-relaxed">
                  Discover inspiring testimonials from distinguished professionals who recognize our commitment to transformation and rehabilitation.
                </p>

                <motion.button
                  onClick={() => navigate("/accolades")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white rounded-full px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center gap-2" style={{ color: '#fd8917' }}>
                    View All Accolades
                    <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right side - Blurred Accolade Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {!loading && accolades.length > 0 && (
                <div className="relative">
                  {/* Accolade Cards Preview */}
                  <div className="grid grid-cols-1 gap-4">
                    {accolades.map((accolade, index) => {
                      // Extract name and designation from content[0].title
                      let name = accolade.title;
                      let designation = "";
                      let designationParts = [];

                      if (accolade.content && accolade.content.length > 0 && accolade.content[0].title) {
                        const fullTitle = accolade.content[0].title;
                        if (fullTitle.includes(",")) {
                          // Split by single comma, but handle double commas (,,) to keep parts together
                          const parts = fullTitle.split(/(?<!,),(?!,)/).map(part => part.replace(/,,/g, ',').trim());
                          name = parts[0].trim();
                          designationParts = parts.slice(1);
                          designation = designationParts.join(", ");
                        } else {
                          name = fullTitle;
                        }
                      }

                      return (
                        <motion.div
                          key={accolade._id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                          style={{ filter: index > 0 ? 'blur(2px)' : 'none' }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <img
                                src={accolade.coverimage}
                                alt={name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-white/30"
                              />
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                                <FaAward className="text-white text-xs" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-semibold text-sm truncate">
                                {name}
                              </h4>
                              {designationParts.length > 0 && (
                                <div className="mt-1 mb-2">
                                  <p className="text-orange-200 text-xs italic truncate">
                                    {designationParts[0]}{designationParts.length > 1 ? '...' : ''}
                                  </p>
                                </div>
                              )}
                              <p className="text-white/60 text-xs mt-1 line-clamp-2">
                                {accolade.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      onClick={() => navigate("/accolades")}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-400"
                      style={{ color: '#fd8917' }}
                    >
                      <span className="flex items-center gap-2">
                        <FaAward className="text-lg" />
                        View All
                      </span>
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccoladesBanner;

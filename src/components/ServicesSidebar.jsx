import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { data } from '../constants/data';
import '../styles/sidebar.css';

const ServicesSidebar = () => {
  const { id } = useParams();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState(id || '0');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set active service based on URL
  useEffect(() => {
    if (location.pathname.includes('/image-gallery/')) {
      const pathId = location.pathname.split('/image-gallery/')[1];
      setActiveService(pathId);
    }
  }, [location]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: isMobile ? "-100%" : 0,
      opacity: isMobile ? 0 : 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed left-0 top-20 z-40 bg-primary text-white p-3 rounded-r-lg shadow-lg"
        aria-label="Toggle Services Menu"
      >
        {isOpen ? <FaTimes /> : <FaChevronRight size={20} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        <motion.div
          className={`services-sidebar fixed lg:sticky top-16 lg:top-20 left-0 h-screen lg:h-[calc(100vh-5rem)] z-30 bg-white shadow-lg lg:shadow-md w-64 lg:w-60 overflow-y-auto transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
          initial="closed"
          animate={isOpen || !isMobile ? "open" : "closed"}
          variants={sidebarVariants}
        >
          <div className="p-4 bg-gradient-to-r from-primary to-primary/80 text-white">
            <h2 className="text-xl font-bold">Our Services</h2>
           
          </div>

          <div className="p-2">
            <ul className="space-y-1">
              {data.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/image-gallery/${index}`}
                    className={`service-item flex items-center p-3 rounded-lg transition-all duration-200 ${
                      activeService === index.toString()
                        ? 'active'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setActiveService(index.toString());
                      if (isMobile) setIsOpen(false);
                    }}
                  >
                    <div
                      className="service-icon w-8 h-8 rounded-full mr-3 flex-shrink-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${service.image})`
                      }}
                    />
                    <span className="flex-grow">{service.title}</span>
                    <FaChevronRight
                      className={`service-arrow text-xs transition-transform ${
                        activeService === index.toString() ? '' : 'text-gray-400'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="p-4 mt-4 bg-gray-50 border-t">
            <h3 className="text-sm font-semibold text-gray-700">Need Help?</h3>
            <p className="text-xs text-gray-600 mt-1">Contact us for more information about our services</p>
            <Link
              to="/toconnect"
              className="mt-2 text-sm text-primary hover:text-primary/80 font-medium flex items-center"
            >
              Contact Us <FaChevronRight className="ml-1 text-xs" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          className="sidebar-overlay visible fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default ServicesSidebar;

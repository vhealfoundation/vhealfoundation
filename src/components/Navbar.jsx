import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import UserButton from "./UserButton";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeNav, setActiveNav] = useState("/"); // State for active nav item
  const [showHoverCard, setShowHoverCard] = useState(false); // State for hover card visibility
  const navRef = useRef(); // Ref for closing mobile nav on outside click
  const location = useLocation(); // To detect current route

  // Update activeNav state based on current route
  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  // Toggle mobile navigation
  const handleNav = () => {
    setNav(!nav);
  };

  // Close the navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About Us", link: "/aboutus" },
    { id: 3, text: "Happenings", link: "/happenings" },
    { id: 4, text: "Accolades", link: "/accolades" },
    { id: 5, text: "Testimonials", link: "/testimonials" },
    { id: 6, text: "To Connect", link: "/toconnect" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-primary flex justify-between md:justify-center space-x-0 md:space-x-2 lg:space-x-8 xl:space-x-16 items-center h-16 px-4 z-50">
      {/* Mobile Navigation Toggle */}
      <div className="flex items-center space-x-2">
        <div onClick={handleNav} className="block md:hidden mt-1">
          {nav ? <AiOutlineClose size={20} className="text-white" /> : <AiOutlineMenu size={20} className="text-white" />}
        </div>
        <Link to="/" className="flex items-center gap-2 md:hidden" >
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <p className="text-white">V HEAL</p>
        </Link>
      </div>
      <Link to="/" className="hidden md:flex items-center gap-2 rounded-full" >
        <img src={logo} alt="Logo" className="w-[40px] h-[40px] lg:w-[52px] lg:h-[52px] object-cover" />
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-white whitespace-nowrap">V HEAL</p>
      </Link>

      {/* Desktop Navbar */}
      <div className="hidden md:flex relative">
        <ul className="flex md:space-x-6 relative">
          {navItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => item.text === "Book Now" && setShowHoverCard(true)}
              onMouseLeave={() => item.text === "Book Now" && setShowHoverCard(false)}
              className="relative"
            >
              <Link to={item.link}>
                <li
                  className={` cursor-pointer relative ${activeNav === item.link
                    ? "text-white"
                    : "text-white hover:text-gray-300 w-full"
                    }`}
                  onClick={() => setActiveNav(item.link)}
                >
                  {item.text}
                  {/* Underline */}
                  <span className="mt-2 relative flex items-center">
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 w-full bg-white rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: activeNav === item.link ? 1 : 0,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </span>
                </li>
              </Link>
            </div>
          ))}
          {showHoverCard && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: showHoverCard ? 1 : 0, y: showHoverCard ? 0 : -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute top-20 -right-28 transform -translate-x-1/2 w-[300px] bg-white shadow-lg rounded-lg p-4 text-center z-50"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Why Book an Appointment?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get personalized support to rebuild your life. Start your healing journey today.
              </p>
              <p className="text-sm text-gray-600 mb-4 italic">
                Come visit us at our location.
              </p>
            </motion.div>
          )}
        </ul>
      </div>

      <UserButton />



      {/* Mobile Navigation */}
      <div
        ref={navRef}
        className={`${nav ? "left-0" : "left-[-100%]"} mt-16 fixed top-0 left-0 w-[70%] h-full bg-[#000300] z-50 border-r border-gray-900 transition-all duration-500`}
      >
        <ul className="flex flex-col items-start p-4">
          {navItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <li
                className={`p-4 border-b border-gray-600 w-full cursor-pointer ${activeNav === item.link ? "text-white" : "text-white"}`}
                onClick={() => {
                  setActiveNav(item.link);
                  setNav(false); // Close mobile nav after click
                }}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import UserButton from "./UserButton";
import MobileUserAvatar from "./MobileUserAvatar";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeNav, setActiveNav] = useState("/"); // State for active nav item
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
    <div className="fixed top-0 left-0 w-full bg-primary flex justify-between md:justify-between items-center h-16 px-4 md:px-2 z-50">
      {/* Mobile Navigation Toggle */}
      <div className="flex items-center justify-between w-full md:hidden">
        {/* Hamburger on the left */}
        <div onClick={handleNav} className="mt-1">
          {nav ? <AiOutlineClose size={20} className="text-white" /> : <AiOutlineMenu size={20} className="text-white" />}
        </div>

        {/* Logo in the center */}
        <Link to="/" className="flex items-center gap-2" >
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <div>
            <p className="font-bold text-white text-lg whitespace-nowrap">V HEAL FOUNDATION</p>
            <div className="flex items-center gap-1">
              <span className="w-4 h-[1px] bg-white/80"></span>
              <p className="text-white/80 text-[8.5px] italic whitespace-nowrap">Enriching, Empowering & Enduring Lives</p>
              <span className="w-4 h-[1px] bg-white/80"></span>
            </div>
          </div>
        </Link>

        {/* Empty space to balance the layout */}
        <div className="w-6"></div>
      </div>

      <div className="hidden md:flex items-center">
        {/* Desktop Logo */}
        <Link to="/" className="pl-16 flex items-center gap-2 rounded-full" >
          <img src={logo} alt="Logo" className="w-[40px] h-[40px] lg:w-[52px] lg:h-[52px] object-cover" />
          <div>
            <p className="text-xl font-bold text-white whitespace-nowrap">V HEAL FOUNDATION</p>
            <div className="flex items-center gap-1">
              <span className="w-5 h-[1px] bg-white/80"></span>
              <p className="text-white/80 text-[9px] italic">Enriching, Empowering & Enduring Lives</p>
              <span className="w-5 h-[1px] bg-white/80"></span>
            </div>
          </div>
        </Link>
      </div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex relative">
        <ul className="flex md:space-x-6 relative">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
            >
              <Link to={item.link}>
                <li
                  className={`cursor-pointer relative ${activeNav === item.link
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
        </ul>
      </div>

      {/* Desktop User Avatar */}
      <div className="hidden md:flex items-center pr-10">
        <UserButton />
      </div>

      {/* Mobile Navigation */}
      <div
        ref={navRef}
        className={`${nav ? "left-0" : "left-[-100%]"} mt-16 fixed top-0 left-0 w-[70%] h-full bg-[#000300] z-50 border-r border-gray-900 transition-all duration-500`}
      >
        <div className="flex flex-col h-full">
          {/* User Avatar Section at Top */}
          <div className="p-4 border-b border-gray-600">
            <MobileUserAvatar />
          </div>

          {/* Navigation Items */}
          <ul className="flex flex-col items-start flex-1">
            {navItems.map((item) => (
              <Link to={item.link} key={item.id} className="w-full">
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

          {/* Sign In Button at Bottom (only when not authenticated) */}
          <div className="p-4 border-t border-gray-600">
            <UserButton showInSidebar={true} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion'

const Navbar = () => {
  const [nav, setNav] = useState(false); // State for mobile nav visibility
  const [activeNav, setActiveNav] = useState('/'); // State for active nav item
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
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigation items
  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'About', link: '/aboutus' },
    { id: 3, text: 'Stories', link: '/stories' },
    { id: 4, text: 'Contact', link: '/contactus' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-tertiary flex justify-between md:justify-center space-x-0 md:space-x-32 items-center h-16 px-4 text-primary z-50">
      {/* Logo */}
      <Link to="/">
      <h1 className="text-3xl font-bold text-primary">D&M</h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex relative">
        <ul className="flex space-x-4 relative">
          {navItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <li
                className={`p-4 cursor-pointer relative ${activeNav === item.link ? 'text-primary' : 'text-white hover:text-primary'
                  }`}
                onClick={() => setActiveNav(item.link)}
              >
                {item.text}
                {/* Underline */}
                <span
                  className="mt-2 relative flex items-center"
                >
                
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 w-full bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: activeNav === item.link ? 1 : 0,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </span>

              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={navRef}
        className={`${nav ? 'left-0' : 'left-[-100%]'
          } mt-16 fixed top-0 left-0 w-[70%] h-full bg-[#000300] z-50 border-r border-gray-900 transition-all duration-500`}
      >
        {/* Mobile Navigation Items */}
        <ul className="flex flex-col items-start p-4">
          {navItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <li
                className={`p-4 border-b border-gray-600 w-full cursor-pointer ${activeNav === item.link ? 'text-primary' : 'text-white'
                  }`}
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

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const navRef = useRef();

  // Toggle function to handle the navbar's display
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

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'About', link: 'aboutus' },
    { id: 3, text: 'Contact', link: '/contactus' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-16 mx-auto px-4 text-white fixed w-full z-30'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map((item) => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <motion.ul
        ref={navRef}
        className={
          nav
            ? 'mt-12 z-20 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] '
            : ' w-[60%] duration-500 fixed top-12 bottom-0 left-[-100%]'
        }
        initial={{ x: '-100%' }}
        animate={{ x: nav ? 0 : '-100%' }}
        transition={{ duration: 0.5}}
      >
     

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Navbar;

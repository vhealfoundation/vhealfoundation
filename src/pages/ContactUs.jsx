import React from 'react';
import Layout from "../hoc/Layout";
import ContactCard from '../components/ContactCard';
import ContactLeft from '../components/ContactLeft';


const Contact = () => {


  return (
    <div className="mt-16 max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Left Side */}
    <div className="bg-gray-100 rounded-lg shadow-lg">
      <ContactLeft />
    </div>

    {/* Right Side */}
    <div className="bg-white rounded-lg shadow-lg">
      <ContactCard />
    </div>
  </div>
  );
};

export default Layout(Contact);

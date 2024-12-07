import React from "react";
import Layout from "../hoc/Layout";


const AboutUs = () => (
    <div className="text-center">
      <h1 className="text-4xl text-green-500 my-4">About Us</h1>
      <p className="text-gray-700">Learn more about us on this page.</p>
    </div>
  );

  
  export default Layout(AboutUs);
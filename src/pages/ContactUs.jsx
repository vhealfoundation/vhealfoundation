import React from "react";
import Layout from "../hoc/Layout";


const Contact = () => (
    <div className="text-center">
      <h1 className="text-4xl text-red-500 my-4">Contact Us</h1>
      <p className="text-gray-700">Feel free to reach out to us!</p>
    </div>
  );

export default Layout(Contact);
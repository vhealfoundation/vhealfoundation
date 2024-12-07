import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = (Component) => {
  return function LayoutWrapper(props) {
    return (
      <div className="w-full min-h-screen">
        <Navbar />
        <main className="">
          <Component {...props} />
        </main>
        <Footer />
      </div>
    ); 
  };
};

export default Layout;

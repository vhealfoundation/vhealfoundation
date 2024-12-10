import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = (Component) => {
  return function LayoutWrapper(props) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-secondary">
          <Component {...props} />
        </main>
        <Footer />
      </div>
    );
  };
};

export default Layout;

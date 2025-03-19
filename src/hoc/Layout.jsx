import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = (Component) => {
  return function LayoutWrapper(props) {
    return (
      <div className="flex flex-col min-h-screen relative">
        <Navbar className="z-50" />
        <main className="flex-grow relative z-10">
          <Component {...props} />
        </main>
        <Footer className="relative z-10" />
      </div>
    );
  };
};

export default Layout;

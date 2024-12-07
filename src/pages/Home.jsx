import React from "react";
import Layout from "../hoc/Layout";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="">
            <Banner/>
        </div>
    );
};

export default Layout(Home);
import React from "react";
import Navbar from "./nav";
import Home from "./home";
import About from "./about";
import Sponsers from "./sponsors";
import DjCard from "./djCard";
import Workshop from "./speaker";

function Landing() {
    return (
        <>
            <Home />
            <Sponsers />
            <About />
            <Workshop />
            <DjCard />

        </>


    )
}

export default Landing
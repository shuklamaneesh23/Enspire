import React  from "react";
import Navbar from "./nav";
import Home from "./home";
import About from "./about";
import Sponsers from "./sponsors";
import DjCard from "./djCard";

function Landing(){
    return(
        <>
        <Home/>
        <About/>
        <Sponsers/>
        <DjCard/>

        </>
        

    )
}

export default Landing
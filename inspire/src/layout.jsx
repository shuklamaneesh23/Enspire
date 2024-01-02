import React from "react";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import Foot from "./components/foot";




function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <Foot/>
        </>
    )
}

export default Layout
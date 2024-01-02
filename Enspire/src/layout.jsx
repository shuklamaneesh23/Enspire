import React from "react";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";




function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
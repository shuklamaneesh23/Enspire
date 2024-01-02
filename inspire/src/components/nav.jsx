import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }





    return (


        <nav className={isOpen ? "w-full h-auto backdrop-blur-md  md:bg-black bg-black bg-transparent flex fixed  justify-center flex-wrap items-center  px-2 md:px-4 z-[40]" : "w-full h-auto bg-black flex fixed  justify-between items-center px-2  md:px-4 z-[20]"}>
            <div>

                <img className="h-16" src="https://i.imgur.com/nWSNrhX.jpg" alt="" />
            </div>
            <ul className="md:flex hidden font-semibold font-mono text-white text-md md:pr-24 lg:gap-x-9">
                <li>
                    <NavLink
                        to="home"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/events"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Events
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="sponsors"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Sponsers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="teams"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Teams
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="contact"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Contact Us
                    </NavLink>
                </li>


            </ul>

            <div className="md:hidden p-4">
                <button onClick={toggleNavbar}>
                    <a className="text-4xl text-white" href="#">&#8801;</a>
                </button>

            </div>
            <div className={isOpen ? "relative w-full bg-transparent justify-center items-center gap-16 flex flex-col font-semibold text-3xl md:hidden" : "hidden"}>

                <div>
                    <NavLink
                        to="home"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-white" : "text-[#BD9F67]"} `
                        }
                    >
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/events"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-white" : "text-[#BD9F67]"} `
                        }
                    >
                        Events
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="sponsors"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-white" : "text-[#BD9F67] font-semibold"} `
                        }
                    >
                        Sponsers
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="teams"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-white" : "text-[#BD9F67]"} `
                        }
                    >
                        Teams
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-white" : "text-[#BD9F67]"} `
                        }
                    >
                        Gallery
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="contact"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-white" : "text-[#BD9F67] font-semibold"} `
                        }
                    >
                        Contact Us
                    </NavLink>
                </div>



            </div>

        </nav>



    )
}

export default Navbar
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (


        <nav className="w-full h-16 bg-[#243137] flex fixed  justify-around items-center px-2 md:px-4 ">
            <div>

                <img className="h-16" src="https://i.imgur.com/nWSNrhX.jpg" alt="" />
            </div>
            <ul className="md:flex hidden font-semibold text-white text-xl gap-x-9">
                <li>
                    <NavLink
                        to="home"
                        className={({isActive}) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/events"
                        className={({isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Events
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="asd"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Sponsers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="sd"
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
                        to="as"
                        className={({ isActive }) =>
                            `mx-[10px] cursor-pointer ${isActive ? "text-orange-700" : "text-white"} `
                        }
                    >
                        Contact Us
                    </NavLink>
                </li>


            </ul>

            <div className="md:hidden ">
                <a className="text-4xl text-white" href="#">&#8801;</a>
            </div>
        </nav>

    )
}

export default Navbar
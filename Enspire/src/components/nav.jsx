import React from "react";

function Navbar() {
    return (


        <nav className="w-full h-16 bg-[#243137] flex fixed  justify-around items-center px-2 md:px-4 ">
            <div>

                <img className="h-16" src="https://i.imgur.com/nWSNrhX.jpg" alt="" />
            </div>
            <ul class="md:flex hidden font-semibold text-white text-xl gap-x-9">
                <li className="mx-[10px] cursor-pointer">Home</li>
                <li className="mx-[10px] cursor-pointer">Events</li>
                <li className="mx-[10px] cursor-pointer">Sponsers</li>
                <li className="mx-[10px] cursor-pointer">Teams</li>
                <li className="mx-[10px] cursor-pointer">Gallery</li>
                <li className="mx-[10px] cursor-pointer">Contact Us</li>

            </ul>

            <div className="md:hidden ">
                <a className="text-4xl text-white" href="#">&#8801;</a>
            </div>
        </nav>

    )
}

export default Navbar
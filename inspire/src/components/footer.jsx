import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer
            className="w-full bg-[#243137] px-4 text-white pt-8 flex flex-col justify-items-start md:flex-row flex-wrap justify-between md:px-12">
            <div className="flex flex-col items-center">
                <div className="flex">

                    <div>
                        <img class="h-16 w-auto"
                            src="https://i.imgur.com/bVgqYE2.png"
                            alt="" /></div>
                    <div class="w-1 h-24 border-l-2 border-yellow-400 rounded-xl mr-2"></div>
                    <div className="font-bold text-[#BD9F67]">
                        <p>THE</p>
                        <p>ENTREPRENEURSHIP</p>
                        <p>CELL</p>
                        <p className="text-[12px] font-semibold">IIIT LUCKNOW</p>
                    </div>
                </div>

                <div>
                    <p class="my-4 font-sans text-xl"> Get connected with us on social networks: </p>
                </div>
                <div className="flex gap-3 pb-12">
                    <div className="cursor-pointer hover:scale-125 duration-1000 ease-in-out delay-10 hover:mr-2 hover:ml-2">
                        <a href="https://discord.com/invite/mGCKYBFWC8" target="_blank" >
                            <img className="h-10 w-auto  rounded-full" src="https://www.svgrepo.com/download/353655/discord-icon.svg" alt="" />
                        </a>
                    </div>
                    <div className="cursor-pointer hover:scale-125 duration-1000 ease-in-out delay-10 hover:mr-2 hover:ml-2">
                        <a href="https://www.instagram.com/ecell_iiitl/" target="_blank" >
                            <img className="h-10 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
                        </a>
                    </div>
                    <div className="cursor-pointer hover:scale-125 duration-1000 ease-in-out delay-10 hover:mr-2 hover:ml-2">
                        <a href="https://www.linkedin.com/company/e-cell-iiit-lucknow/" target="_blank" >
                            <img className="h-10 w-10 bg-[#BD9F67] rounded-sm" src="https://www.ecell.in/mainpage/assets/images/linkedin.png" alt="" />
                        </a>
                    </div>
                    <div className="cursor-pointer hover:scale-125 duration-1000 ease-in-out delay-10 hover:mr-2 hover:ml-2">
                        <a href="https://www.youtube.com" target="_blank" >
                            <img className="h-10 w-auto " src="https://www.svgrepo.com/show/13671/youtube.svg" alt="" />
                        </a>
                    </div>
                    <div className="cursor-pointer hover:scale-125 duration-1000 ease-in-out delay-10 hover:mr-2 hover:ml-2">
                        <a href="https://twitter.com/ecell_iiitl" target="_blank" >
                            <img className="h-8 w-auto rounded-full" src="https://www.svgrepo.com/show/13677/twitter.svg" alt="" />
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-center">
                <h2 class="font-bold text-xl mt-4 text-[#BD9F67] ">Our Events</h2>
                <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                <div>
                    <a href="https://www.instagram.com/p/Ck_UlZ6BRbV/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg==" target="_blank">
                    <p className="cursor-pointer hover:text-blue-400">Million Dollar Idea</p>
                    </a>
                   <a href="https://www.instagram.com/p/CljOlR-hFVp/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg==" target="_blank"> 
                   <p className="cursor-pointer hover:text-blue-400">Mystery Room</p>
                   </a>

                    <a href="https://www.instagram.com/p/ClgBwgPrwN7/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg==" target="_blank">
                    <p className="cursor-pointer hover:text-blue-400">IPL Auction</p>
                    </a>
                    <a href="https://www.instagram.com/p/CllSf4krAqi/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg==" target="_blank">
                    <p className="cursor-pointer hover:text-blue-400">Gaming Nights</p>
                    </a>
                    <a href="https://www.instagram.com/p/ClqVqXtLitJ/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg==" target="_blank">
                    <p className="cursor-pointer hover:text-blue-400">Stand-Up Comedy</p>
                    </a>
                    <a href="https://www.instagram.com/p/ClrguyGhEJf/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg==" target="_blank">
                    <p className="cursor-pointer hover:text-blue-400">Bollywood Night</p>
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 class="font-bold text-xl mt-4 text-[#BD9F67]">Quick Links</h2>
                <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                <div>
                    <NavLink
                    to="">
                    <p className="cursor-pointer hover:text-blue-300">Home</p>
                    </NavLink>
                    <NavLink
                    to="sponsors">
                    <p className="cursor-pointer hover:text-blue-300">Our Sponsors</p>
                    </NavLink>
                    <NavLink
                    to="about">
                    <p className="cursor-pointer hover:text-blue-300">About Us</p>
                    </NavLink>
                    <NavLink
                    to="teams">
                    <p className="cursor-pointer hover:text-blue-300">Teams</p>
                    </NavLink>
                    <NavLink
                    to="gallery">
                    <p className="cursor-pointer hover:text-blue-300"> Speaker Sessions</p>
                    </NavLink>

                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 class="font-bold text-xl mt-4 text-[#BD9F67]">Contact</h2>
                <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
                <div className="">
                    <div className="flex items-center gap-1">
                        <div>
                            <img className="h-6" src="https://www.svgrepo.com/show/127575/location-sign.svg" alt="" />
                        </div>
                        <div>
                            <p>Student Activity Center,IIIT Lucknow, Lucknow</p>
                        </div>
                    </div>
                    <p className="flex justify-center">Uttar Pradesh 220128</p>
                    <div className="flex justify-center gap-3 items-center mt-2">
                        <div>
                            <img className="h-4" src="data:image/png;base64,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" alt="" />
                        </div>
                        <div className="">
                            <NavLink
                            to="contact"
                            >
                            <p className=" cursor-pointer hover:text-blue-300"> enspire@iiitl.ac.in </p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
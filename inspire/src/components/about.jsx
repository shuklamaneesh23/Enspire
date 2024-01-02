import React from "react";

function About() {
    return (
        <div className="w-full h-max p-12 bg-black text-white flex flex-col items-center justify-center">

            <div className="bg-[url('https://i.imgur.com/DPAfMAq.png')] bg-no-repeat bg-cover justify-center items-center">
                <div>
                    <h1 className="font-semibold text-center text-5xl md:text-8xl text-[#BD9F67]">About Us</h1>
                </div>
                <div className="mt-24 flex justify-center items-center flex-col flex-wrap md:text-2xl text-xl">

                    <p className="lg:mr-48 lg:ml-48 md:mr-12 md:ml-12 md:leading-9 tracking-widest mr-4 ml-4 leading-7">  Launched in 2022 by E-Cell IIIT Lucknow, Enspire, our annual flagship event, has become the
                        ultimate breeding ground for entrepreneurial spirit and innovation. With each passing year,
                        Enspire's reputation has grown, drawing an ever-increasing number of students and participants.
                        In 2023,we organised 9 evemts and boasted 103526 participants,along with 1248 submissions.
                        Enspire returns to set the stage for the biggest offline DJ Night in Lucknow with starts at
                        12 am in the midnight and lasts till the dawn and ends about at 7 am in the morning.
                        it's a 3-days immersion into creativity, collaboration, and entrepreneurship, where your
                        ideas become reality, and innovation knows no bounds. Megathon provides a platform for
                        students to unleash their potential, collaborate with like-minded peers, and helps them
                        transform their entrepreneurial dreams into reality.</p>

                </div>
                <div className="flex justify-center items-center mt-12">
                    <a href="https://ecell-iiitl.netlify.app" target="_blank">
                        <button className=" bg-blue-800 text-white text-2xl p-2 pr-4 pl-4 rounded-xl border-2 hover:bg-blue-900">Know More </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
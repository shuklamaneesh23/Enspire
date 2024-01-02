import React from "react";

function Home() {





    return (
        <div className="w-full h-max bg-black text-white p-12 md:p-32 flex justify-center ">
            <div className="">
                <div className="absolute inset-0 bg-[url('https://i.imgur.com/m1zgSCK.jpg')] bg-no-repeat bg-contain opacity-10"></div>

                <p className="font-mono text-2xl font-semibold tracking-widest mt-48">ECELL  IIITL  PRESENTS</p>
                <div className="flex  items-center gap">
                    <h1 className="font-bold text-center lg:text-9xl md:text-7xl text-6xl  text-green-500">E</h1>
                    <h1 className="font-bold text-center text-6xl md:text-7xl lg:text-9xl">nspire</h1>
                    <h1 className="font-bold text-center text-6xl md:text-9xl"> '23</h1>
                    <div className="w-48 md:w-64 lg:w-96 h-1 border-b-2 border-white rounded-xl  md:mt-4"></div>
                </div>
                <br></br>
                <p className="text-5xl font-semibold tracking-wide  mb-64">Innovation Odessey</p>

            </div>
        </div>
    )
}

export default Home
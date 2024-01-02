import React from "react"

function DjCard() {

    return (

        <div className="relative h-auto w-full ">
            <img
                src="https://i.imgur.com/kDLtPpV.png"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-5xl lg:text-9xl md:text-7xl font-semibold text-blue-500">Enspire's DJ Night</h1>
                <p className="lg:mt-12 md:mt-8 mt-4 tracking-wider lg:mb-24 md:mb-12 mb-4 lg:text-3xl md:2xl text-xl text-yellow-300 ">
                    "Each year Enspire ending ceremony is graced with all night long DJ night participated eagarly by all the students.It is the longest DJ night celebrated in the lucknow ever."
                </p>


            </div>
        </div>

    )
}

export default DjCard;
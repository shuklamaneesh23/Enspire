import React, { useState } from "react";

function EventCard({ link,img, name, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
       <a href={link} target="_blank">
         <div className="flex items-center mb-12 h-[400px] w-[300px]" onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}>
            <div

                className={isHovered ? "hidden" : "relative h-[400px] w-[300px] rounded-md cursor-pointer"}
            >
                <div>
                    <div className="flex flex-col"

                    >
                        <img
                            className="cursor-pointer"
                            src={img}
                            alt=""

                        />
                    </div>
                    <div className="bg-[#060314] text-[#BD9F67]">
                        <p className="text-2xl font-semibold">{name}</p>
                    </div>
                </div>
            </div>
            <div
                className={isHovered ? "overflow-visible relative h-[450px] w-[400px] rounded-md ease-in-out duration-1000 cursor-pointer" : "hidden"}
            >
                <div className="">
                    <img
                        src={img}
                        alt="AirMax Pro"
                        className="z-0 h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                        <h1 className="text-lg font-semibold text-yellow-500">{name}</h1>
                        <p className="mt-2 text-sm text-gray-300">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
       </a>
    );
}

export default EventCard;

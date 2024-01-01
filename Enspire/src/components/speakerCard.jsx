import React from "react"

function SpeakerCard({ add, username,about,weblink}) {

  return (
    <a href={weblink} target="_blank">
        <div className="relative h-[400px] w-[300px] rounded-md cursor-pointer hover:scale-125 duration-1000 ease-in-out delay- hover:m-8">
      <img
        src={add}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {about}
        </p>

        
      </div>
    </div>
    </a>
  )
}

export default SpeakerCard
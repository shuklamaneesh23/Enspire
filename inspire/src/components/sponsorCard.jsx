import React from "react";

function Card({ imgLink,webLink }) {


  return (
    <div
      className="w-46 flex items-center mb-12 rounded-full"
    >
      <a href={webLink} target="_blank">

        <img
          className="h-auto w-64  cursor-pointer"
          src={imgLink}
          alt=""
        />
      </a>
    </div>
  );
}

export default Card;




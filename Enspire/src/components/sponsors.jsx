import React from "react";
import Card from "./card";

function Sponsers() {
    return (
        <div className="w-full h-auto p-12 bg-black text-white flex flex-col">
            <div>
                <h1 className="font-semibold text-center text-5xl md:text-8xl">Our Sponsors</h1>
            </div>

            <div className="w-full flex flex-wrap justify-evenly mt-12 gap-9">
                <Card imgLink="https://megathon.in/img/sponsors/Qualcomm.png" webLink="https://www.qualcomm.com" />
                <Card imgLink="https://megathon.in/img/sponsors/MeitY.jpg" webLink="https://meity.gov.in/" />
                <Card imgLink="https://megathon.in/img/sponsors/CIE.png" webLink="https://cie.iiit.ac.in" />
                <Card imgLink="https://asset.brandfetch.io/idhhbjvrOQ/id5fMk0b-n.png" webLink="https://www.lensfit.com" />
                <Card imgLink="https://www.svgrepo.com/show/353522/bugsee.svg" webLink="https://bugsee.com" />
                <Card imgLink="https://seeklogo.com/images/L/lenskart-logo-5AF6B67525-seeklogo.com.png" webLink="https://www.lenskart.com" />

            </div>
        </div>

    )
}

export default Sponsers;


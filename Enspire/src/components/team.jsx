import React from "react";
import MemberCard from "./memberCard";

function Team() {
    return (
        <div className="w-full h-auto bg-slate-900 p-12 md:24 flex flex-col flex-wrap gap-24">
            <div className="flex justify-center items-center">
                <p className="font-bold font-sarif text-[#BD9F67] pt-12 text-5xl md:text-7xl lg:text-8xl">Meet Our Team</p>
            </div>
            <div className="flex flex-col flex-wrap gap-12">
                <div className="flex justify-center">
                    <p className="font-semibold  font-sarif text-4xl md:text-6xl lg:text-7xl text-white">Coordinators</p>
                </div>
                <div className="flex flex-wrap gap-9 p-4 md:p-8 lg:p-12 justify-around">
                    <MemberCard add="https://enspire.netlify.app/teamData/Dev_Shah.jpg" username="Dev Shah" post="Overall Coordinator" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Admya.jpg" username="Admya Mani" post="Overall Coordinator" />
                </div>
            </div>
            <div className="flex flex-col flex-wrap gap-12">
                <div className="flex justify-center">
                    <p className="font-semibold  font-sarif text-4xl md:text-6xl lg:text-7xl text-white">Relations</p>
                </div>
                <div className="flex flex-wrap gap-9 p-4 md:p-8 lg:p-12 justify-around">
                    <MemberCard add="https://enspire.netlify.app/teamData/arpita.jpg" username="Arpita Jena" post="Public Relations Head"/>
                    <MemberCard add="https://enspire.netlify.app/teamData/Apoorv.jpg" username="Apoorva Shrivastav" post="Public Relations Head" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Dilip.jpg" username="Dilip Patnana" post="Corporate Relations Head" />
                </div>
            </div>
            <div className="flex flex-col flex-wrap gap-12">
                <div className="flex justify-center">
                    <p className="font-semibold  font-sarif text-4xl md:text-6xl lg:text-7xl text-white">Events Lead</p>
                </div>
                <div className="flex flex-wrap gap-9 p-4 md:p-8 lg:p-12 justify-around">
                    <MemberCard add="https://enspire.netlify.app/teamData/Tushar_Agrawal.jpg" username="Tushar Agarwal" post="Events Lead"/>
                    <MemberCard add="https://enspire.netlify.app/teamData/Divyanshi%20.jpg" username="Divyanshi" post="Events Lead" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Aashish_Papneja.jpg" username="Aashish Papneja" post="Events Lead" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Sakshi_Sharma.jpeg" username="Sakshi_Sharma" post="Events Lead" />
                </div>

            </div>
            <div className="flex flex-col flex-wrap gap-12">
                <div className="flex justify-center">
                    <p className="font-semibold  font-sarif text-4xl md:text-6xl lg:text-7xl text-white">Developers</p>
                </div>
                <div className="flex flex-wrap gap-9 p-4 md:p-8 lg:p-12 justify-around">
                    <MemberCard add="https://enspire.netlify.app/teamData/Karthik.jpeg" username="Karthik S" post="Developer Lead" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Deep.jpg" username="Deep" post="Developer Lead" />
                </div>
            </div>
            <div className="flex flex-col flex-wrap gap-12">
                <div className="flex justify-center">
                    <p className="font-semibold  font-sarif text-4xl md:text-6xl lg:text-7xl text-white">Outreach and Collaborations Team</p>
                </div>
                <div className="flex flex-wrap gap-9 p-4 md:p-8 lg:p-12 justify-around">
                    <MemberCard add="https://enspire.netlify.app/teamData/AryanKumar.jpg" username="Aryan Kumar" post="Outreach and Collaborations Lead" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Umm.jpeg" username="Umm E Kulsum" post="Outreach and Collaborations Lead" />
                </div>
            </div>
            <div className="flex flex-col flex-wrap gap-12">
                <div className="flex justify-center">
                    <p className="font-semibold  font-sarif text-4xl md:text-6xl lg:text-7xl text-white">Designers</p>
                </div>
                <div className="flex flex-wrap gap-9 p-4 md:p-8 lg:p-12 justify-around">
                    <MemberCard add="https://enspire.netlify.app/teamData/Vineet_Verma.jpg" username="Vineet Verma" post="Design Lead" />
                    <MemberCard add="https://enspire.netlify.app/teamData/ansukha.jpg" username="Anushka Tiwari" post="Design Lead" />
                </div>
            </div>
            <div className="flex flex-col flex-wrap gap-12">
                <div className="flex justify-center">
                    <p className="font-semibold  font-sarif text-4xl md:text-6xl lg:text-7xl text-white">Web Team</p>
                </div>
                <div className="flex flex-wrap gap-9 p-4 md:p-8 lg:p-12 justify-around">
                <MemberCard add="https://enspire.netlify.app/teamData/Samarth.jpg" username="Samarth Sahu" post="Web Lead" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Mudit.jpg" username="Mudit Yadav" post="Member" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Rishi.jpg" username="RishiRaj Maheshwari" post="Member" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Charan.jpg" username="Charan" post="Member" />
                    <MemberCard add="https://enspire.netlify.app/teamData/Sarthak.jpg" username="Sarthak" post="Member" />
                    
                </div>
            </div>



        </div>
    )
}

export default Team
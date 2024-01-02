import React from "react";
import SpeakerCard from "./speakerCard";

function Workshop() {
    return (
        <div className="w-full h-auto bg-black text-white p-12 pt-24 lg:pt-24 flex flex-col gap-y-12">
            <div>
                <h1 className="font-semibold text-center text-5xl text-[#BD9F67] md:text-8xl">Speaker Sessions</h1>
            </div>
            <div className="text-xl mt-6 font-light font-mono">
                <p className="pr-16 pl-16">Get first hand experience and learn from quality speaker sessions which fare across a wide area of interests.</p>
            </div>
            <div className="flex flex-wrap justify-evenly gap-24 items-center">
                <SpeakerCard
                    username='Hitesh Choudhary'
                    add="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
                    about="He like to make videos related to code and tech in his free time. He also lead a few tech teams in startups, help in hiring talent for companies."
                    weblink="https://hiteshchoudhary.com" />
                <SpeakerCard
                    username='Aman Dhattarwal'
                    add="https://media.licdn.com/dms/image/C4E03AQFAoY-MSYJsCA/profile-displayphoto-shrink_800_800/0/1600154261501?e=2147483647&v=beta&t=y6fNVbickwFxsfp0r6qVqhDz2_wRubRatZZX_qxFG_0"
                    about=" Aman Dhattarwal is an Indian YouTuber, Public Speaker, Influencer, career counselor, and educator. " 
                    weblink="https://www.youtube.com/@AmanDhattarwal" />
                <SpeakerCard
                    username='Vivek Bindra'
                    add="https://cxotoday.com/wp-content/uploads/2023/06/VBS_46.png"
                    about="He is a motivational Guru who make people fool by giving them 10 days MBA degree.He has also allegation of beating his wife."
                    weblink="https://www.badabusiness.com" />
                <SpeakerCard
                    username='Sandeep Maheshwari'
                    add="https://yt3.googleusercontent.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s900-c-k-c0x00ffffff-no-rj"
                    about="Sandeep Maheshwari is a name among millions who struggled, failed and surged ahead in search of success, happiness and contentment."
                    weblink="https://www.sandeepmaheshwari.com" />


            </div>
        </div>
    )
}

export default Workshop


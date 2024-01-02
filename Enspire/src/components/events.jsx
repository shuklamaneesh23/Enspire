import React from "react";
import EventCard from "./eventCard";

function Events() {
    return (
        <div className="w-full h-auto flex flex-col flex-wrap p-12 bg-black ">
            <div className="mt-8">
            <h1 className="font-semibold text-center text-5xl md:text-8xl text-[#BD9F67]">Events</h1>
            </div>
            <div className="flex flex-wrap gap-12 mt-24 m-12 items-center justify-around">
                <EventCard img="https://i.imgur.com/fH7lUbg.png" name="Million Dollar Idea" 
                description="Ever dreamed of presenting your idea to a panel of sharks? ENspire'22, brings you the chance to present that potentially game-changing idea you've always had. 
                We are excited to announce that the registrations for this flagship event have begun. Register now and get an opportunity to win prizes from a pool of Rs 6000."
                link="https://www.instagram.com/p/Ck_UlZ6BRbV/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg==" />
                <EventCard 
                img="https://i.imgur.com/8z69DGP.png"
                name="E-Ship Quiz"
                description="Startups are everywhere, many know them but it's a time to show your skills and deep knowledge to the startups and market. ENspire'22 brings you the chance to test your entrepreneurship knowledge and skills.
                We are excited to announce that the registrations for this event have begun. Register now and get an opportunity to win prizes from a pool of ₹1500."
                link="https://www.instagram.com/p/ClbRncthee2/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg=="
                />
                <EventCard
                img="https://i.imgur.com/eEWJ8z6.png"
                name="IPL Auction"
                description="Always longed to be a part of the IPL?
                Now’s your chance to participate in a virtual auction featuring the original players’ list with special rules.
                Unleash your dream team for the IPL in this special virtual auction and get a chance to win a big buck and experience the zeal of an auction."
                link="https://www.instagram.com/p/ClgBwgPrwN7/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg=="
                />
                <EventCard
                img="https://i.imgur.com/Xf9i4Y4.png"
                name="Gaming Nights"
                description="The most exciting battle royale racing game. Take on the extreme and exciting speed challenge, and master your vehicles and skills. Take on different opponents in the field, pick up weapons and blow up other karts to win!
                ENspire is bringing you a gaming night with a variety of the most played video games, one of them being Smash Karts.
                Start Date: 2nd December 2022, 10:00 p.m."
                link="https://www.instagram.com/p/CllSf4krAqi/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg=="/>
                <EventCard 
                img="https://i.imgur.com/8yg6I0u.png"
                name="Mystery Rooms"
                description="“Mystery Rooms, a thrill which you have been waiting for has now started accepting participation.
                You will be locked in a room with other groups, and the team that first solves the mystery will be given back triple the money they paid to register. Don’t miss out on this chance to “sabse kam time me paisa triple”."
                link="https://www.instagram.com/p/CljOlR-hFVp/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg=="
                />
                <EventCard
                img="https://i.imgur.com/B3jQwbx.png"
                name="Stand-Up Comedy"
                description="After a number of intense and suspenseful events, it's time to switch gears, lay back, and enjoy some witty jokes and stellar impersonations from not one, but two stand-up comedians: @artist_aditya23 and @deepak_theperformer .
                Get ready for the first-ever live comedy gigs to be performed in IIIT Lucknow, and get excited about them!" 
                link="https://www.instagram.com/p/ClqVqXtLitJ/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg=="
                />
                <EventCard 
                img="https://i.imgur.com/MSJ8lwp.png"
                name="Shark tank"
                description="Ever envisioned yourself swimming with entrepreneurial sharks, ready to
                pitch your game-changing idea? Well, get ready to ride the waves of
                innovation with ENspire'23! This is your golden opportunity to bring your
                dreams to life and unveil that revolutionary concept you've been nurturing
                in the depths of your imagination.
                Million Dollar Idea is a platform that allows aspiring enthusiasts to
                showcase their business ideas to a panel of judges within a stipulated time
                frame."
                link="https://www.instagram.com/p/Cll_mvWBIFi/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg=="
                />

                <EventCard
                img="https://i.imgur.com/2Cq5whU.png"
                name="Bollywood Night"
                description="In collaboration with Enspire, Zephyr is hosting a Bollywood-themed evening. This is your time to step into the spotlight and show your incredible abilities. ✨ ✨
                Join in on the fun by dressing up as your favorite movie character !!!"
                link="https://www.instagram.com/p/ClrguyGhEJf/?utm_source=ig_web_copy_link&igsh=MjM0N2Q2NDBjYg=="
                />
            </div>
        </div>
    )
}

export default Events
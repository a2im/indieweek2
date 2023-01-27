"use client";
import Image from "next/image"
import { IWButtonInternal, IWButtonExternal } from "../button"

export default function MyTickets(){
    return (
        <>
        <div id="tickets" className="max-w-6xl mx-auto text-center pt-10">
          <div className="flex flex-col md:flex-row items-center md:justify-around mx-auto gap-10 p-5">
            <div className="flex-initial relative px-20 max-w-xl">
              <h2 className="text-4xl"> Get tickets and accommodations early to save more!</h2>
              <hr className="border-black my-5"></hr>
              <h4>  We’re excited to host A2IM Indie Week in the heart of Manhattan 
                at the sleek Crowne Plaza Hotel. Stay at the Indie Week HQ for 
                discounted rooms, easy access to the conference site, and to 
                make the most of our after hours events.
              </h4>
              <IWButtonInternal href='/tickets'>LEARN MORE</IWButtonInternal>
            </div>
            <div className="list-inside mx-auto iwborder px-8 py-10 list-disc">
              <h3>Current Tickets Available</h3> 
              <p className="text-3xl py-10">
                Example Ticket Info 
              </p>
              <IWButtonExternal href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Click Here</IWButtonExternal>
            </div>
      </div>
        </div>
        </>
    )
}
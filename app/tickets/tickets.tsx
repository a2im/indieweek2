"use client";

import { IWButtonInternal, IWButtonExternal } from "../button"

export function MyTickets(){
    return (
        <>
        <div id="tickets" className="max-w-6xl mx-auto text-center pt-10">
          <div className="flex flex-col md:flex-row items-center md:justify-around mx-auto gap-10 p-5">
            <div className="flex-initial relative px-20 max-w-xl">
              <h2 className="text-4xl"> Get tickets and accommodations early to save more!</h2>
              <hr className="border-black my-5"></hr>
              <h4 className="pb-2">  We’re excited to host A2IM Indie Week in the heart of Manhattan 
                at the sleek Crowne Plaza Hotel. Stay at the Indie Week HQ for 
                discounted rooms, easy access to the conference site, and to 
                make the most of our after hours events.
              </h4>
              <IWButtonInternal href='/tickets'>LEARN MORE</IWButtonInternal>
            </div>
            <div className="list-inside mx-auto border-4 border-white px-8 py-10 bg-black bg-opacity-75 rounded-3xl">
              <h3 className="font-bold">Current Tickets Available</h3> 
              <hr className="border-iwred mt-5"></hr>
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

export function HotelCard(){
  return (
    <div id="hotels" className="max-w-5xl mx-auto text-center pb-10 pt-32">
    <h2> Crowne Plaza Times Square</h2>
    <hr className="border-iwred my-5"></hr>
    <div className="grid grid-cols-0 md:grid-cols-2">
        <div className="justify-center items-center text-center rounded-2xl overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.058312196947!2d-73.98725238459359!3d40.760742179326584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258567367bf3f%3A0x94b2c1c08294f791!2sCrowne%20Plaza%20Times%20Square%20Manhattan%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sus!4v1669928501346!5m2!1sen!2sus" width="100%" height="100%" loading="lazy" className="flex-initial"></iframe>
      </div>
      <div className="my-auto">
        <ul className="list-inside mx-auto px-10">
          <h4>Special rates for conference attendees are available now. Reserve your room today to maximize your A2IM Indie Week experience. Spaces are limited!</h4>
          <li className="pt-5 my-5 text-3xl border-solid border-4 border-white rounded-2xl bg-black bg-opacity-75">
            <div>
              <h3 className="text-2xl font-bold">One King Bed</h3>
              <h3 className="text-xl">$309 +tax</h3>
              <hr className="border-iwred mx-10 mt-5"></hr>
              <IWButtonExternal href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >Book Now!</IWButtonExternal>
            </div>
          </li>
          <li className="pt-5 my-5 text-3xl border-solid border-4 border-white rounded-2xl bg-black bg-opacity-75">
            <div>
            <h3 className="text-2xl font-bold">2 Double Beds</h3>
            <h3 className="text-xl">$329 +tax</h3>
            <hr className="border-iwred mx-10 mt-5"></hr>
              <IWButtonExternal href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Book Now!</IWButtonExternal>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
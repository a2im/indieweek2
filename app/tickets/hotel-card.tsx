"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { IWButtonExternal } from "../button";

export default function HotelCard(){
  return (
    <div id="hotels" className="max-w-6xl mx-auto text-center">
      <div className="grow shrink content-center">
        <h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
          Hotel Accomodations
        </h2>
      </div>
    <div className="w-32">
      <div className="-ml-64 w-32">
        <Image
          src="/images/sparkle-red.png"
          width={100}
          height={100}
          alt="sparkle image"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }}/>
      </div>
    </div>
    <h2 className="text-4xl"> Crowne Plaza Times Square</h2>
    <hr className="border-iwred my-5"></hr>
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex flex-col">
        <div className="justify-center items-center text-center my-auto mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.058312196947!2d-73.98725238459359!3d40.760742179326584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258567367bf3f%3A0x94b2c1c08294f791!2sCrowne%20Plaza%20Times%20Square%20Manhattan%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sus!4v1669928501346!5m2!1sen!2sus" width="600" height="450" loading="lazy" className="display-1 mx-auto"></iframe>
        </div>
      </div>
      <div className="my-auto">
        <ul className="list-inside mx-auto px-10">
          <h4>Special rates for conference attendees are available now. Reserve your room today to maximize your A2IM Indie Week experience. Spaces are limited!</h4>
          <li className="pt-5 text-3xl border-solid border-2 border-white rounded-2xl">
            <div className="">
              One King Bed 
              $309 +tax
              <IWButtonExternal href="https://a2im.org" >Book Now!</IWButtonExternal>
            </div>
          </li>
          <li className="text-3xl border-solid border-2 border-white rounded-2xl">
            <div className="">
              2 Double Beds
              $329 +tax
              <IWButtonExternal href="https://a2im.org">Book Now!</IWButtonExternal>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <hr className="border-iwred my-5"></hr>
  </div>
  )
}
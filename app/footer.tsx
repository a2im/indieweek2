import Image from "next/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "../components/SocialFollow";
import AdBanner from "../components/ad-banner";
import SponsorFooter from "../components/sponsors";

export default function Footer() {
  return (
  <>
  <SponsorFooter/>
    <footer className="w-full relative">
        <div className="mx-auto md:gap-20 p-10  ">
          <AdBanner/>
        <div className="max-w-5xl bg-black z-20 relative border-4 rounded-3xl bg-opacity-75 px-10 mx-auto justify-center items-center flex flex-col md:gap-20 md:flex-row py-10">
            <Link href="/" passHref className="w-96">
              <Image
                className="relative hover:scale-105 z-20"
                src="/logos/A2IM-logos/A2IM-logo-white.png"
                alt='a2im logo'
                height={179}
                width={400}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </Link>
            <SocialFollowWhite />
            </div>
        </div>
    </footer>
    <div className="relative z-0">
        <Image className="absolute inset-x-0 bottom-0 mx-auto z-0" 
        src={'/images/waves.png'} 
        width={1200} 
        height={622} 
        alt="iw waves image"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        />
        </div>
    </>
  )
}

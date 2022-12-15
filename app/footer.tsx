import Image from "next/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "./SocialFollow";
import AdBanner from "./ad-banner";
import SponsorFooter from "./sponsors";

export default function Footer() {
  return (
    <footer className="z-0 w-full">

              <div className="mx-auto relative h-[400] md:h-[800px] -mb-[600px]">
        <Image className="absolute inset-x-0 bottom-0 mx-auto" src={'/images/waves.png'} fill={true} alt="iw waves image"/>
        </div>
        <div className="mx-auto md:gap-20 p-10">
          <AdBanner/>
        <div className="max-w-4xl mx-auto justify-center items-center flex flex-col md:gap-20 lg:gap-64 md:flex-row py-10">
            <Link href="/" passHref className="w-96">
              <Image
                className="relative"
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
  )
}

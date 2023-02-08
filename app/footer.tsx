import Image from "next/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "../components/SocialFollow";
import AdBanner from "../components/ad-banner";

export default function Footer() {
  return (
    <footer className="md:-mt-60 w-full pt-32">
              <div className="mx-auto relative h-[400] md:h-[800px] -mb-[600px]">
        <Image className="absolute inset-x-0 bottom-0 mx-auto" 
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
        <div className="mx-auto md:gap-20 p-10">
          <AdBanner/>
        <div className="max-w-4xl mx-auto justify-center items-center flex flex-col md:gap-20 lg:gap-64 md:flex-row py-10">
            <Link href="/" passHref className="w-96">
              <Image
                className="relative hover:scale-105"
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

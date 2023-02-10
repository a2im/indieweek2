'use client';

import React from "react"
import Image from "next/image";
import Link from "next/link";
import { IWButtonInternal, IWButtonExternal, IWButtonAnchor } from "../button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InfoSegment from "../info";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 728 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 728, min: 640 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

export function About1 () {
    return (
      <div className="max-w-5xl mx-auto">
      <div className="z-10 grid grid-cols-0 md:grid-cols-2 md:mt-10 items-center md:justify-around mx-auto gap-10 p-5">
        <div className="flex-initial relative items-center max-w-xl py-8 order-last md:order-first">
                <h2> WHAT IS A2IM INDIE WEEK?</h2>
                <hr className="border-black my-5"></hr>
                <h4 className="my-5">Running for over 15 years, and with over 1200 attendees, it&apos;s the largest independent music gathering in the world. Yearly, Indie Week hosts over 60 panels and workshops, 1800 curated business meetings, and countless opportunities tailor-made for the independent sector&apos;s unique needs.</h4>
              <IWButtonInternal href='/tickets'>Buy Tickets</IWButtonInternal>
              </div>
              <div className="image-cropper m-7">
                <Image
                  className="roundedimage"
                  src="/images/opening-reception-sq.jpg"
                  alt='indie week opening reception'
                  width={500}
                  height={500}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }} />
              </div>
            </div>
          </div>
)
}


export function About2(){
  return(
    <div className="max-w-5xl mx-auto pb-20">
    <div className="grid grid-cols-0 md:grid-cols-2 items-center md:justify-around mx-auto gap-10 p-5">
          <div className="image-cropper m-7">
              <Image
                className="roundedimage"
                src="/images/ABOUT_sq.jpg"
                alt='indie week meeting room'
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw" />
            </div>
            <div className="flex-initial py-8 relative max-w-xl text-right">
              <h2>WHO ATTENDS A2IM INDIE WEEK?</h2>
              <hr className="border-iwred my-5"></hr>
              <ul className="mx-auto pb-8">
                <li className="text-2xl">
                1100+ Attendees
                </li>
                <li className="text-2xl">
                460+ Companies Represented
                </li>
                <li className="text-2xl">
                28 Countries Represented
                </li>
              </ul>
              <Carousel responsive={responsive} className="my-5 max-w-sm md:max-w-xl">
                <div className="px-10 relative max-w-xl">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-logo.png'} width={768} height={324} alt="a2im full logo"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-logo-white.png'} width={768} height={324} alt="a2im full logo"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-button-black.png'} width={1200} height={1200} alt="a2im button logo"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-logo.png'} width={768} height={324} alt="a2im full logo"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-logo-white.png'} width={768} height={324} alt="a2im full logo"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-button-black.png'} width={1200} height={1200} alt="a2im button logo"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
                  </Link>
                </div>
                <div className="px-10">
                  <Link href="https://a2im.org">
                    <Image src={'/logos/A2IM-logos/A2IM-button-white.png'} width={1200} height={1200} alt="a2im button logo white"/>
                  </Link>
                </div>
              </Carousel>
              <IWButtonInternal href='/tickets'>PAST PROGRAMMING</IWButtonInternal>
            </div>
          </div>
        </div>
  )
}

export function FooterDisclaimer(){
  return(
<>
  <div className="p-10 rounded-3xl bg-black bg-opacity-75 border-4 border-white mx-auto max-w-5xl">
    <h2>ABOUT A2IM</h2>
    <hr className="border-iwred my-5"></hr>
    <h4>The American Association of Independent Music (A2IM) is a 501(c)(6) not-for-profit trade organization that serves as a central voice for a diverse community of over 600 independently owned record labels operating within the United States. A2IM  represents their interests in the marketplace, in the media, on Capitol Hill, and as part of the global music community.

As an organization, A2IM is committed to protecting the value of independent musical contributions and influence on a policy level.
</h4>
</div>
    </>
  );
}

export default function AboutUS(){
  return (
    <div className="flex flex-col gap-20">
    <About1/>
    <FooterDisclaimer/>
    <About2/>
    </div>
  )
}
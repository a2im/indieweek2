"use client";
import Image from "next/image";
import { IWButtonInternal, IWButtonAnchor } from "../app/button"
import { AnimatePresence, motion } from "framer-motion";

export function Intro() {
  return (
    <>
    <div className="bggradient2">
      <div className="items-center justify-center flex flex-col md:flex-row gap-10 py-20">
          <AnimatePresence>
            <motion.div 
              initial= {{
                scale: "0%",
                  }}
              animate={{
                scale: "100%",
                transition:{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 7,
                  duration: 0.5, 
                }}}
              className="p-3 min-w-2xl max-w-4xl">
              <Image
                height={496}
                width={1747}
                src="/logos/Indie Week 23.png"
                alt="Indie Week Logo"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </motion.div>
            <motion.div
              initial= {{
                  opacity: 0,
                  x:-2000,
                  scale: "20%",
                    }}
              animate={{
                  x: 0,
                  opacity: 1,
                  scale: ["100%", "120%", "80%", "100%"],
                  transition:{ 
                    ease: [0.075, 0.72, 0.165, 1],
                    delay: 1, 
                    duration: 1,
                    }
                  }}
              className="w-32 collapse md:visible">
              <motion.div
                initial= {{
                    scale: "100%",
                      }}
                animate={{
                    rotateX: [360, 180, 360],
                    scale: ["100%", "90%", "100%", "60%", "100%", "70%", "100%"],
                    transition:{
                      ease: "anticipate",
                      duration: 6,
                      repeat: Infinity,
                      delay: 0,
                      }
                    }}
                whileTap={{scale: 0.9}}
                className="md:w-32 collapse md:visible">
                  <Image
                  src="/images/sparkle-white.png"
                  width={100}
                  height={100}
                  sizes="100vw"
                  alt="sparkle shape"
                  style={{
                    width: "100%",
                    height: "auto"
                  }}/>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mx-auto -mt-64 md:-mt-32">
      <h4 className="max-w-3xl text-center mx-auto p-5 md:my-10">
      Founded by independents, for independents, A2IM Indie Week is a three-day conference for the independent music community in the United States.
      </h4>
        <div className="flex flex-col md:flex-row justify-between content-center max-w-5xl mx-auto pb-10 gap-5">
          <IWButtonInternal href="/about" >LEARN MORE</IWButtonInternal>
          <IWButtonInternal href="/tickets" >GET TICKETS</IWButtonInternal>
          <IWButtonAnchor href="/tickets#hotels">BOOK YOUR STAY</IWButtonAnchor>
        </div>
    </div>
  </>
  );
}

export function Intro2 () {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-0 md:grid-cols-2 md:mt-10 items-center md:justify-around mx-auto gap-10 p-5">
        <div className="py-8 flex-initial relative items-center max-w-xl order-last md:order-first">
          <h2> INDEPENDENT MUSIC&apos;S LARGEST CONFERENCE</h2>
          <hr className="border-iwred my-5"></hr>
          <h4 className="my-5">Held annually in New York City, A2IM Indie Week
            is the largest gathering of the independent
            music community. Drawing labels, distributors,
            DSPs, agencies and more, participants can
            expect 3 days of insightful discussions and
            fruitful networking.</h4>
          <IWButtonInternal href='/about'>LEARN MORE</IWButtonInternal>
        </div>
        <div className="image-cropper m-7">
          <Image
          className="roundedimage"
          src="/images/iwmeetings-sq-2.jpg"
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
  );
}



export function Intro3 () {
return (
  <div className="max-w-5xl mx-auto z-40">
  <div className="grid grid-cols-0 md:grid-cols-2 md:mt-10 items-center md:justify-around mx-auto gap-10 p-5">
        <div className="image-cropper m-7">
          <Image
          className="roundedimage"
          src="/images/HOMEPAGE_2_sm.jpg"
          alt='indie week meeting room'
          width={500}
          height={500}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }} />
        </div>
        <div className="py-8 relative max-w-xl text-right">
          <h3><span><h2>FOLLOW A2IM </h2></span>TO
            STAY UP TO DATE ON
            PROGRAMMING
            & TICKET SALES</h3>
            <hr className="border-iwred my-5"></hr>
          <h4 className="my-5">Each year we carefully curate our lineup of
            expert speakers to discuss the most precient
            topics in music. Subjects covered have included
            touring, marketing, sync licensing, industry
            predictions, DSP workshops, and many more.</h4>
          <IWButtonAnchor href='/program#past-years'>PAST PROGRAMMING</IWButtonAnchor>
        </div>
    </div>
  </div>
);
}

export default function MyIntro () {
  return (
    <div className="flex flex-col gap-20 pb-96 md:pb-28">
          <Intro />
          <Intro2 />
          <Intro3 />
        </div>
  )
}
"use client";
import Image from "next/image";
import { IWButtonInternal, IWButtonAnchor } from "./button"
import { AnimatePresence, motion } from "framer-motion";


export function Intro() {
  return (
    <>
    <div className="bggradient2">
      <div className="items-center -mb-40 md:mb-0 justify-center flex flex-col md:flex-row gap-10 pt-28">
          <AnimatePresence>
            <motion.div 
              key="iwlogo"
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
              className="w-1/2 min-w-2xl max-w-4xl">
              <Image
                height={379}
                width={1791}
                src="/logos/iw23_Black_Horizontal_Logo_white.png"
                alt="Indie Week Logo"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </motion.div>
            <motion.div
            key="two"
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
              className="w-32">
                        <motion.div
            key="two.grow"
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
              className="md:w-32 invisible md:visible">
    <Image
      src="/images/sparkle-white.png"
      width={100}
      height={100}
      sizes="100vw"
      alt="sparkle shape"
      style={{
        width: "100%",
        height: "auto"
      }}></Image>
            </motion.div>
            </motion.div>
            </AnimatePresence>
                </div>
      </div>
      <div className="mx-auto p-20">
      <h4 className="max-w-3xl text-center mx-auto">
      Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.
      </h4>
        <div className="flex flex-col md:flex-row justify-center content-center max-w-5xl mx-auto">
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
    <AnimatePresence>
        <div className="-mb-52 max-w-6xl mx-auto">
        <motion.div
      key="two"
      initial= {{
          opacity:0,
          x:300,
          y:500,
          scale: "20%",
            }}
      whileInView={{
          opacity: 1,
          x: 300,
          y:160,
          scale: ["105%", "90%", "110%", "90%"],
          transition:{ 
            delay: 0, 
            duration: 1,
            when: "afterChildren",
            ease: "anticipate", 
          }}}
        viewport={{ once: false, amount: 0.6 }}
        className="w-32">
                  <motion.div
      key="two.grow"
      initial= {{
          scale: "100%",
            }}
      animate={{
          rotateX: [360, 180, 360],
          scale: ["90%", "70%", "100%", "70%", "100%", "90%"],
          transition:{
            ease: "anticipate",
            duration: 8,
            repeat: Infinity,
            delay: 0,
        }
          }}
          whileTap={{scale: 0.9}}
        className="-ml-64 w-32 -mt-55 md:-mt-32">
<Image
src="/images/sparkle-red.png"
width={100}
height={100}
alt="sparkle image"
sizes="100vw"
style={{
  width: "100%",
  height: "auto"
}}></Image>
      </motion.div>
      </motion.div>
          <div className="z-10 flex flex-col-reverse md:flex-row md:mt-10 items-center md:justify-around mx-auto gap-10 p-5">
            <div className="flex-initial relative p-20 items-center max-w-xl">
              <h2> INDEPENDENT MUSIC&apos;S LARGEST CONFERENCE</h2>
              <hr className="border-iwred my-5"></hr>
              <h4>Held annually in New York City, A2IM Indie Week
is the largest gathering of the independent
music community. Drawing labels, distributors,
DSPs, agencies and more, participants can
expect 4 days of insightful discussions and
fruitful networking.</h4>
<IWButtonInternal href='/tickets'>LEARN MORE</IWButtonInternal>
            </div>
            
            <div className="image-cropper flex-initial w-1/2 -mt-32 md:-mt-10 md:m-10 max-w-xl">
              <Image
                className="roundedimage"
                src="/images/opening-reception-sq.jpg"
                alt='indie week opening reception'
                width={300}
                height={300}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }} />
            </div>
          </div>
          
        </div>
      </AnimatePresence>
  );
}



export function Intro3 () {
return (
  <div className="mx-auto max-w-6xl md:pb-0 z-30 relative">
    <div className="mx-auto">
    <motion.div
    initial= {{
        opacity:0,
        x:200,
        y:300,
        scale: "20%",
          }}
    whileInView={{
        opacity:1,
        x: 400,
        y: 150,
        scale: ["105%", "80%", "90%", "105%"],
        transition:{ 
          delay: 1, 
          duration: 1,
          when: "afterChildren",
          ease: "anticipate", 
        }}}
      viewport={{ once: false, amount: 0.8 }}
      className="w-32 -mt-32 invisible md:visible">
                <motion.div
    initial= {{
        scale: "100%",
          }}
    animate={{
        rotateX: [360, 180, 360],
        scale: ["105%", "70%", "80%", "100%", "105%"],
        transition:{
          ease: "anticipate",
          duration: 5,
          repeat: Infinity,
          delay: 0,
      }
        }}
        whileTap={{scale: 0.9}}
      className="w-32">
<Image
src="/images/sparkle-red.png"
width={100}
height={100}
alt="sparkle shape"
sizes="100vw"
style={{
width: "100%",
height: "auto",
}}></Image>
    </motion.div>
    </motion.div>
      <div className="flex flex-col md:flex-row -mt-10 md:justify-around items-center mx-auto gap-10 p-5">
        <div className="image-cropper flex-initial max-w-xl m-10 w-1/2">
          <Image
            className="roundedimage"
            src="/images/iwmeetings-sq.jpg"
            alt='indie week meeting room'
            width={500}
            height={500}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }} />
        </div>
        <div className="flex-initial relative max-w-xl p-20 -mt-20 md:mt-0 text-right">
          <h3><span><h2>FOLLOW A2IM </h2></span>TO
STAY UP TO DATE ON
PROGRAMMING
& TICKET SALES</h3>
<hr className="border-iwred my-5"></hr>
          <h4 >Each year we carefully curate our lineup of
expert speakers to discuss the most precient
topics in music. Subjects covered have included
touring, marketing, sync licensing, industry
predictions, DSP workshops, and many more.</h4>
<IWButtonInternal href='/tickets'>PAST PROGRAMMING</IWButtonInternal>
        </div>
      </div>

    </div>
  </div>
);
}

export default function MyIntro () {
  return (
    <div className="pt-20">
          <Intro />
          <div className="py-8 md:hidden" />
          <Intro2 />
          <div className="py-8 md:hidden" />
          <Intro3 />
        </div>
  )
}
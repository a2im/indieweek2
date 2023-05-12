"use client";
import Image from "next/image";
import MyButton from "../app/button"
import { AnimatePresence, motion } from "framer-motion";
import ImageWithFallback from "./image-handler";
import InfoCard from "../app/info-card";

export function Intro({data}) {
  return (
    <>
    <div className="bggradient2">
      <div className="items-center justify-center flex flex-col md:flex-row gap-10 py-20">
          <AnimatePresence>
            <motion.div 
            key={'logo'}
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
                <ImageWithFallback 
                src={data.data.attributes.Header.Image.data.attributes.url} 
                height={data.data.attributes.Header.Image.data.attributes.height}
                width={data.data.attributes.Header.Image.data.attributes.width} 
                alt={data.data.attributes.Header.Image.data.attributes.alternativeText} 
                fallbackSrc={'/logos/A2IM-logos/A2IM-button-white.png'}/>
            </motion.div>
            <motion.div
            key={'stars'}
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
                                  <ImageWithFallback src="/images/sparkle-white.png" width={100}
                  height={100} alt="sparkle shape" fallbackSrc={'/logos/A2IM-logos/A2IM-button-white.png'}/>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mx-auto -mt-64 md:-mt-32">
      <h4 className="max-w-3xl text-center mx-auto p-5 md:my-10">
      {data.data.attributes.Header.Text}
      </h4>
        <div className="flex flex-col md:flex-row justify-between content-center max-w-5xl mx-auto pb-10 gap-5">
          {data.data.attributes.Header.Button.map(button => (
            <div key={button.id}>
            <MyButton type={button.NavType} href={button.URL} >{button.Text}</MyButton>
            </div>
          ))}
        </div>
    </div>
  </>
  );
}


export default function HomeInfo ({data}) {
  return (
    <div className="flex flex-col gap-20 pb-96 md:pb-28">
          <Intro data={data} />
          {data.data.attributes.Info.map(info => (
            <div key={info.id}>
                <InfoCard Info={info}/>
            </div>
          )
          )}
        </div>
  )
}
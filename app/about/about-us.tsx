import React from "react"
import ImageWithFallback from "../../components/image-handler"
import MyButton from "../button"
import InfoCard from "../info-card"
import { FooterDisclaimer } from "../../components/disclaimer"

export function About1 () {
    return (
      <div className="max-w-5xl mx-auto">
      <div className="z-10 grid grid-cols-0 md:grid-cols-2 md:mt-10 items-center md:justify-around mx-auto gap-10 p-5">
        <div className="flex-initial relative items-center max-w-xl py-8 order-last md:order-first">
                <h2> WHAT IS A2IM INDIE WEEK?</h2>
                <hr className="border-black my-5"></hr>
                <h4 className="my-5">Running for over 15 years, and with over 1200 attendees, it&apos;s the largest independent music gathering in the world. Yearly, Indie Week hosts over 60 panels and workshops, 1800 curated business meetings, and countless opportunities tailor-made for the independent sector&apos;s unique needs.</h4>
              <MyButton type='internal' href='/tickets'>Buy Tickets</MyButton>
              </div>
              <div className="image-cropper m-7">
              <ImageWithFallback className="roundedimage" src="/images/opening-reception-sq.jpg" width={500} height={500}  alt='indie week opening reception' fallbackSrc={'/logos/A2IM-logos/A2IM-button-white.png'}/>
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
          <ImageWithFallback className="roundedimage" src="/images/ABOUT_sq.jpg" width={500} height={500} alt='indie week meeting room' fallbackSrc={'/logos/A2IM-logos/A2IM-button-white.png'}/>
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
              <div className="py-5">
              <MyButton type='internal' href='/program'>PAST PROGRAMMING</MyButton>
           </div> 
           </div>
          </div>
        </div>
  )
}

export default function AboutUS({data}){
  return (
    <div className="flex flex-col gap-20">
    <InfoCard Info={data.data.attributes.TopInfo}/>
    <FooterDisclaimer data={data.data.attributes.Disclaimer}/>
    {data.data.attributes.Info.map(info => (
            <div key={info.id}>
                <InfoCard Info={info}/>
            </div>
          )
          )}
    </div>
  )
}
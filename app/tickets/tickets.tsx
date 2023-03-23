"use client";

import { IWButtonInternal, IWButtonExternal } from "../button"
import Image from "next/image";

export function MyTickets(){
    return (
        <>
            <div className="max-w-5xl mx-auto">
    <div className="z-10 grid grid-cols-0 md:grid-cols-2 md:mt-10 items-center md:justify-around mx-autop-8">
      <div className="relative gap-10 items-center max-w-xl py-8 order-last md:order-first px-5">
              <h3 className="font-bold text-3xl md:text-5xl mx-auto"> Get tickets and accommodations early to save more!</h3>
              <hr className="border-black my-5"></hr>
              <h4 className="my-5">
              We’re excited to host A2IM Indie Week in the heart of Manhattan 
                at the sleek InterContinental New York Times Square. Stay at the Indie Week HQ for 
                discounted rooms, easy access to the conference site, and to 
                make the most of our after hours events.</h4>
            </div>
            <div className="rounded-full overflow-hidden m-10">
              <Image
                className="roundedimage"
                src="/images/hotel.jpeg"
                alt='hotel image'
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
            </div>
          </div>
        </div>

      <div id="tickets" className="max-w-5xl mx-auto text-center">
      <div className="pb-10 pt-5 mb-10">
      <h3 className="font-bold text-center pb-10 text-4xl md:text-5xl">Tickets</h3>
          <div className="grid grid-cols-0 md:grid-cols-2 gap-10">
            <div className="flex flex-col grow content-end border-4 border-white bg-black bg-opacity-50 rounded-3xl">
              <div>
                <h3 className="font-bold py-5 text-3xl">Standard Badge</h3> 
                <hr className="border-iwred mx-10"></hr>
              
              <ul className="list-inside  mx-10">
                <li >
              <div className="grid grid-cols-2 gap-2 my-3">
                <p className="text-2xl text-left my-auto">
                  Members
                </p>
                <p className="text-2xl text-right my-auto"><span className="text-iwred px-2 strike">$599.99</span>
                  $299.99
                </p>
                </div><hr className="border-iwred"></hr>
                </li>
                <li>
                <div className="grid grid-cols-2 gap-2 my-3">
                <p className="text-2xl text-left my-auto">
                  Non-Members
                </p>
                <p className="text-2xl text-right my-auto">
                  $1499.99
                </p>
                </div><hr className="border-iwred"></hr>
              </li>
              <li>
              <div className="grid grid-cols-2 gap-2 my-3">
                <p className="text-2xl text-left my-auto">
                  Non-Member Delegates
                </p>
                <p className="text-2xl text-right my-auto">
                  $549.99
                </p>
                </div><hr className="border-iwred"></hr>
              </li>
              </ul>
              </div>
              <div className="py-5">
              <IWButtonExternal href='https://membership.a2im.org/events/Details/a2im-indie-week-2023-791437?sourceTypeId=Hub'>Buy Now</IWButtonExternal>
            </div>
            </div>
            <div className="flex flex-col grow content-between justify-between border-4 border-white bg-black bg-opacity-50 rounded-3xl">
              <div>
              <h3 className="font-bold py-5 text-3xl">Online-Only</h3> 
              <hr className="border-iwred mx-10"></hr>
              
              <ul className="list-inside mx-10">
                <li >
                <div className="grid grid-cols-2 gap-2 my-3">
                <p className="text-2xl text-left">
                  Members
                </p>
                <p className="text-2xl text-right">
                  $99.99
                </p>
                </div><hr className="border-iwred"></hr>
                </li>
                <li>
                <div className="grid grid-cols-2 gap-2 my-3">
                <p className="text-2xl text-left">
                  Non-Members
                </p>
                <p className="text-2xl text-right">
                  $199.99
                </p>
                </div><hr className="border-iwred"></hr>
              </li>
              <li>
              <div className="grid grid-cols-2 gap-2 my-3">
                <p className="text-2xl text-left">
                  Students
                </p>
                <p className="text-2xl text-right">
                  $149.99
                </p>
                </div><hr className="border-iwred"></hr>
              </li>
              </ul>
              </div>
              <div className="py-5 bottom-0">
              <IWButtonExternal href='https://membership.a2im.org/events/Details/a2im-indie-week-2023-791437?sourceTypeId=Hub'>Buy Now</IWButtonExternal>
            </div>
            </div>
          </div>
      </div>
    </div>
        </>
    )
}

export function HotelCard(){
  return (
    <>
    <div id="hotels" className="pb-20">
    <h3 className="font-bold text-4xl md:text-5xl text-center pb-10">ACCOMMODATIONS</h3>
    <div  className="max-w-5xl mx-auto text-center pt-5 overflow-hidden border-4 border-white bg-black bg-opacity-50 rounded-3xl">
    <h3 className="font-bold py-5 text-3xl">InterContinental New York Times Square</h3>
    <div className="rounded-3xl max-h-[300px] overflow-hidden object-contain  p-10 relative py-3">
              <Image
              className="rounded-3xl w-full relative"
                src="/images/hotel3.jpg"
                alt='indie week opening reception'
                width={700}
                height={300}
                sizes="100vw" />
            </div>

          <h4 className="max-w-2xl mx-auto py-10 px-8">Special rates for conference attendees are available now. Reserve your room today to maximize your A2IM Indie Week experience. Spaces are limited!</h4>
    <div className="grid grid-cols-0 md:grid-cols-2 px-10 gap-10">
    <div className="pt-5 my-5 text-3xl border-solid border-4 border-white rounded-2xl bg-black bg-opacity-75">
              <h3 className="text-2xl font-bold">One King Bed</h3>
              <h3 className="text-xl">$309 +tax</h3>
              <hr className="border-iwred mx-10 mt-5"></hr>
              <div className="py-5 bottom-0">
              <IWButtonExternal href="https://www.ihg.com/intercontinental/hotels/us/en/find-hotels/select-roomrate?qDest=300%20West%2044th%20Street,%20New%20York,%20NY,%20US&qPt=CASH&qCiD=12&qCoD=16&qCiMy=52023&qCoMy=52023&qAdlt=1&qChld=0&qRms=1&qIta=99801505&qRtP=6CBARC&qGrpCd=ZBA&qSlH=NYCHC&srb_u=1&qSrt=sBR&qBrs=6c.hi.ex.sb.ul.ic.cp.cw.in.vn.cv.rs.ki.ma.sp.va.sp.re.vx.nd.ii.sx.we.lx&qWch=0&qSmP=0&qRad=30&qRdU=mi&setPMCookies=false" >Book Now!</IWButtonExternal>
            </div>
            </div>
            <div className="pt-5 my-5 text-3xl border-solid border-4 border-white rounded-2xl bg-black bg-opacity-75">
            <h3 className="text-2xl font-bold">2 Double Beds</h3>
            <h3 className="text-xl">$329 +tax</h3>
            <hr className="border-iwred mx-10 mt-5"></hr>
            <div className="py-5 bottom-0">
              <IWButtonExternal href="https://www.ihg.com/intercontinental/hotels/us/en/find-hotels/select-roomrate?qDest=300%20West%2044th%20Street,%20New%20York,%20NY,%20US&qPt=CASH&qCiD=12&qCoD=16&qCiMy=52023&qCoMy=52023&qAdlt=1&qChld=0&qRms=1&qIta=99801505&qRtP=6CBARC&qGrpCd=ZBA&qSlH=NYCHC&srb_u=1&qSrt=sBR&qBrs=6c.hi.ex.sb.ul.ic.cp.cw.in.vn.cv.rs.ki.ma.sp.va.sp.re.vx.nd.ii.sx.we.lx&qWch=0&qSmP=0&qRad=30&qRdU=mi&setPMCookies=false">Book Now!</IWButtonExternal>
            </div>
            </div>
    </div>
    <div className="h-[300px] mt-10">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.155781811028!2d-73.9894109!3d40.758598299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258539c5fdce1%3A0x284ddbfdad85ef75!2s300%20W%2044th%20St%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1678390526583!5m2!1sen!2sus" width="100%" height="100%" loading="lazy" className="flex-initial"></iframe>
  </div>
  </div>
  </div>
  </>
  )
}
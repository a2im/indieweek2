import { IWButtonExternal, IWButtonAnchor } from "./button"

export default function InfoSegment(){
    return (
            <div className="mx-auto max-w-5xl pt-20">
              <div className="grid grid-cols-0 md:grid-cols-2 gap-10">
              <div className="px-10 py-5 rounded-3xl bg-black bg-opacity-75 border-4 border-white mx-auto ">
            <h4 className="mx-auto text-center font-bold text-5xl animate-pulse uppercase">Interested in joining A2IM?</h4>
            <hr className="m-3 border-iwred mx-10"></hr>
            <h4 className="mx-auto text-center mb-2">A2IM members can log in for deeply discounted, members-only tickets & more.</h4>
            
            <IWButtonExternal href='https://a2im.org/about-us/join-a2im/'>LEARN MORE</IWButtonExternal>
            </div>
            <div className="grid grid-cols-0 content-center gap-3 p-5 rounded-3xl bg-black bg-opacity-50 border-4 border-white">
            <hr className="m-3 border-iwred mx-10"></hr>
            <IWButtonAnchor href='/tickets#tickets'>purchase tickets</IWButtonAnchor>
            <hr className="m-3 border-iwred mx-10"></hr>
            <IWButtonAnchor href='/tickets#hotels'>book your stay</IWButtonAnchor>
            <hr className="m-3 border-iwred mx-10"></hr>
            <IWButtonAnchor href='/program#past-years'>Watch Past Events</IWButtonAnchor>
            <hr className="m-3 border-iwred mx-10"></hr>
            </div>
            </div>
            </div>
  )
  }
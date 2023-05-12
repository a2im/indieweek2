import MyButton from '../button'
import Image from "next/image";
import InfoCard from '../info-card';

export function MyTickets({data}){
    return (
        <>
            <div className="max-w-5xl mx-auto">
          <InfoCard Info={data.data.attributes.Info}/>
        </div>
      <div id="tickets" className="max-w-5xl mx-auto text-center">
      <div className="pb-10 pt-5 mb-10">
      <h3 className="font-bold text-center pb-10 text-4xl md:text-5xl">Tickets</h3>
          <div className="grid grid-cols-0 md:grid-cols-2 gap-10">
            {data.data.attributes.Tickets.map(Tickets => (
            <div key={Tickets.id}>
              <TicketCard Tickets={Tickets}/>
            </div>
            ))}
          </div>
      </div>
    </div>
  </>
    )
}

export function Accommodations({accommodations}){
  return (
    <>
    <div id="hotels" className="pb-20">
    <h3 className="font-bold text-4xl md:text-5xl text-center pb-10">ACCOMMODATIONS</h3>
    <div  className="max-w-5xl mx-auto text-center pt-5 overflow-hidden border-4 border-white bg-black bg-opacity-50 rounded-3xl">
    <h3 className="font-bold py-5 text-3xl">{accommodations.Title}</h3>
    <div className="rounded-3xl max-h-[300px] overflow-hidden object-contain  p-10 relative py-3">
              <Image
              className="rounded-3xl w-full relative"
                src={accommodations.Image.data.attributes.url}
                alt={accommodations.Image.data.attributes.alternativeText}
                width={accommodations.Image.data.attributes.width}
                height={accommodations.Image.data.attributes.height}
                sizes="100vw" />
            </div>
          <h4 className="max-w-2xl mx-auto py-10 px-8">{accommodations.Text}</h4>
    <div className="grid grid-cols-0 md:grid-cols-2 px-10 gap-10">
      {accommodations.HotelPackage.map(HotelPackage => (
        <div key={HotelPackage.id}>
      <div className="pt-5 my-5 text-3xl border-solid border-4 border-white rounded-2xl bg-black bg-opacity-75">
              <h3 className="text-2xl font-bold">{HotelPackage.Name}</h3>
              <h3 className="text-xl">{HotelPackage.CurrentPrice}</h3>
              <hr className="border-iwred mx-10 mt-5"></hr>
              <div className="py-5 bottom-0">
              <MyButton type='External' href={HotelPackage.BuyLink}>Book Now!</MyButton>
            </div>
            </div>
      </div>
))}
    </div>
    <div className="h-[300px] mt-10">
    <iframe src={accommodations.MapiFrameEmbed}  width="100%" height="100%" loading="lazy" className="flex-initial"></iframe>
  </div>
  </div>
  </div>
  </>
  )
}


function TicketCard({Tickets}){
  return(
               <div className="flex flex-col grow content-end border-4 border-white bg-black bg-opacity-50 rounded-3xl">
              <div>
                <h3 className="font-bold py-5 text-3xl">{Tickets.Title}</h3> 
                <hr className="border-iwred mx-10"></hr>
              <ul className="list-inside  mx-10">
                {Tickets.Tickets.map(tickets => (
                  <li key={tickets.id}>
                      <div className="grid grid-cols-2 gap-2 my-3">
                        <p className="text-2xl text-left my-auto">
                          {tickets.Name}
                        </p>
                        <p className="text-2xl text-right my-auto">
                          {tickets.OriginalPrice !== null ? <span className="text-iwred px-2 strike">
                              {tickets.OriginalPrice}
                              </span> : <></>}
                          {tickets.CurrentPrice}
                        </p>
                      </div>
                    <hr className="border-iwred"></hr>
                  </li>
                ))}
              </ul>
              </div>
              <div className="py-5">
              <MyButton type={Tickets.BuyButton.NavType} href={Tickets.BuyButton.URL}>{Tickets.BuyButton.Text}</MyButton>
            </div>
            </div>
  )
}
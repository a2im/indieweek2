import Footer from '../footer'
import { MyTickets,HotelCard } from './tickets'
import InfoSegment from '../info'
    
export default async function Tickets() {
  return (
    <>
    <div className="bggradient pt-8">
          <title>Indie Week - Tickets</title>
          <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
          <MyTickets/>
          <HotelCard/>
          <InfoSegment/>
          <div className="pb-96 md:pb-40 mb-20"></div>
          <Footer/>
    </div>
    </>
  )
}

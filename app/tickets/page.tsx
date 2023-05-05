import Footer from '../footer'
import { MyTickets,HotelCard } from './tickets'
import InfoSegment from '../info'
 
export const metadata = {
  title: 'Indie Week - Tickets',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default async function Tickets() {
  return (
    <>
    <div className="bggradient pt-8">
          <MyTickets/>
          <HotelCard/>
          <InfoSegment/>
          <Footer/>
    </div>
    </>
  )
}

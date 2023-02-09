import Footer from '../footer'
import { MyTickets,HotelCard } from './tickets'
    
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
          <Footer/>
    </div>
    </>
  )
}

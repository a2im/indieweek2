import Footer from '../footer'
import MyTickets from './tickets'
import HotelCard from './hotel-card'
import WatchPastYears from '../watch-past-years'

export default function Tickets() {
  return (
    <>
    <div className="bggradient pt-8">
          <title>Indie Week - Tickets</title>
<MyTickets/>
<HotelCard/>
<WatchPastYears data2021 data2022/>
          <Footer/>
    </div>
    </>
  )
}

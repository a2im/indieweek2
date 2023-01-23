import Footer from '../footer'
import MyTickets from './tickets'
import HotelCard from './hotel-card'
import WatchPastYears from '../watch-past-years'
import MyNavbar from '../navbar'

export default function Tickets() {
  return (
    <>
    <div className="bggradient">
          <title>Indie Week - Tickets</title>
          <MyNavbar/>
<MyTickets/>
<HotelCard/>
<WatchPastYears data2021 data2022/>
          <Footer/>
    </div>
    </>
  )
}

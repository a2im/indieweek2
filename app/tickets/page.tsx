import Footer from '../footer'
import MyTickets from './tickets'
import HotelCard from './hotel-card'
import WatchPastYears from '../watch-past-years'

export default function Tickets() {
  return (
    <div className="bggradient">
          <title>Indie Week - Tickets</title>
          <div className="grow shrink content-center">
<h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
Tickets
  </h2>
  </div>
<MyTickets/>
<div className="grow shrink content-center">
<h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
Hotel Accomodations
  </h2>
  </div>
<HotelCard/>
<WatchPastYears data2021 data2022/>
          <Footer/>
    </div>
  )
}

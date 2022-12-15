import Footer from '../footer'
import MyTickets from './tickets'

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
          <Footer/>
    </div>
  )
}

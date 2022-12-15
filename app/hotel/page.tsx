import Footer from '../footer'
import HotelCard from './hotel-card'

export default function Hotels() {
  return (
    <div className="bggradient">
          <title>Indie Week - Hotels</title>
          <div className="grow shrink content-center">
<h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
  Accomodations
  </h2>
  </div>
          <HotelCard/>
          <Footer/>
    </div>
  )
}

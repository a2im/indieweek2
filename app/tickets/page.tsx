import { MyTickets,HotelCard } from '../../components/tickets'
import WatchPastYears from '../../components/watch-past-years';
import { Get2021Playlist, Get2022Playlist } from '../YTplaylists';
import Footer from '../footer'
import MyUi from '../../components/navbar'
    
export default async function Tickets() {
  const data2021 = await Get2021Playlist()
  const data2022 = await Get2022Playlist()
  return (
    <>
    <MyUi/>
    <div className="bggradient">
          <title>Indie Week - Tickets</title>
          <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
        <MyTickets/>
        <HotelCard/>
        <WatchPastYears data2021={data2021} data2022={data2022}/>
    </div>

    <Footer/>
    </>
  )
}

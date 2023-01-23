import Footer from '../footer'
import MyTickets from './tickets'
import HotelCard from './hotel-card'
import WatchPastYears from '../watch-past-years'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function Get2021Playlist (){
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PL62SJLnyvK_igjmzcMUIFgVh2sKqWeK7g&key=${process.env.YOUTUBE_API_KEY}`, { cache: 'force-cache' })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
export async function Get2022Playlist (){
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PL62SJLnyvK_iaUGE9jwQgSRcdClJeYI2a&key=${process.env.YOUTUBE_API_KEY}`, { cache: 'force-cache' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
    
export default async function Tickets() {
  const Playlist2021data = await Get2021Playlist()
  const Playlist2022data = await Get2022Playlist()
  return (
    <>
    <div className="bggradient pt-8">
          <title>Indie Week - Tickets</title>
<MyTickets/>
<HotelCard/>
<WatchPastYears data2021={Playlist2021data} data2022={Playlist2022data}/>
          <Footer/>
    </div>
    </>
  )
}

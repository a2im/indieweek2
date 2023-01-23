import { SocialFollowWhite } from '../SocialFollow'
import Footer from '../footer'
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

export default async function Program() {
  const Playlist2021data = await Get2021Playlist()
  const Playlist2022data = await Get2022Playlist()
  return (
    <div className="bggradient pt-8">
          <title>Indie Week - Program</title>
          <div className="grow shrink content-center">
<h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
Program
  </h2>
  </div>
          <div className="mx-auto mb-8 py-20"> 
            <div className='flex max-w-4xl mb-10 mx-auto gap-10 justify-center'> 
              <div className='mx-auto pb-10 p-4'>
                <h3 className="mb-6 text-center">
                  COMING SOON 
                </h3>
                <h4 className="text-center">Follow us on social media for the latest updates and subscribe
to the Libera Awards mailing list to hear first about program availability!</h4>
              <div className="max-w-lg pt-20 mx-auto">
              <SocialFollowWhite/>
              </div>
              </div>
              </div>
          </div>
          <WatchPastYears data2021={Playlist2021data} data2022={Playlist2022data}/>
          <Footer/>
    </div>
  )
}

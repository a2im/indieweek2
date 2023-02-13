import { SocialFollowWhite } from '../../components/SocialFollow'
import Footer from '../footer'
import WatchPastYears from '../../components/watch-past-years'
import { Get2021Playlist, Get2022Playlist } from '../../components/YTplaylists';
import InfoSegment from '../info';

export default async function Program() {
  const data2021 = await Get2021Playlist()
  const data2022 = await Get2022Playlist()
  return (
    <div className="bggradient pt-8">
          <title>Indie Week - Program</title>
          <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
          <div className="mx-auto mb-8 py-20"> 
            <div className='flex max-w-5xl mb-10 mx-auto gap-10 justify-center bg-black bg-opacity-75 rounded-3xl border-4 border-white'> 
              <div className='mx-auto pb-10 p-4'>
                <h3 className="mb-6 font-bold text-center">
                  COMING SOON 
                </h3>
                <hr className="border-iwred my-5 mx-5"></hr>
                <h4 className="text-center">Follow us on social media for the latest updates and subscribe
to the Indie Week mailing list to hear first about program availability!</h4>
              <div className="max-w-lg pt-20 mx-auto">
              <SocialFollowWhite/>
              </div>
              </div>
              </div>
          </div>
          <WatchPastYears data2021={data2021} data2022={data2022}/>
          <InfoSegment/>
          <Footer/>
    </div>
  )
}

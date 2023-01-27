import AboutUS from './about-us'
import Footer from '../footer'
import WatchPastYears from '../watch-past-years'
import { Get2021Playlist, Get2022Playlist } from '../YTplaylists';

export default async function About() {
  const data2021 = await Get2021Playlist()
  const data2022 = await Get2022Playlist()
  return (
    <div className="bggradient2 pt-8">
          <title>Indie Week - About Us</title>
          <AboutUS/>
          <WatchPastYears data2021={data2021} data2022={data2022}/>
          <Footer/>
    </div>
  )
}

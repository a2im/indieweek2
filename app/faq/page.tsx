import Footer from '../footer'
import WatchPastYears from '../watch-past-years'
import { Get2021Playlist, Get2022Playlist } from '../YTplaylists';

export default async function FAQ() {
  const data2021 = await Get2021Playlist()
  const data2022 = await Get2022Playlist()
  return (
    <>
          <title>Indie Week - Frequently Asked Questions</title>
          <div className="grow shrink content-center bggradient">
<h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
  FAQ
  </h2>
  <WatchPastYears data2021={data2021} data2022={data2022} />
          <Footer/>
          </div>
    </>
  )
}

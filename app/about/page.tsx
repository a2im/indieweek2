import 'server-only';
import AboutUS from './about-us'
import Footer from '../../components/footer'
import WatchPastYears from '../../components/watch-past-years'
import { getData, getHelp } from '../../lib/REST/get-data';
import HelpSection from '../../components/help-section';

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export const metadata = {
  title: 'Indie Week - About Us',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default async function About() {
  const data = await getData()
  const help = await getHelp()
  return (
    <div className="bggradient2 pt-8">
          <AboutUS/>
          {data.attributes.WatchPastYears.map(playlist => (
          <WatchPastYears key={playlist.id} data={data} playlist={playlist.PlaylistID}/>
        ))}
          <HelpSection data={data} help={help}/>
          <div className=""></div>
          <Footer/>
    </div>
  )
}
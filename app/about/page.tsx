import 'server-only';
import AboutUS from './about-us'
import Footer from '../footer'
import { getData, getHelp } from '../get-data';
import HelpSection from '../help-section';
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export default async function About() {
  const data = await getData()
  const help = await getHelp()
  return (
    <div className="bggradient2 pt-8">
      <title>Indie Week - About Us</title>
          <AboutUS/>
          <HelpSection data={data} help={help}/>
          <Footer/>
    </div>
  )
}
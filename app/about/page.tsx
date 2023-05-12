import 'server-only';
import AboutUS from './about-us'
import Footer from '../footer'
import HelpSection from '../help-section';
import { getInfo, getProgram } from '../get-data';
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export default async function About() {
  const data = await getInfo();
  const help = await getProgram();
  return (
    <div className="bggradient2 pt-8">
      <title>Indie Week - About Us</title>
          <AboutUS data={data}/>
          <HelpSection help={help.data.attributes.Help}/>
          <Footer/>
    </div>
  )
}
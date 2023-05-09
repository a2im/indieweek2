import AboutUS from './about-us'
import Footer from '../footer'
import { getData, getHelp } from '../get-data';
import HelpSection from '../help-section';
import type { Metadata } from 'next';
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export const metadata: Metadata = { 
  title: 'Indie Week - About Us',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default async function About() {
  const data = await getData()
  const help = await getHelp()
  return (
    <div className="bggradient2 pt-8">
          <AboutUS/>
          <HelpSection data={data} help={help}/>
          <div className=""></div>
          <Footer/>
    </div>
  )
}
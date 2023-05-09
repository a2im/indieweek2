import 'server-only';
import GetFAQ from './faq-categories'
import { JumpTo } from './faq-categories'
import Footer from '../footer'
import { getHelp, getData } from '../get-data'
import HelpSection from '../help-section';
import type { Metadata } from 'next';
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export const metadata: Metadata = { 
  title: 'Indie Week - FAQ',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default async function FAQ() {
  const data = await getData()
  const help = await getHelp()
  return (
    <div className="bggradient pt-8">
      <div className="">
        <JumpTo/>
        <GetFAQ Category='GENERAL'/>
        <GetFAQ Category='TICKETING'/>
        <GetFAQ Category='ACCESSIBILITY'/>
        <GetFAQ Category='ACCOMMODATIONS'/>
        <GetFAQ Category='PRESS'/>
        <HelpSection data={data} help={help}/>
        </div>
        <Footer/>
    </div>
  )
}

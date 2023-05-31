import 'server-only';
import GetFAQ from './faq-categories'
import { JumpTo } from './faq-categories'
import Footer from '../footer'
import { getProgram } from '../get-data'
import HelpSection from '../help-section';
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export default async function FAQ() {
  const help = await getProgram()
  return (
    <div className="bggradient pt-8">
      <title>Indie Week - FAQ</title>
      <div className="">
        <JumpTo/>
        <GetFAQ Category='GENERAL'/>
        <GetFAQ Category='TICKETING'/>
        <GetFAQ Category='ACCESSIBILITY'/>
        <GetFAQ Category='ACCOMMODATIONS'/>
        <GetFAQ Category='PRESS'/>
        <HelpSection help={help.data.attributes.Help}/>
        </div>
        <Footer/>
    </div>
  )
}

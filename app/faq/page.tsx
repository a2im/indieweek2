import GetFAQ from './faq-categories'
import { JumpTo } from './faq-categories'
import Footer from '../footer'
import InfoSegment from '../info'

export const metadata = {
  title: 'Indie Week - FAQ',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default function FAQ() {
  return (
    <div className="bggradient pt-8">
      <div className="">
        <JumpTo/>
        <GetFAQ Category='GENERAL'/>
        <GetFAQ Category='TICKETING'/>
        <GetFAQ Category='ACCESSIBILITY'/>
        <GetFAQ Category='ACCOMMODATIONS'/>
        <GetFAQ Category='PRESS'/>
        <InfoSegment/>
        </div>
        <Footer/>
    </div>
  )
}

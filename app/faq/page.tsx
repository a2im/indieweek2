import GetFAQ from './faq-categories'
import { JumpTo } from './faq-categories'
import Footer from '../footer'
import Head from 'next/head'

export default function FAQ() {
  return (
    <div className="bggradient pt-8">
      <Head>
      <title>Indie Week - Program</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
      </Head>
      <div className="pb-96 md:pb-20">
        <JumpTo/>
        <GetFAQ Category='GENERAL'/>
        <GetFAQ Category='TICKETING'/>
        <GetFAQ Category='ACCESSIBILITY'/>
        <GetFAQ Category='ACCOMMODATIONS'/>
        <GetFAQ Category='PRESS'/>
        </div>
        <Footer/>
    </div>
  )
}

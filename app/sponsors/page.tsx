import Link from 'next/link'
import Footer from '../footer'
import SponsorForm from './sponsor-form'

export const metadata = {
  title: 'Indie Week - Sponsors',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default function Sponsors() {
  
  return (
    <div className="bggradient pt-8">
          <SponsorForm/>
          <Footer/>
    </div>
  )
}

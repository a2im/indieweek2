import Footer from '../../components/footer'
import SponsorForm from './sponsor-form'
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export const metadata: Metadata = {  
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

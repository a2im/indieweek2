import 'server-only';
import Footer from '../footer'
import SponsorForm from './sponsor-form'
import type { Metadata } from 'next';
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'

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

import 'server-only';
import Footer from '../footer'
import SponsorForm from './sponsor-form'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export default function Sponsors() {
  
  return (
    <div className="bggradient pt-8">
      <title>Indie Week - Sponsors</title>
          <SponsorForm/>
          <Footer/>
    </div>
  )
}


import Footer from './footer'
import MyIntro from '../components/intro'
import type { Metadata } from 'next';
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export const metadata: Metadata = {
  title: 'Indie Week - Home',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default function Home() {
  return (
    <div className="bggradient2">
          <MyIntro/>
        <Footer/>
    </div>
  )
}

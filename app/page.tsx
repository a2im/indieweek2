import "server-only";
import Footer from './footer'
import MyIntro from '../components/intro'
import type { Metadata } from 'next';

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

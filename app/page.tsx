import 'server-only';
import Footer from '../components/footer'
import MyIntro from '../components/intro'

export const metadata = {
  title: 'Indie Week - Home',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default function Home() {
  return (
    <div className="bggradient2">
      <title>Indie Week - Home</title>
          <MyIntro/>
        <Footer/>
    </div>
  )
}

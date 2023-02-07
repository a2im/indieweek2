import Footer from './footer'
import MyUi from '../components/navbar'
import MyIntro from '../components/intro'

export default function Home() {
  return (
    <>
    <MyUi/>
    <div className="bggradient2">
      <title>Indie Week - Home</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
          <MyIntro/>
    </div>
    </>
  )
}

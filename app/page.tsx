import Footer from './footer'
import MyIntro from './intro'

export default function Home() {
  return (
    <div className="bggradient2">
      <title>Indie Week - Home</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
          <MyIntro/>
        <Footer/>
    </div>
  )
}

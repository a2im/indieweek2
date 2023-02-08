import Footer from './footer'
import MyUi from '../components/navbar'
import MyIntro from '../components/intro'
import LoginButton from '../components/login-btn'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
    <pre>{JSON.stringify(session, null, 2)}</pre>
          <MyUi/>
    <div className="bggradient2 relative">
      <title>Indie Week - Home</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
          <MyIntro/>
          <div className="py-96">
          <LoginButton/></div>
          <Footer/>
    </div>
    </>
  )
}

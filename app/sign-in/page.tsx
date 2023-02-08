import Signin from "./signin"
import Footer from '../footer'
import MyUi from '../../components/navbar'

export default function SignIn() {
  return (
    <>
    <MyUi/>
    <div className="bggradient pt-8">
          <title>Indie Week - Program</title>
          <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
          <div className="mx-auto mb-8 py-20"> 
      <div className=" pt-32 mx-auto pb-64">
        <Signin/>
      </div>
      </div>
      </div>

          <Footer/>
    </>
  )
}
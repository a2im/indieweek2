import Footer from './footer'
import MyIntro from '../components/intro'
import MyNavbar from '../components/nav'
import LoginButton from '../components/login'
import ModalInfo from '../components/modal-info'
import MyModal from '../components/modal'

export default async function Home() {

  return (
    <>
    <MyNavbar><LoginButton/></MyNavbar>
    <MyModal><ModalInfo/></MyModal>
    <div className="bggradient2 relative">
      <title>Indie Week - Home</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
          <MyIntro/>
          <Footer/>
    </div>
    </>
  )
}

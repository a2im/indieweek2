import GetFAQ from '../../components/faq-categories'
import { JumpTo } from '../../components/faq-categories'
import Footer from '../footer'
import MyNavbar from '../../components/nav'
import LoginButton from '../../components/login'
import ModalInfo from '../../components/modal-info'
import MyModal from '../../components/modal'

export default function FAQ() {
  return (
    <>
        <MyNavbar><LoginButton/></MyNavbar>
    <MyModal><ModalInfo/></MyModal>
    <div className="bggradient pt-8">
      <title>Indie Week - Program</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
      <div className="pb-96 md:pb-64">
        <JumpTo/>
        <GetFAQ Category='GENERAL'/>
        <GetFAQ Category='TICKETING'/>
        <GetFAQ Category='ACCESSIBILITY'/>
        <GetFAQ Category='ACCOMMODATIONS'/>
        <GetFAQ Category='PRESS'/>
        </div>
    </div>

    <Footer/>
    </>
  )
}

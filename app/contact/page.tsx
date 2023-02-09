import Footer from '../footer'
import MyNavbar from '../../components/nav'
import LoginButton from '../../components/login'
import ModalInfo from '../../components/modal-info'
import MyModal from '../../components/modal'
import ContactForm from './form'

export default function Contact() {
  return (
    <>
        <MyNavbar><LoginButton/></MyNavbar>
    <MyModal><ModalInfo/></MyModal>
    <div className="bggradient pt-8">
          <title>Indie Week - Contact Us</title>
          <div className="grow shrink content-center">
<h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
  Contact
  </h2>
  </div>
  <ContactForm/>
    </div>
    <Footer/>
    </>
  )
}

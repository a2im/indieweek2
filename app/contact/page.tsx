import 'server-only';
import Footer from '../footer';
import ContactForm from "./contact-form";
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export default function Contact() {
  
  return (
    <div className="bggradient pt-8">
      <title>Indie Week - Contact Us</title>
          <div className="grow shrink content-center">
<h2 className="pt-20 grow font-bold align-middle text-center leading-tight">
  Contact
  </h2>
  </div>
          <ContactForm/>
      <Footer/>
    </div>
  )
}

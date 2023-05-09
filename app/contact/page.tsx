import "server-only";
import Footer from '../footer';
import ContactForm from "./contact-form";
import type { Metadata } from 'next';
export const dynamic = 'auto'
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const metadata: Metadata = { 
  title: 'Indie Week - Contact Us',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default function Contact() {
  
  return (
    <div className="bggradient pt-8">
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

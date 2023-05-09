import 'server-only';
import Footer from '../footer'
import { MyTickets,HotelCard } from './tickets'
import { getData,getHelp } from '../get-data'
import HelpSection from '../help-section';
import type { Metadata } from 'next';
export const dynamic = 'auto'
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'

  export const metadata: Metadata = {
  title: 'Indie Week - Tickets',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default async function Tickets() {
  const data = await getData();
  const help = await getHelp();
  return (
    <>
    <div className="bggradient pt-8">
          <MyTickets/>
          <HotelCard/>
          <HelpSection data={data} help={help}/>
          <Footer/>
    </div>
    </>
  )
}
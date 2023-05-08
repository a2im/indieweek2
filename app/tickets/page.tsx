import 'server-only';
import Footer from '../../components/footer'
import { MyTickets,HotelCard } from './tickets'
import MyButton from '../../components/button';
import { getData,getHelp } from '../get-data'
import HelpSection from '../../components/help-section';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

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
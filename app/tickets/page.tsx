import 'server-only';
import Footer from '../footer'
import { MyTickets,HotelCard } from './tickets'
import { getData,getHelp } from '../get-data'
import HelpSection from '../help-section';
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export default async function Tickets() {
  const data = await getData();
  const help = await getHelp();
  return (
    <>
    <div className="bggradient pt-8">
      <title>Indie Week - Tickets</title>
          <MyTickets/>
          <HotelCard/>
          <HelpSection data={data} help={help}/>
          <Footer/>
    </div>
    </>
  )
}
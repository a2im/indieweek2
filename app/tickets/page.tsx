import 'server-only';
import Footer from '../footer'
import { MyTickets,Accommodations } from './tickets'
import { getProgram, getTickets } from '../get-data'
import HelpSection from '../help-section';
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export default async function Tickets() {
  const help = await getProgram();
  const data = await getTickets();
  return (
    <>
    <div className="bggradient pt-8">
      <title>Indie Week - Tickets</title>
          <MyTickets data={data}/>
          <Accommodations accommodations={data.data.attributes.Accommodation}/>
          <HelpSection help={help.data.attributes.Help}/>
          <Footer/>
    </div>
    </>
  )
}
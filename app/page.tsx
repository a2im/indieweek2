import 'server-only';
import Footer from './footer'
import HomeInfo from '../components/intro'
import { getHome } from './get-data';
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export default async function Home() {
  const data = await getHome();
  return (
    <div className="bggradient2">
      <title>Indie Week - Home</title>
          <HomeInfo data={data}/>
        <Footer/>
    </div>
  )
}

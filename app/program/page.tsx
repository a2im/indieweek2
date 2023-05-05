import { SocialFollowWhite } from '../../components/SocialFollow'
import Footer from '../footer'
import WatchPastYears from '../../components/watch-past-years'
import { Get2021Playlist, Get2022Playlist } from '../../components/YTplaylists';
import InfoSegment from '../info';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Indie Week - Program',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default async function Program() {
  const data2021 = await Get2021Playlist()
  const data2022 = await Get2022Playlist()
  return (
    <>
    <div className="bggradient pt-8">
                     <div className="max-w-5xl mx-auto">
    <div className="z-10 flex flex-col md:flex-row md:mt-10 items-center md:justify-around mx-autop-8">
      <div className="relative gap-10 items-center max-w-xl py-8 px-5">
              <h3 className="font-bold text-3xl md:text-5xl mx-auto"> Introducing the A2IM Indie Week CLE series</h3>
              <hr className="border-black my-5"></hr>
              <h4 className="my-5">
              This year we are proud to host the A2IM Indie Week 2023 Continuing Legal Education series, Presented by <span className="hover:scale-105"><Link href="https://www.covey.law/">CoveyLaw</Link></span>. Indie Week badge holders are welcome to join the 3 workshops, all of which grant credits.</h4>
            </div>
            <div className="md:m-20 m-10 px-10 relative">
              <Link href="https://www.covey.law/">
              <Image
                className="hover:scale-105 mx-auto"
                src="/logos/coveylaw logo-01.png"
                alt='crowne-plaza'
                width={361}
                height={434}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" ></Image>
              </Link>
              </div>
          </div>
        </div>
            <div className='flex max-w-5xl mb-10 mx-auto gap-10 justify-center bg-black bg-opacity-75 rounded-3xl border-4 border-white'> 
              <div className='mx-auto pb-10 p-4'>
                <h3 className="mb-6 font-bold text-center">
                  2023 PROGRAM COMING SOON 
                </h3>
                <hr className="border-iwred my-5 mx-5"></hr>
                <h4 className="text-center">Follow us on social media for the latest updates and subscribe
to the Indie Week mailing list to hear first about program availability!</h4>
              <div className="max-w-lg pt-20 mx-auto">
              <SocialFollowWhite/>
              </div>
              </div>
              </div>
          </div>
          <WatchPastYears data2021={data2021} data2022={data2022}/>
          <InfoSegment/>
          <Footer/>
    </>
  )
}

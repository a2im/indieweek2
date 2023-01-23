import { SocialFollowWhite } from '../SocialFollow'
import Footer from '../footer'
import WatchPastYears from '../watch-past-years'

export default function Sponsors() {
  return (
    <div className="bggradient pt-8">
          <title>Indie Week - Sponsors</title>
          <div className="mx-auto mb-8 py-20"> 
            <div className='flex max-w-4xl mb-10 mx-auto gap-10 justify-center'> 
              <div className='mx-auto pb-10 p-4'>
                <h3 className="mb-6 text-center">
                  COMING SOON 
                </h3>
                <h4 className="text-center">Follow us on social media for the latest updates and subscribe
to the Libera Awards mailing list to hear first about sponsors!</h4>
              <div className="max-w-lg pt-20 mx-auto">
              <SocialFollowWhite/>
              </div>
              </div>
              </div>
          </div>
          <WatchPastYears data2021 data2022/>
          <Footer/>
    </div>
  )
}

import Socials from '../../components/socials'
import Footer from '../../components/footer'
import WatchPastYears from '../../components/watch-past-years'
import HelpSection from '../../components/help-section';
import Image from 'next/image';
import { getData, getHelp, getPlaylist} from '../../lib/REST/get-data';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'


export const metadata = {
  title: 'Indie Week - Program',
  description: 'Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States.',
}

export default async function Program() {
  const dataData = await getData()
  const helpData = await getHelp()
  const [data, help] = await Promise.all([dataData, helpData]);
  return (
    <>
    <div className="bggradient pt-8">
      <div className="max-w-5xl mx-auto">
        <div className="z-10 flex md:mt-10 items-center mx-auto p-8">
          {data?.data.attributes?.Info?.map(Info => (
            <div key={Info.id} className="mx-auto justify-center grid grid-cols-0 md:grid-cols-2 relative items-center gap-10 py-8 px-5">
            <div>
              <h3 className="font-bold text-3xl md:text-5xl mx-auto"> {Info.Title}</h3>
              <hr className="border-black my-5"></hr>
              <h4 className="my-5">
              {Info.Text}</h4>
              </div>
            <div className="w-64 h-64 relative justify-center mx-auto">
              <Image
                className="hover:scale-105 mx-auto"
                src={Info.Image.data.attributes.url}
                alt={Info.Image.data.attributes.alternativeText}
                width={Info.Image.data.attributes.width}
                height={Info.Image.data.attributes.height}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" >
              </Image>
              </div>
          
          </div>
      ))}
      
      </div>
        </div>
            <div className='flex max-w-5xl mb-10 mx-auto gap-10 justify-center bg-black bg-opacity-75 rounded-3xl border-4 border-white'> 
              <div className='mx-auto pb-10 p-4'>
              <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>{data.data.attributes.Program}</ReactMarkdown>
              <div className="max-w-lg pt-20 mx-auto">
              <Socials color='white'/>
              </div>
              </div>
              </div>
          </div>
        <div id="past-years" className="p-10 rounded-3xl bg-black bg-opacity-75 border-4 border-white mx-auto max-w-5xl pb-20">
        <h3 className="font-bold mb-5">Watch Past Years</h3>
        
        
        


          </div>
          <HelpSection data={data} help={help}/>
          <Footer/>
    </>
  )
}
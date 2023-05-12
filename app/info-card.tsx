import Image from "next/image";
import IWButton from "./button";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function InfoCard({Info}) {

  if (Info.Type === "A") 
  return (    <div className="max-w-5xl mx-auto">
  <div className="grid grid-cols-0 md:grid-cols-2 md:mt-10 items-center md:justify-around mx-auto gap-10 p-5">
    <div className="py-8 flex-initial relative items-center max-w-xl order-last md:order-first">
      <h2>{Info.Title}</h2>
      <hr className="border-iwred my-5"></hr>
      <h4 className="my-5"><ReactMarkdown className="paragraph line-break" remarkPlugins={[remarkGfm, remarkBreaks]}>{Info.Text}</ReactMarkdown></h4>
        <InfoButton Button={Info.Button}/>
    </div>
    <div className="image-cropper m-7">
    <Image
        src={Info.Image.data.attributes.url} 
        alt={Info.Image.data.attributes.alternativeText}
        width={Info.Image.data.attributes.width}
        height={Info.Image.data.attributes.height}
        sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
        />
    </div>
  </div>
</div>
  );
  else if (Info.Type === "B")
  return (
    <div className="max-w-5xl mx-auto z-40">
    <div className="grid grid-cols-0 md:grid-cols-2 md:mt-10 items-center md:justify-around mx-auto gap-10 p-5">
          <div className="image-cropper m-7">
          <Image className="roundedimage" 
              src={Info.Image.data.attributes.url} 
              alt={Info.Image.data.attributes.alternativeText}
              width={Info.Image.data.attributes.width}
              height={Info.Image.data.attributes.height}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"/>
          </div>
          <div className="py-8 relative max-w-xl text-right">
            <h3>{Info.Title}</h3>
              <hr className="border-iwred my-5"></hr>
            <h4 className="my-5">{Info.Text}</h4>
              <InfoButton Button={Info.Button}/>
          </div>
      </div>
    </div>
  );
  else return (
    <div className='p-8 mx-auto'>
    <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
      <h3>
      {Info.Title}
      </h3>
      <hr className="mt-3 mb-8 Hrswap"></hr>
      <div className="grid grid-cols-0 md:grid-cols-2 mx-auto justify-center gap-3">
        <div className="flex flex-col justify-between max-w-sm">
        <ReactMarkdown className="paragraph line-break " remarkPlugins={[remarkGfm, remarkBreaks]}>{Info.Text}</ReactMarkdown>
          <div className="shrink p-8">
          <InfoButton Button={Info.Button}/>
          </div>
        </div>
        <div className="relative mx-auto rounded-lg overflow-hidden">
        <Image
            src={Info.Image.data.attributes.url} 
            alt={Info.Image.data.attributes.alternativeText}
            width={Info.Image.data.attributes.width}
            height={Info.Image.data.attributes.height}
            />
          </div>
      </div>
      </div>
    </div>
  );
}


export function InfoButton({Button}){
  if (Button == null) return (<></>);
  else return (
            <IWButton 
            href={Button.URL} 
            type={Button.NavType}
            >
              {Button.Text}
              </IWButton>
  )
}




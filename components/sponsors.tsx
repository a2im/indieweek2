'use client';

import { GET_ALL_SPONSORS } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link";
import Image from "next/image";

export function SponsorTitle() {
  const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
    variables: {
      Level: "Title Sponsor", 
      Title: "2023 Indie Week"
    }});
    if (loading) return <div className="animate-pulse h-[300px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
    if (error) return <p>Error</p>
  return (
      <div className="max-w-xl relative py-5 flex mx-auto justify-evenly gap-10">
      {/* Map through the data */}
      {data?.sponsors.data.map(sponsors => (
              <div key={sponsors.id} className="flex relative hover:scale-105 justify-evenly">
                <Link href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[300px] h-[200px] mx-auto justify-evenly">
                <Image 
                  src={sponsors.attributes.Logo.data.attributes.url}
                  fill={true}
                  alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                  style={{ objectFit: 'contain'}}
                  sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                  />
                  </div>
                  </Link>
              </div>
            )
          )}
      </div>
  );
}

export function SponsorTier1() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 1", 
        Title: "2023 Indie Week"
      }});
      if (loading) return <div className="grid grid-cols-2">
                              <div className="animate-pulse h-[200px] w-[200px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
                              <div className="animate-pulse h-[200px] w-[200px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
                              </div>
      if (error) return <p>Error</p>
    return (
        <div className="max-w-4xl relative py-3 grid grid-cols-0 md:grid-cols-2 mx-auto justify-evenly gap-10 px-10">
        {/* Map through the data */}
        {data?.sponsors.data.map(sponsors => (
                <div key={sponsors.id} className="flex relative hover:scale-105 justify-evenly">
                  <Link href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-[200px] h-[200px] mx-auto justify-evenly">
                  <Image 
                    src={sponsors.attributes.Logo.data.attributes.url}
                    fill={true}
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                    style={{ objectFit: 'contain', position: 'absolute'}}
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                    />
                    </div>
                    </Link>
                </div>
              )
            )}
        </div>
    );
}

export function SponsorTier2() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 2", 
        Title: "2023 Indie Week"
      }});
      if (loading) return <div className="grid grid-cols-3">
      <div className="animate-pulse h-[150px] w-[150px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
      <div className="animate-pulse h-[150px] w-[150px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
      <div className="animate-pulse h-[150px] w-[150px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
      </div>
      if (error) return <p>Error</p>
    return (
        <div className="max-w-4xl relative flex flex-col md:flex-row flex-wrap mx-auto gap-16 px-10">
        {/* Map through the data */}
        {data.sponsors.data.map(sponsors => (
                <div key={sponsors.id} className="flex relative hover:scale-105 p-4 grow shrink mx-auto ">
                  <Link className="relative" href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[175px] h-[175px] mx-auto justify-evenly">
                  <Image
                    src={sponsors.attributes.Logo.data.attributes.url}
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText}
                    fill={true}
                    style={{ objectFit: 'contain', position: 'absolute'}}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
              </div>
                    </Link>
                </div>
              )
            )}
        </div>
    );
}

export function SponsorTier3() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 3", 
        Title: "2023 Indie Week"
      }});
      if (loading) return <div className="grid grid-cols-4">
      <div className="animate-pulse h-[150px] w-[150px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
      <div className="animate-pulse h-[150px] w-[150px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
      <div className="animate-pulse h-[150px] w-[150px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
      <div className="animate-pulse h-[150px] w-[150px] bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto my-5"></div>
      </div>
      if (error) return <p>Error</p>
    return (
        <div className="relative pb-20 py-5 flex flex-col md:flex-row flex-wrap gap-16 mx-auto px-10">
        {/* Map through the data */}
        {data?.sponsors?.data.map(sponsors => (
                <div key={sponsors.id} className="mx-auto relative hover:scale-105 w-[128px] h-[128px]">
                  <Link className="relative" href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[128px] h-[128px] mx-auto justify-evenly">
                  <Image
                    src={sponsors.attributes.Logo.data.attributes.url}
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                    fill={true}
                    style={{ objectFit: 'contain'}}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" 
                    />
                    </div>
                    </Link>
                </div>
              )
            )}
        </div>
    );
}

export default function SponsorFooter () {
  return (
    <div className="relative py-20 z-30">
    <div className="flex flex-col max-w-4xl mx-auto bg-black bg-opacity-75 shadow-2xl rounded-2xl border-4">
    <h4 className="font-bold text-5xl uppercase p-5">Our Sponsors</h4>
      <hr className="m-3 border-iwred mx-3"></hr>
        <SponsorTitle/>
        <SponsorTier1/>
        <SponsorTier2/>
        <SponsorTier3/>
    </div>
    </div>
  )
}
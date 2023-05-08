'use client';

import React from 'react';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 728 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 728, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

export default function Playlist({playlist, year}){
    return (
        <>
        <h3 className="text-4xl font-bold animate-pulse">{year}</h3>
        <hr className="border-iwred mb-5 max-w-64"></hr>
            <div className="pb-10">
            <Carousel responsive={responsive}>
                {playlist?.items?.map(({ id, snippet }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
                return (
                <div key={id} className="border-solid border-white border-3 rounded-2xl hover:scale-[1.01] px-3">
                    <Link href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                        <Image src={medium?.url} width={medium?.width} height={medium?.height} alt={`thumbnail image for ${title}`}/>
                        <h3 className="text-lg">{title}</h3>
                        </Link>    
                </div>
                )
            })}
            </Carousel>
            </div>

        </>
    )
}


export function WatchPastYears ({MyPlaylists}){

  return (
    <div className="flex flex-col">
            {MyPlaylists?.map((i) => (
              <div key={i.id}>
            <Playlist playlist={i.Data} year={i.Year}/>
              </div>
            ))}
            </div>
  )
}
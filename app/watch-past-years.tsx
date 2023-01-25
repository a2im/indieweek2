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

export default function WatchPastYears({data2022, data2021}){
    return (
        <>
        <div className="max-w-6xl mx-auto">
        <h2 className="text-center pt-10 py-5">Watch Past Years</h2>
        <h3 className="text-2xl font-bold">2022</h3>
            <hr className="border-iwred my-5"></hr>
            <div className="pb-10">
            <Carousel responsive={responsive}>
                {data2022?.items?.map(({ id, snippet }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
                return (
                <div key={id} className="border-solid border-white border-3 rounded-2xl hover:scale-105">
                    <Link href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                        <Image width={medium.width} height={medium.height} src={medium.url} alt="">
                        </Image>
                        <h3 className="text-lg">{title}</h3>
                        </Link>    
                </div>
                )
            })}
            </Carousel>
            </div>
        <h3 className="text-2xl font-bold">2021</h3>
        <hr className="border-iwred my-5"></hr>
        <div className="pb-10">
            <Carousel responsive={responsive}>
                {data2021?.items?.map(({ id, snippet }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
                return (
                <div key={id} className="border-solid border-white border-3 rounded-2xl hover:scale-105">
                    <Link href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                        <Image width={medium.width} height={medium.height} src={medium.url} alt="">
                        </Image>
                        <h3 className="text-lg">{title}</h3>
                        </Link>    
                </div>
                )
            })}
            </Carousel>
            </div>
            
        </div>
        </>
    )
}



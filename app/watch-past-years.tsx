'use client';

import React from 'react';
import Image from 'next/image';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export default function WatchPastYears({ data2021, data2022 }){
    return (
        <>
        <div className="max-w-6xl mx-auto">
        <h2 className="text-center py-5">Watch Past Years</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <ul>
                {data2021?.data?.items?.map(({ id, snippet}) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
                return (
                <li key={id} className="w-32">
                    <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                    <p>
                        <Image width={medium.width} height={medium.height} src={medium.url} alt="" />
                    </p>
                    <h3>{ title }</h3>
                    </a>
                </li>
                )
            })}
            </ul>
            <ul>
                {data2022?.data?.items?.map(({ id, snippet }) => {
            const { title, thumbnails = {}, resourceId = {} } = snippet;
            const { medium } = thumbnails;
                return (
                <li key={id} className="w-32">
                    <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                    <p>
                        <Image width={medium.width} height={medium.height} src={medium.url} alt="" />
                    </p>
                    <h3>{ title }</h3>
                    </a>
                </li>
                )
            })}
            </ul>
            </div>
        </div>
        </>
    )
}

export async function Get2021Playlist (){
const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=[PL62SJLnyvK_igjmzcMUIFgVh2sKqWeK7g]&key=${process.env.YOUTUBE_API_KEY}`, {credentials: 'omit'})
  const data2021 = await res.json();
  return {
    props: {
      data2021
    }
  }
}

export async function Get2022Playlist (){
const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=[PL62SJLnyvK_iaUGE9jwQgSRcdClJeYI2a]&key=${process.env.YOUTUBE_API_KEY}`, {credentials: 'omit'})
    const data2022 = await res.json();
    return {
    props: {
        data2022
    }
    }
}
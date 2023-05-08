const YT = process.env.YOUTUBE_API_KEY

export async function getPlaylist (PlaylistID){
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=7&playlistId=${PlaylistID}&key=${YT}`, { next: { revalidate: 60 } })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch playlist');
    }
    return res.json();
  }


export async function getData (){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/IW-Program?populate[0]=Info.Image&populate[1]=Info.Button&populate[2]=Help.Button&populate[3]=WatchPastYears&populate[4]=isActive&populate[5]=ad`, { next: { revalidate: 60 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
} 

export async function getHelp (){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/IW-Program?populate[0]=Help.Button`, { next: { revalidate: 60 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch help');
  }
  return res.json();
} 
import 'server-only';
const YT = process.env.YOUTUBE_API_KEY

export async function getPlaylist (PlaylistID){
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=7&playlistId=${PlaylistID}&key=${YT}`, { next: { revalidate: 60 } })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch playlist');
    }
    return res.json();
  }


export async function getProgram (){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/IW-Program?populate[0]=Info.Image&populate[1]=Info.Button&populate[2]=Help.Button&populate[3]=WatchPastYears&populate[4]=isActive&populate[5]=ad`, { next: { revalidate: 60 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch program');
  }
  return res.json();
} 

export async function getHome (){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/IW-Home?populate[0]=Header.Button&populate[1]=Header.Image&populate[2]=Info.Image&populate[3]=Info.Button`, { next: { revalidate: 60 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Home');
  }
  return res.json();
} 

export async function getInfo (){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/IW-Info?populate[0]=TopInfo.Button&populate[1]=TopInfo.Image&populate[2]=Info.Image&populate[3]=Info.Button&populate[4]=Disclaimer&populate[5]=WatchPastYears`, { next: { revalidate: 60 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Info');
  }
  return res.json();
} 

export async function getTickets (){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/IW-Attend?populate[0]=Info.Button&populate[1]=Info.Image&populate[2]=Tickets.BuyButton&populate[3]=Tickets.Tickets&populate[4]=Accommodation.Image&populate[5]=Accommodation.HotelPackage&populate[6]=Help.Button`, { next: { revalidate: 60 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Tickets');
  }
  return res.json();
} 
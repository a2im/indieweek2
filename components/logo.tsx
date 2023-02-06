import Image from "next/image"
export default function Logo(){
    return (
        <Image
        height={496}
        width={1747}
        src="/logos/Indie Week 23.png"
        alt="Indie Week Logo"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    )
}
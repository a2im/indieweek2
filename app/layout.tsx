import './globals.css'
import Script from 'next/script';
import MyHead from './head';
import MyModal from "../components/modal"
import { Providers } from '../components/providers';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import MyNavbar from '../components/navbar';
config.autoAddCss = false
library.add(fas)

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) { 
  
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <head>
        <MyHead></MyHead>
        </head>
      <body className="min-h-screen bg-iwtexture">
      
      <Providers> 
        <MyNavbar/>
        {children}
      <MyModal />
      </Providers>
      </body>
    </html>
  )
}

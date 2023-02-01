import './globals.css'
import MyModal from "./modal"
import { Providers } from './providers';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import MyNavbar from './navbar';
config.autoAddCss = false
library.add(fas)

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) { 
  
  return (
    <html lang="en">
      <head/>
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

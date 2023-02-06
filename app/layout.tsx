import 'server-only'

import './globals.css'
import MyModal from "../components/modal"
import { Providers } from '../components/providers';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import MyNavbar from '../components/navbar';
config.autoAddCss = false
library.add(fas)

// do not cache this layout
export const revalidate = 0

export default async function RootLayout({ children }: { children: React.ReactNode }) { 

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

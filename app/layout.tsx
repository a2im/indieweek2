import './globals.css'
import Script from 'next/script';
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
<link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon-light.png"
        media="(prefers-color-scheme: light)"
      />
            <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon-dark.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/A2IM-button-32x32-light.png"
        media="(prefers-color-scheme: light)"
      />
            <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/A2IM-button-32x32-dark.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/A2IM-button-16x16-light.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/A2IM-button-16x16-dark.png"
        media="(prefers-color-scheme: dark)"
      />
      <link 
        rel="icon" 
        href="/favicon/a2im-favicon-dark.ico" 
        media="(prefers-color-scheme: dark)"
        />
        <link 
        rel="icon" 
        href="/favicon/a2im-favicon-light.ico" 
        media="(prefers-color-scheme: light)"
        />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <body className="min-h-screen bg-iwtexture">
      <Script 
      id="google-analytics" 
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `
      }}></Script>
      <Providers> 
        <MyNavbar/>
        {children}
      <MyModal />
      </Providers>
      </body>
    </html>
  )
}

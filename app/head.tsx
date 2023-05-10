import { HOME_OG_IMAGE_URL } from '../lib/constants'
import Script from 'next/script'

export default function MyHead() {
  return (
    <head>
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
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      <Script
        id="google-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
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
</head>
  )
}

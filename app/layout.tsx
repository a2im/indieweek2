import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { MyApolloProvider } from '../components/apollo-provider';
import AuthContext from '../components/next-auth-provider';

config.autoAddCss = false
library.add(fas)

export const runtime = 'nodejs'

export default async function RootLayout({ children }: { children: React.ReactNode }, pageProps: { session }) { 
  return (
    <html lang="en">
      <head/>
      <body className="min-h-screen bg-iwtexture">
        <AuthContext>
            <MyApolloProvider> 
              {children}
            </MyApolloProvider>
          </AuthContext>
      </body>
    </html>
  )
}


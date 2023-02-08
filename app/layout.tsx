import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { MyApolloProvider } from '../components/apollo-provider';
import AuthProvider from '../components/next-auth-provider';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"

config.autoAddCss = false
library.add(fas)

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) { 
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <head/>
      <body className="min-h-screen bg-iwtexture">
        <AuthProvider session={session}>
            <MyApolloProvider> 
              {children}
            </MyApolloProvider>
          </AuthProvider>
      </body>
    </html>
  )
}

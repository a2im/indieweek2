import "server-only";

import './globals.css';
import SupabaseListener from '../components/supabase-listener';
import SupabaseProvider from '../components/supabase-provider';
import { createClient } from '../utils/supabase-server'
import { MyApolloProvider } from '../components/apollo-provider';
import { config } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false
library.add(fas)

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) { 
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <html lang="en">
      <head/>
      <body className="min-h-screen bg-iwtexture">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
            <MyApolloProvider> 
              {children}
            </MyApolloProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}

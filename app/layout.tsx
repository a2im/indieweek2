import 'server-only'

import './globals.css'
import SupabaseListener from '../components/supabase-listener';
import SupabaseProvider from '../components/supabase-provider';
import MyModal from "../components/modal"
import { MyApolloProvider } from '../components/apollo-provider';
import { createServerClient } from '../utils/supabase-server';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { Database } from '../lib/database.types';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
config.autoAddCss = false
library.add(fas)

export type TypedSupabaseClient = SupabaseClient<Database>;

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) { 
  
  const supabase = createServerClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head/>
      <body className="min-h-screen bg-iwtexture">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
            <MyApolloProvider> 
              {children}
            </MyApolloProvider>
            <MyModal />
        </SupabaseProvider>
      </body>
    </html>
  )
}

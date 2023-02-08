import "server-only";

import './globals.css';
import type { Session } from '@supabase/auth-helpers-nextjs';
import { config } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SupabaseListener from '../components/supabase-listener';
import SupabaseProvider from '../components/supabase-provider';
import { MyApolloProvider } from '../components/apollo-provider';

config.autoAddCss = false
library.add(fas)
type MaybeSession = Session | null;
export const revalidate = 0;

export default async function RootLayout({ children, session }: { children: React.ReactNode, session: MaybeSession;}) { 

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

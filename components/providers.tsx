'use client';

import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink} from "@apollo/client"
import { createContext, useContext, useState } from 'react'
import { createClient } from '../utils/supabase-browser'
import { MyUserContextProvider } from "../utils/useUser";
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../lib/database.types'

type SupabaseContext = {
  supabase: SupabaseClient<Database>
}
const Context = createContext<SupabaseContext | undefined>(undefined)
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_A2IMCMS_API_GQL_URL}`
});
const client = new ApolloClient({
  cache,
  link
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient())
  return (
    <Context.Provider value={{ supabase }}>
      <MyUserContextProvider>
    <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
        </MyUserContextProvider>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  } else {
    return context;
  }
}
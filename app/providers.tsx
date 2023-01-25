'use client';

import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink} from "@apollo/client"
import { SessionProvider } from "next-auth/react"


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_A2IMCMS_API_GQL_URL}`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;

export function Providers({ children, pageProps: {session} }) {
  return (
    <SessionProvider session={session}>
    <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
        </SessionProvider>
  );
}
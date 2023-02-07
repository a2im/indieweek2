'use client';

import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink} from "@apollo/client"

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_A2IMCMS_API_GQL_URL}`
});
const client = new ApolloClient({
  cache,
  link
});

export function MyApolloProvider({ children }: { children: React.ReactNode }) {

  return (
    <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
  );
}

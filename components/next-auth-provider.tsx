"use client";

import { SessionProvider } from "next-auth/react";

export interface AuthContextProps {
  children: React.ReactNode;
}

export default function AuthContext({ children }: AuthContextProps, pageProps: { session }) {
  return <SessionProvider session={pageProps.session}>{children}</SessionProvider>;
}
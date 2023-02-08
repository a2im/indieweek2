import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
providers: [
  AzureADProvider({
    clientId: process.env.AZURE_AD_CLIENT_ID,
    clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
    tenantId: process.env.AZURE_AD_TENANT_ID,
  }),
],
}
export default NextAuth(authOptions)
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
callbacks: {
  async redirect({ url, baseUrl }) {
    // Allows relative callback URLs
    if (url.startsWith("/")) return `${baseUrl}${url}`
    // Allows callback URLs on the same origin
    else if (new URL(url).origin === baseUrl) return url
    return baseUrl
  },
  async session({ session, token }) {
    // Send properties to the client, like an access_token and user id from a provider.
    session.accessToken = token.accessToken
    session.user.id = token.id
    
    return session
  },
  async jwt({ token, account, profile }) {
    // Persist the OAuth access_token and or the user id to the token right after signin
    if (account) {
      token.accessToken = account.access_token
      token.id = profile.id
    }
    return token
  },
}
}
export default NextAuth(authOptions)
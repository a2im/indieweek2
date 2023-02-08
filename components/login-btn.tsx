'use client';
import { useSession, signIn, signOut } from "next-auth/react"
export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <div className="mx-auto max-w-md">
        Signed in as {session.user.email} <br />
        <button className="text-black bg-white px-4 py-1 rounded-md" onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    )
  }
  return (
    <>
    <div className="mx-auto max-w-md">
      Not signed in <br />
      <button className="text-black bg-white px-4 py-1 rounded-md" onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  )
}
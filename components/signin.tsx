'use client';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { getURL } from '../utils/helpers';
import { useUser } from '../utils/useUser';

const SignIn = () => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [data, setData] = useState()

  useEffect(() => {
    async function loadData() {
      const data  = await supabaseClient
      setData(data)
    }
    // Only run query once user is logged in.
    if (user) loadData()
  })

  if (!user)
    return (
      <div className="mx-auto max-w-md pt-32">
      <Auth
        redirectTo={getURL()}
        magicLink={true}
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
        providers={['google', 'github']}
        socialLayout="horizontal"
      />
      </div>
    )

  return (
    <div className="mx-auto max-w-md pt-32">
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default SignIn
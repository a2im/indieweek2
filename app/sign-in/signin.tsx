'use client';
import { useSupabase } from '../../components/supabase-provider'
import { Auth } from '@supabase/auth-ui-react'
import { customTheme } from './theme'
import { useRouter } from 'next/navigation'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

export function Signin() {
  const router = useRouter()
  const { supabase, session } = useSupabase();
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [data, setData] = useState(null)

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from('public').select('*')
      setData(data)
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [user])

  if (!user)
  return (
    <div className="mx-auto max-w-md py-64">
    <Auth
    supabaseClient={supabase}
    appearance={{ theme: customTheme }}
    theme="dark"
  /></div>
  )
  return(
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default Signin
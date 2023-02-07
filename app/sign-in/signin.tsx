'use client'
import { useSupabase } from '../../components/supabase-provider'
import {
  Auth,
  // Import predefined theme
} from '@supabase/auth-ui-react'
import { customTheme } from './theme'
import { useRouter } from 'next/navigation'

export default function Signin() {
  const router = useRouter()
  const { supabase, session } = useSupabase()

  return session ? (router.push('/')
  ) : (
    <div className="mx-auto max-w-md p-5 shadow-lg rounded-md">
    <Auth
    supabaseClient={supabase}
    appearance={{ theme: customTheme }}
    theme="dark"
  />
  </div>
  )
};
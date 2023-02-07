import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../lib/database.types'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const createClient = () => createBrowserSupabaseClient<Database>({ supabaseUrl,
  supabaseKey,});
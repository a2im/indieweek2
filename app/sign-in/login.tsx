'use client';

import { useSupabase } from '../../components/supabase-provider';
import Link from 'next/link';
// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase, session } = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };
  // this `session` is from the root loader - server-side
  // therefore, it can safely be used to conditionally render
  // SSR pages without issues with hydration
  return session ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (
    <>
      <button>
        <Link href="/sign-in">Login</Link>
        </button>
    </>
  );
}
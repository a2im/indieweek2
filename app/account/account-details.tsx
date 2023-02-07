'use client';
import React, { useState, ReactNode } from 'react';
import { updateUserName } from '../../utils/supabase-client';
import { useUser } from '@supabase/auth-ui-react/dist/esm/src/components/Auth/UserContext';
import { useSupabase } from '../../components/supabase-provider';
import { User } from '@supabase/supabase-js';

interface Props {
    title: string;
    description?: string;
    footer?: ReactNode;
    children: ReactNode;
  }

function Card({ title, description, footer, children }: Props) {
    return (
      <div className="border border-zinc-700	max-w-3xl w-full p rounded-md m-auto my-8">
        <div className="px-5 py-4">
          <h3 className="text-2xl mb-1 font-medium">{title}</h3>
          <p className="text-zinc-300">{description}</p>
          {children}
        </div>
        <div className="border-t border-zinc-700 bg-zinc-900 p-4 text-zinc-500 rounded-b-md">
          {footer}
        </div>
      </div>
    );
  }

export default function AccountDetails({ user }: { user: User }){
    const [fullname, setFullname] = useState("");
    const { supabase, session } = useSupabase()
    const { userDetails } = useUser();

    const handleSubmit = async () => {
      updateUserName(user, fullname)
    };
    return(
<>
<div className="p-4">
        <Card
          title="Your Name"
          description="Please enter your full name, or a display name you are comfortable with."
          footer={<p>Please use 64 characters at maximum.</p>}
        >
          <div className="text-xl mt-8 mb-4 font-semibold">
            {userDetails?.display_name}
              <div className="h-8 mb-6">
                <form>
                <label 
      htmlFor="fullname" 
      className="text-2xl rounded-t-xl px-2">
        Full name
        <span className="text-liberapink dark:text-gray-50">*</span>
        </label>
      <input 
      type="text" 
      value={fullname} 
      onChange={e => setFullname(e.target.value)} name="fullname" className="py-2 mb-2 pb-2 pl-4 focus:outline-none rounded-b-xl focus:rounded-md focus:ring-2 ring-liberapurple font-light text-gray-500" />
            <button onClick={handleSubmit}></button>
                </form>
              </div>
          </div>
        </Card>
        <Card
          title="Your Email"
          description="Please enter the email address you want to use to login."
          footer={<p>We will email you to verify the change.</p>}
        >
          <p className="text-xl mt-8 mb-4 font-semibold">
            {session ? userDetails.email : null}
          </p>
        </Card>
      </div>
      </>
    )
}
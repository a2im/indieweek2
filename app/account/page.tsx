import MyNavbar from '../../components/navbar';
import AccountDetails from './account-details';
import { User } from '@supabase/supabase-js';

export default function Account({ user }: { user: User }){
  return (
    <>
    <MyNavbar/>
    <section className="bg-black mb-32">
      <div className="max-w-6xl mx-auto pt-8 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Account
          </h1>
          <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            We partnered with Stripe for a simplified billing.
          </p>
        </div>
      </div>
      <AccountDetails user={user}/>
    </section>
    </>
  );
}

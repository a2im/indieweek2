'use client';
import Footer from './footer'
import MyNavbar from './navbar';
import MyIntro from './intro'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

export function Home({signOut, user}) {
  return (
    <div className="bggradient2">
      <title>Indie Week - Home</title>
      <MyNavbar user={user} signOut={signOut}/>
          <MyIntro/>
        <Footer/>
    </div>
  )
}

export default withAuthenticator(Home);
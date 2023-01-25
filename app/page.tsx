'use client';
import Footer from './footer'
import MyIntro from './intro'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

export function Home({signOut, user}) {
  return (
    <div className="bggradient2">
      <title>Indie Week - Home</title>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
          <MyIntro/>
        <Footer/>
    </div>
  )
}

export default withAuthenticator(Home);
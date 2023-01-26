'use client';
import MyNavbar from './navbar';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure({...awsExports, ssr: true});
import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export function App({children}) {
    return (
        <>
<MyNavbar signOut={signOut}/>
{children}
</>
    )
}

export default withAuthenticator(App);
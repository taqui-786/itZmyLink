'use server'
import { signIn, signOut } from "../auth";

export async function handleGoogleAuth(myCallbackUrl:string){
    await signIn('google', {redirectTo:myCallbackUrl})
    // await signOut({redirectTo:"/"})
}
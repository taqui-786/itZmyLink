import type {NextAuthConfig} from 'next-auth'
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google'
const config = {
   providers:[Google],
   pages:{
    signIn:"/auth/signin"
},
} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut}  = NextAuth(config)
import type { NextAuthConfig } from "next-auth";
import "next-auth/jwt";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createUser, isUserExists } from "@/lib/supabase/actions";
const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name;

      return token;
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
    async signIn({ account, profile }: any) {
      if (account?.provider === "google") {
        const isExists = await isUserExists(profile?.email);

        if (isExists.status === "success") {
          await createUser(profile);
          return true;
        }
        return true;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

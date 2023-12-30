import TwitterProvider from "next-auth/providers/twitter";
import {
  AUTH_SECRET,
  TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET,
} from "./lib/config";
import NextAuth from "next-auth";

export const authConfig = {
  providers: [
    TwitterProvider({
      clientId: TWITTER_CLIENT_ID,
      clientSecret: TWITTER_CLIENT_SECRET,
    }),
  ],
  secret: AUTH_SECRET,
  callbacks: {
    async jwt({ token, user, profile }: any) {
      token.userRole = "admin";
      token.profile = profile;
      return token;
    },
    session({ session, token, profile }: any) {
      return { ...session, ...token, ...profile };
    },
    async signIn({ user, account, profile }: any) {
      return { ...user, ...account, ...profile };
    },
  },
  pages: {
    error: "/airdrop",
    signIn: "/airdrop",
    signOut: "/airdrop",
  },
};

export const { handlers, auth, signOut, signIn } = NextAuth(authConfig);

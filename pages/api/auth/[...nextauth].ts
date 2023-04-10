import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { firestore } from "@/lib/firestore";

const { GOOGLE_ID = "", GOOGLE_SECRET = "", NEXT_PUBLIC_SECRET= "" } = process.env;

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  adapter: FirestoreAdapter(firestore),
  secret: NEXT_PUBLIC_SECRET,
  // pages: {
  //   signIn: '/auth/signin'
  // }
};

export default NextAuth(authOptions);

import NextAuth from "next-auth";
// import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    // pages: {
    //     signIn: "/signin",
    // },
    secret: process.env.AUTH_SECRET,
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
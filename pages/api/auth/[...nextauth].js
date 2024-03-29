import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ]
}


export default NextAuth(authOptions)
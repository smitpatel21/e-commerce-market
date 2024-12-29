// ref: https://authjs.dev/getting-started/adapters/prisma
import NextAuth, { getServerSession, NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "test@example.com" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                return null;
            },
        }),
    ],
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
// Below is older method to get the session we use auth() now for that
export const getAuthSession = getServerSession(authOptions);

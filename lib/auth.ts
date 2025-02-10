// ref: https://authjs.dev/getting-started/adapters/prisma
import NextAuth, { getServerSession, NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

type ICredentials = {
    email: string;
    password: string;
};

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "test@example.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "enter password",
                },
            },
            authorize: async (credentials) => {
                const { email, password } = credentials!;

                const user = await prisma.user.findUnique({ where: { email } });
                if (!user) {
                    throw new Error("No user found with this email");
                }

                const isValid = bcrypt.compareSync(
                    password,
                    user.hashedPassword
                );

                if (!isValid) {
                    throw new Error("Invalid email or password");
                }

                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, user }) {
            if (session.user) {
                session.user.email = user.email;
                session.user.name = user.name;
            }
            return session;
        },
        redirect() {
            return '/'
          },
    }
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
// Below is older method to get the session we use auth() now for that
export const getAuthSession = auth();

// ref: https://authjs.dev/getting-started/adapters/prisma
import NextAuth, {  NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import Credentials from "next-auth/providers/credentials";
import { encryptPassword } from "./util";
import bcrypt from 'bcryptjs';

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            // name: "Credentials",
            credentials: {
                email: {
                   
                },
                password: {
                   
                },
            },
            authorize: async (credentials) => {
                
                if (!credentials || !credentials.email || !credentials.password) {
                    return null
                }
                try {
                    const email = credentials.email;                    
                    const hash = encryptPassword(credentials.password);

                    
                    let user = await prisma.user.findUnique({ where: { email } });

                    if(!user){
                        throw new Error("user doesnot exist!")
                    }
                    const isMatch = bcrypt.compareSync(credentials.password,user.hashedPassword as string)
                    if(isMatch){
                        return user;
                    } else {
                        throw new Error("invalid credentials")
                    }
                    
                } catch (error:unknown) {
                    throw new Error("server error");
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log('token',token,'==========================')
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, user }) {
            console.log('session',session,'==========================')
            // if (session.user) {
            //     session.user.email = user.email;
            //     session.user.name = user.name;
            // }
            return session;
        },
        redirect() {
            return '/'
        },
    },
    secret:'940320u92'
};

export const handlers = NextAuth(authOptions);
// Below is older method to get the session we use auth() now for that

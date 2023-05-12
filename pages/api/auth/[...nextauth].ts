/** @format */

import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { User } from "../../../types";
import { AuthOptions, Session } from "next-auth";

export const authOptions:AuthOptions = {
   providers: [
      Credentials({
         name: "Credentials",
         credentials: {
            username: {
               label: "Username",
               type: "text",
               placeholder: "john",
            },
            password: {
               label: "Password",
               type: "password",
            },
         },
         async authorize(credentials) {
            const { username, password } = credentials as {
               username: string;
               password: string;
            };

            const body = JSON.stringify({ username, password });

            const response = await fetch("http://localhost:8000/auth/login", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body,
            });
            const user = await response.json();

            if (user && response.ok) {
               return user;
            }

            return null;
         },
      }),
   ],
   session: {
      maxAge: 12 * 60 * 60,
   },
   callbacks: {
      async jwt (params:{token: any, user:any, account: any}) {
         if (params.user && params.account) {
            console.log("user: ", params.user);
            return {
               ...params.token,
               username: params.user.username,
               userId: params.user.id,
               email: params.user.email
            };
         }
         return params.token;
      },
      session: async ({ session, token, user }:{session: any, token: any,user: any}) => {
         session.user.name = token.username;
         session.user.id = token.userId;
         session.user.email = token.email
         return session;
      },
   },
   pages: {
      signIn: "/signin",
   },
};

export default NextAuth(authOptions);

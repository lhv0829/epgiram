// next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    access_Token?: string;
  }

  interface JWT {
    access_Token?: string;
  }
}

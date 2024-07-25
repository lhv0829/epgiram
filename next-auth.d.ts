import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User {
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    accessToken?: string;
    refreshToken?: string;
    idToken?: string;
    provider?: string;
  }

  interface JWT {
    accessToken?: string;
    idToken?: string;
    provider?: string;
  }
}

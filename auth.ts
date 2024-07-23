import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    jwt: ({ token, account }) => {
      console.log("token", token);

      return token;
    },
    async session({ session, token }) {
      console.log("callback.session", session);
      console.log("callback.token", token);
      // 세션에 필요한 값만 포함시킴
      session.access_Token = token.access_token as string;
      return session;
    },
  },
});

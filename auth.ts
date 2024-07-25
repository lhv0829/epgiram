import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";
import Naver from "next-auth/providers/naver";

export const { auth, signIn, signOut, handlers } = NextAuth({
  providers: [
    Google,
    Kakao,
    Naver,
    Credentials({
      async authorize(credentials) {
        if (credentials.email && credentials.password) {
          const response = await fetch(
            `${process.env.BASE_URL}/api/auth/signIn`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );
          if (!response.ok) return null;

          const { result } = await response.json();
          const user = {
            id: result.user.id,
            nickname: result.user.nickname,
            email: result.user.email,
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
          };
          console.log("user", user);
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, account, user }) => {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.provider = account.provider;
      }
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.idToken = token.idToken as string;
      session.provider = token.provider as string;
      return session;
    },
  },
});

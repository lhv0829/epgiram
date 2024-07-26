// import type { NextAuthConfig } from "next-auth";

// export const authConfig = {
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       // Check if the user is authenticated
//       const isLoggedIn = !!auth?.user;
//       console.log("cofing", isLoggedIn);
//       // Initialize protected routes
//       // Here, all routes except the login page is protected
//       const isOnProtected = !nextUrl.pathname.startsWith("/login");

//       if (isOnProtected) {
//         if (isLoggedIn) return true;
//         return false; // redirect to /login
//       } else if (isLoggedIn) {
//         // redirected to homepage
//         return Response.redirect(new URL("/", nextUrl));
//       }
//       return true;
//     },
//   },
//   providers: [],
// } satisfies NextAuthConfig;

import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      const isLoggedIn = !!user;
      console.log("config", isLoggedIn);
      if (isLoggedIn) {
        // 로그인 성공 시 홈 페이지로 리다이렉트
        return true;
      }
      return false;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

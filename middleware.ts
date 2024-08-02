import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const loginPath = "/login"; // 로그인 경로

  // 현재 페이지가 로그인 페이지인 경우, 세션이 있으면 홈 페이지로 리다이렉트
  if (request.nextUrl.pathname === loginPath) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken");

    const redirectUrl = `${process.env.BASE_URL}`;

    if (accessToken) {
      return NextResponse.redirect(redirectUrl);
    }
  }

  // 로그인이 필요하고, accessToken이 없는 경우 로그인 페이지로 리다이렉트할 수도 있음
  // const protectedPaths = ["/protectedPath1", "/protectedPath2"]; // 보호된 경로들
  // if (protectedPaths.includes(request.nextUrl.pathname) && !accessToken) {
  //   return NextResponse.redirect(`${process.env.BASE_URL}${loginPath}`);
  // }
}

export const config = {
  matcher: ["/login"],
};

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/getSession";

export async function middleware(request: NextRequest) {
  const homePath = "/"; // 홈 경로
  const loginPath = "/login"; // 로그인 경로

  //현재 페이지가 로그인페이지 인 경우, 다음 페이지가 로그인일 때
  if (request.nextUrl.pathname === loginPath) {
    const session = await getSession();
    if (session) {
      return NextResponse.redirect(new URL(homePath, request.url));
    }
  }
}

export const config = {
  matcher: ["/login"],
};

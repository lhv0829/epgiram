import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { provider: string } }) {
  const { provider } = params;
  const redirectUri = `${process.env.REDIRECT_URI}/${provider}`;
  let authUrl = "";

  switch (provider) {
    case "google":
      authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.AUTH_GOOGLE_ID}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20profile%20email`;
      break;
    case "kakao":
      authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.AUTH_KAKAO_ID}&redirect_uri=${redirectUri}&response_type=code`;
      break;
    case "naver":
      authUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${process.env.AUTH_NAVER_ID}&redirect_uri=${redirectUri}&response_type=code&state=YOUR_UNIQUE_STATE`;
      break;
    default:
      return NextResponse.json({ error: "Invalid provider" }, { status: 400 });
  }

  return NextResponse.redirect(authUrl);
}

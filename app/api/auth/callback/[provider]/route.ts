import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const provider = url.pathname.split("/").pop();

  if (!code || !provider) return NextResponse.redirect("/login");

  try {
    //현재 구글만 가능하기에 구글 우선으로 작성
    const { id_token } = await getGoogleOAuthTokens(code, provider);
    const { accessToken, refreshToken } = await getEpigramAccess(
      id_token,
      provider
    );

    cookies().set("accessToken", accessToken, {
      secure: process.env.NODE_ENV === "production",
    });
    cookies().set("refreshToken", refreshToken, {
      secure: process.env.NODE_ENV === "production",
    });

    return NextResponse.redirect(process.env.BASE_URL + "/");
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(process.env.BASE_URL + "/login");
  }
}

async function getGoogleOAuthTokens(code: string, provider: string) {
  const url = "https://oauth2.googleapis.com/token";

  const clientId = process.env.AUTH_GOOGLE_ID;
  const clientSecret = process.env.AUTH_GOOGLE_SECRET;
  const redirectUri = `${process.env.REDIRECT_URI}${provider}`;

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error("Missing required environment variables");
  }

  const values = {
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(values as Record<string, string>),
  });

  if (!res.ok) {
    const errorResponse = await res.json();
    console.error("Failed to fetch OAuth tokens:", errorResponse);
    throw new Error("Failed to fetch OAuth tokens");
  }

  return res.json();
}

async function getEpigramAccess(token: string, provider: string) {
  const body = {
    state: "string",
    redirectUri: `${process.env.REDIRECT_URI}/${provider}`,
    token,
  };

  const res = await fetch(
    `${process.env.EPIGRAM_API}/auth/signIn/${provider.toUpperCase()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    const errorResponse = await res.json();
    console.error("Failed to fetch Epigram access:", errorResponse);
    throw new Error("Failed to fetch Epigram access");
  }

  return res.json();
}

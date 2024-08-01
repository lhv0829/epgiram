import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {
      body: { email, password },
    } = await request.json();
    const response = await fetch(process.env.EPIGRAM_API + "auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const { accessToken, refreshToken } = await response.json();

    return NextResponse.json({ ok: true, accessToken, refreshToken });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ ok: false });
  }
}

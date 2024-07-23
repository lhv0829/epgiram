import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const cookiesStore = cookies();
    const body = await request.json();
    const response = await fetch(process.env.EPIGRAM_API + "auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    if (response.status !== 200) {
      return NextResponse.json({ ok: false, result });
    }

    cookiesStore.set("accessToken", result.accessToken, {
      path: "/",
      httpOnly: true,
    });
    cookiesStore.set("refreshToken", result.refreshToken, {
      path: "/",
      httpOnly: true,
    });

    return NextResponse.json({ ok: true, result });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ ok: false });
  }
}

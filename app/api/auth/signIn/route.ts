import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await fetch(process.env.EPIGRAM_API + "auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    if (response.status !== 200)
      return NextResponse.json({ ok: false, result });
    return NextResponse.json({ ok: true, result });
  } catch (e) {
    console.log(e);
  }
}

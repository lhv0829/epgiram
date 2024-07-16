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
    console.log(result);
    if (!response.ok)
      return NextResponse.json({ message: "Failed", result, redirect: false });
    return NextResponse.json({ message: "successful", result, redirect: true });
  } catch (e) {
    console.log(e);
  }
}

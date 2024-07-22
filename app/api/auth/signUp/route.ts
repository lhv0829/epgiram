import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await fetch(process.env.EPIGRAM_API + "auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok)
      return NextResponse.json({ message: "Failed", redrect: false });

    return NextResponse.json({ message: "successful", redirect: true });
  } catch (e) {
    console.log(e);
  }
}

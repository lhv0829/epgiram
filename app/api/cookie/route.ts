import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;

    return NextResponse.json({ accessToken, refreshToken });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ ok: false });
  }
}

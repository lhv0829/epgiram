"use server";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const authorization = request.headers.get("authorization");

    if (!authorization) {
      throw new Error("Authorization 헤더가 없습니다.");
    }

    const response = await fetch(process.env.EPIGRAM_API + "epigrams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());

    return NextResponse.json(
      { redirectId: response.id, ok: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("폼 데이터를 파싱하는 데 실패했습니다:", error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

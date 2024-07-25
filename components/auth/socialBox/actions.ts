"use server";

import { signIn } from "@/auth";

export async function googleSignin() {
  await signIn("google");
}

export async function KakaoSignin() {
  await signIn("kakao");
}

export async function NaverSignin() {
  await signIn("naver");
}

"use server";

import { signIn } from "@/auth";

export async function googleSignin() {
  await signIn("google");
}

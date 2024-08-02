"use server";

import { cookies } from "next/headers";

interface FormData {
  get(name: string): FormDataEntryValue | null;
}

interface ResponseBody {
  ok: boolean;
  accessToken?: string;
  refreshToken?: string;
}

export async function login(prev: any, formData: FormData) {
  try {
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const response = await fetch(`${process.env.BASE_URL}/api/auth/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body,
      }),
    });
    const { ok, accessToken, refreshToken }: ResponseBody =
      await response.json();
    if (!ok) return false;

    cookies().set("accessToken", accessToken!);
    cookies().set("refreshToken", refreshToken!);
    return true;
  } catch (error) {
    return false;
  }
}

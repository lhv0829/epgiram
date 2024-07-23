"use server";

import { cookies } from "next/headers";

interface FormData {
  get(name: string): FormDataEntryValue | null;
}

export async function login(prev: any, formData: FormData) {
  const data = {
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/auth/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) return;

    const { ok, result } = await response.json();
    if (!ok) {
      return { message: result.message, ok };
    } else {
      cookies().set("accessToken", result.accessToken);
      cookies().set("refreshToken", result.refreshToken);
      return { message: "", ok };
    }
  } catch (e) {
    console.error(e);
    throw new Error("Failed");
  }
}

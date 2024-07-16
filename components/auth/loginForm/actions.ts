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
      return result;
    } else {
      cookies().set("accessToken", result.accessToken);
    }
    return;
  } catch (e) {
    console.error(e);
    throw new Error("Failed");
  }
}

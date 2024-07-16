"use server";

import { cookies } from "next/headers";

export async function login(prev: any, formData: FormData) {
  const data = {
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };
  try {
    const response = await fetch(process.env.BASE_URL + "api/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) return;
    const result = await response.json();
    cookies().set("accessToken", await result.result.accessToken);
    return result;
  } catch (e) {
    console.log(e);
    throw new Error("Faild");
  }
}

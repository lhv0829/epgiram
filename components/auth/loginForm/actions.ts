"use server";

import { signIn } from "@/auth";
import { getSession } from "@/lib/getSession";
import { AuthError } from "next-auth";

interface FormData {
  get(name: string): FormDataEntryValue | null;
}

export async function login(prev: any, formData: FormData) {
  const data = {
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };
  try {
    await signIn("credentials", formData);
    console.log("login");
    const session = await getSession();
    console.log(session);
    return true;
  } catch (error) {
    if (error instanceof AuthError) {
      return "log in failed";
    }
    throw error;
  }
  // try {
  //   const response = await fetch(`${process.env.BASE_URL}/api/auth/signIn`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   if (!response.ok) return;

  //   const { ok, result } = await response.json();
  //   if (!ok) {
  //     return { message: result.message, ok };
  //   } else {
  //     cookies().set("accessToken", result.accessToken);
  //     cookies().set("refreshToken", result.refreshToken);
  //     return { message: "", ok };
  //   }
  // } catch (e) {
  //   console.error(e);
  //   throw new Error("Failed");
  // }
}

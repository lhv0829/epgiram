"use server";

import { signIn } from "@/auth";
import { getSession } from "@/lib/getSession";
import { AuthError } from "next-auth";

interface FormData {
  get(name: string): FormDataEntryValue | null;
}

export async function login(prev: any, formData: FormData) {
  try {
    await signIn("credentials", formData);

    console.log("login");
    const session = await getSession();
    if (session.user) return true;
  } catch (error) {
    if (error instanceof AuthError) {
      return false;
    }
    throw error;
  }
}

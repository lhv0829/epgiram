"use server";

import { getSession } from "@/lib/getSession";

export async function oauthLogin(formData: FormData) {
  const session = await getSession();
  const nickname = formData.get("nickname");

  const form = {
    nickname,
    redirectUrl: process.env.REDIRECT_URL,
    token: session?.access_Token,
  };

  console.log(form);
}

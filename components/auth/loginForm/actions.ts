"use server";

import { PASSWORD_REGEX } from "@/lib/regex";
import { z } from "zod";

// Zod 스키마 정의
const formSchema = z.object({
  email: z.string().email("유효한 이메일 주소를 입력하세요."),
  password: z.string().regex(PASSWORD_REGEX, "비밀번호는 유효하지 않습니다."),
});

// login 함수
export async function login(prev: any, formData: FormData) {
  const data = {
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };

  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}

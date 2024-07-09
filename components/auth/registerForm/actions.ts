"use server";
import { PASSWORD_REGEX } from "@/lib/regex";
import { z } from "zod";

// 비밀번호 일치 검사
const checkPassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};

// 이메일 중복 검사
const checkDuplicateEmail = async (email: string) => {
  const existingEmails = ["test@example.com"];
  return existingEmails.includes(email);
};

const formSchema = z
  .object({
    nickName: z
      .string({
        invalid_type_error: "닉네임은 문자여야 합니다.",
      })
      .min(3, { message: "닉네임은 최소 3자 이상이어야 합니다." })
      .max(10, { message: "닉네임은 최대 10자 이내여야 합니다." })
      .trim(),
    email: z
      .string()
      .email({ message: "유효한 이메일 주소를 입력하세요." })
      .toLowerCase()
      .refine(
        async (email) => {
          const isDuplicate = await checkDuplicateEmail(email);
          return !isDuplicate;
        },
        {
          message: "이메일이 중복입니다.",
          path: ["email"],
        }
      ),
    password: z
      .string()
      .min(12, { message: "비밀번호는 최소 12자 이상이어야 합니다." })
      .regex(PASSWORD_REGEX, {
        message: "비밀번호는 숫자, 영어, 특수문자를 포함해야 합니다.",
      }),
    confirmPassword: z
      .string()
      .min(12, { message: "비밀번호 확인은 최소 12자 이상이어야 합니다." })
      .regex(PASSWORD_REGEX, {
        message: "비밀번호 확인은 숫자, 영어, 특수문자를 포함해야 합니다.",
      }),
  })
  .refine((data) => checkPassword(data.password, data.confirmPassword), {
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export async function createAccount(prev: any, formData: FormData) {
  const data = {
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || "",
    confirmPassword: formData.get("confirmPassword")?.toString() || "",
    nickName: formData.get("nickName")?.toString() || "",
  };

  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}

"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import FormField from "@/components/core/input/FormField";
import SocialBox from "../socialBox";
import AuthButton from "../AuthButton";
import { login } from "./actions";

// Zod schema definition
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "이메일은 필수 입력입니다." })
    .email("이메일 형식으로 작성해 주세요."),
  password: z.string().min(1, "비밀번호는 필수 입력입니다."),
});

interface FormState {
  email: string;
  password: string;
}

interface FieldErrors {
  email: string[];
  password: string[];
}

export default function LoginForm() {
  const router = useRouter();
  const [state, dispatch] = useFormState(login, null);
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    email: [],
    password: [],
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const formFields = [
    {
      name: "email",
      placeholder: "이메일",
      errors: fieldErrors.email,
    },
    {
      name: "password",
      placeholder: "비밀번호",
      type: "password",
      errors: fieldErrors.password,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let errors: string[] = [];

    try {
      await formSchema.parseAsync({ ...formState, [name]: value });
      errors = [];
    } catch (err: any) {
      const fieldError = err.errors.find(
        (error: any) => error.path[0] === name
      );
      errors = fieldError ? [fieldError.message] : [];
    }

    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errors,
    }));

    validateForm();
  };

  const validateForm = async () => {
    try {
      await formSchema.parseAsync(formState);
      setIsFormValid(true);
    } catch {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  // useEffect(() => {
  //   if (state?.message !== "" && !state?.ok) {
  //     setFieldErrors((prevErrors) => ({
  //       ...prevErrors,
  //       email: ["이메일 혹은 비밀번호를 확인해주세요."],
  //     }));
  //   }
  //   if (state?.ok) {
  //     router.push("/");
  //   }
  // }, [state, router]);

  return (
    <>
      <form action={dispatch} className="flex flex-col gap-4 w-[640px]">
        {formFields.map((field, index) => (
          <FormField
            key={index}
            {...field}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
        <AuthButton isFormValid={isFormValid}>로그인</AuthButton>
      </form>
      <div className="text-right text-xl font-medium">
        <span className="text-blue-400 mr-2">회원이 아니신가요?</span>
        <Link href="../register" className="underline">
          가입하기
        </Link>
      </div>
      <SocialBox />
    </>
  );
}

"use client";

import React, { useState } from "react";
import { useFormState } from "react-dom";
import FormField from "@/components/core/input/FormField";
import AuthButton from "../AuthButton";
import SocialBox from "../socialBox";
import { z } from "zod";
import { PASSWORD_REGEX } from "@/lib/regex";
import { createAccount } from "./actions";

const formSchema = z
  .object({
    nickName: z
      .string({
        invalid_type_error: "닉네임은 문자여야 합니다.",
      })
      .min(1, { message: "닉네임은 필수 입력입니다." })
      .max(20, { message: "닉네임은 최대 20자 이내여야 합니다." })
      .trim(),
    email: z
      .string()
      .min(1, { message: "이메일은 필수 입력입니다." })
      .email({ message: "이메일 형식으로 작성해 주세요." })
      .toLowerCase()
      .refine(
        async (email) => {
          const existingEmails = ["test@example.com"];
          const isDuplicate = existingEmails.includes(email);
          return !isDuplicate;
        },
        {
          message: "이메일이 중복입니다.",
          path: ["email"],
        }
      ),
    password: z
      .string()
      .min(1, { message: "비밀번호는 필수 입력입니다." })
      .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." })
      .regex(PASSWORD_REGEX, {
        message: "비밀번호는 숫자, 영어, 특수문자를 포함해야 합니다.",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "비밀번호 확인을 입력해주세요." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export default function RegisterForm() {
  const [state, dispatch] = useFormState(createAccount, null);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickName: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    email: [],
    password: [],
    confirmPassword: [],
    nickName: [],
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const formFields = [
    {
      label: "이메일",
      name: "email",
      placeholder: "이메일",
      errors: fieldErrors.email,
    },
    {
      label: "비밀번호",
      name: "password",
      placeholder: "비밀번호",
      type: "password",
      errors: fieldErrors.password,
    },
    {
      label: "비밀번호 확인",
      name: "confirmPassword",
      placeholder: "비밀번호 확인",
      type: "password",
      errors: fieldErrors.confirmPassword,
    },
    {
      label: "닉네임",
      name: "nickName",
      placeholder: "닉네임",
      errors: fieldErrors.nickName,
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
        <AuthButton isFormValid={isFormValid}>가입하기</AuthButton>
      </form>
      <SocialBox />
    </>
  );
}

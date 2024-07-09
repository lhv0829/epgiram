"use client";

import React from "react";
import FormField from "../FormField";
import AuthButton from "../AuthButton";
import SocialBox from "../socialBox";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
interface IRegisterFormProps {}

const RegisterForm: React.FC<IRegisterFormProps> = (props) => {
  const [state, dispatch] = useFormState(createAccount, null);

  console.log(state);

  const formFields = [
    {
      label: "이메일",
      name: "email",
      placeholder: "이메일",
      errors: state?.fieldErrors.email,
    },
    {
      label: "비밀번호",
      name: "password",
      placeholder: "비밀번호",
      type: "password",
      errors: state?.fieldErrors.password,
    },
    {
      label: "비밀번호 확인",
      name: "confirmPassword",
      placeholder: "비밀번호 확인",
      type: "password",
      errors: state?.fieldErrors.confirmPassword,
    },
    {
      label: "닉네임",
      name: "nickName",
      placeholder: "닉네임",
      errors: state?.fieldErrors.nickName,
    },
  ];

  return (
    <>
      <form action={dispatch} className="flex flex-col gap-4 w-[640px]">
        {formFields.map((field, index) => (
          <FormField key={index} {...field} />
        ))}
        <AuthButton>가입하기</AuthButton>
      </form>
      <SocialBox />
    </>
  );
};

export default RegisterForm;

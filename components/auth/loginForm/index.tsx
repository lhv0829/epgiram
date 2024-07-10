"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { login } from "./actions";
import SocialBox from "../socialBox";
import AuthButton from "../AuthButton";
import FormField from "../FormField";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const [state, dispatch] = useFormState(login, null);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
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
  ];
  useEffect(() => {
    const validateForm = () => {
      const isAllFieldsFilled = Object.values(formState).every(Boolean);
      setIsFormValid(isAllFieldsFilled);
    };

    validateForm();
  }, [formState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <form action={dispatch} className="flex flex-col gap-4 w-[640px]">
        {formFields.map((field, index) => (
          <FormField key={index} onChange={handleChange} {...field} />
        ))}
        <AuthButton isFormValid={isFormValid}>로그인</AuthButton>
      </form>
      {/**로그인 페이지에서만 나와야함. */}
      <div className="text-right text-xl font-medium ">
        <span className="text-blue-400 mr-2">회원이 아니신가요?</span>
        <Link href={"../register"} className="underline">
          가입하기
        </Link>
      </div>
      <SocialBox />
    </>
  );
}

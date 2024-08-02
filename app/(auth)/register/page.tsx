import RegisterForm from "@/components/auth/registerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원가입",
};

export default function Register() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}

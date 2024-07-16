import LoginForm from "@/components/auth/loginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
};

export default function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

import { ReactNode } from "react";
import "../globals.css";

export const metadata = {
  title: "Epigram Login",
  description: "Epigram Login Page",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="bg-[#F5F7FA]">
      <body className="">{children}</body>
    </html>
  );
}

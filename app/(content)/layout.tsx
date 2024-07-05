import { ReactNode } from "react";
import "../globals.css";
import Gnb from "@/components/core/Gnb";

export const metadata = {
  title: "Epigram",
  description: "Epigram",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="bg-[#F5F7FA]">
      <body className="flex items-center flex-col">
        <Gnb />
        {children}
      </body>
    </html>
  );
}

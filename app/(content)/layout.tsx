import { ReactNode } from "react";
import "../globals.css";
import Image from "next/image";

export const metadata = {
  title: "Epigram",
  description: "Epigram",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="bg-[#F5F7FA]">
      <body className="flex items-center flex-col">
        <nav className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            {/**main 인 경우에만 보여야함. */}
            <Image src="/icons/logo.svg" alt="logo" width={60} height={60} />
            <span className="text-[26px] font-bold">Epigram</span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

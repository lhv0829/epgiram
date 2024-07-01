import { ReactNode } from "react";
import "../globals.css";
import Image from "next/image";

export const metadata = {
  title: "Epigram Login",
  description: "Epigram Login Page",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="bg-[#F5F7FA]">
      <body className="">
        <div className="zigzag-pattern" />
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-sm p-8 space-y-6 rounded-lg">
            <header className="flex justify-center items-center gap-2">
              <Image src="logo.svg" alt="logo" width={48} height={48} />
              <span className="text-2xl font-bold">Epigram</span>
            </header>
            <section>{children}</section>
          </div>
        </div>
      </body>
    </html>
  );
}

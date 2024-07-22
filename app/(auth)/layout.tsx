import { ReactNode } from "react";
import { Metadata } from "next";
import "../globals.css";
import Image from "next/image";
import Gnb from "@/components/core/Gnb";

export const metadata: Metadata = {
  title: {
    template: "Epigram | %s",
    default: "Epigram",
  },
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="bg-background">
      <body className="">
        <Gnb />
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full min-w-sm p-8 space-y-6 rounded-lg">
            <header className="flex justify-center items-center gap-2">
              <Image src="/icons/logo.svg" alt="logo" width={48} height={48} />
              <span className="text-2xl font-bold">Epigram</span>
            </header>
            <section className="flex flex-col items-center justify-center">
              {children}
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}

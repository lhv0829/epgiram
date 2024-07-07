import { ReactNode } from "react";
import "../globals.css";
import Gnb from "@/components/core/Gnb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Epigram | %s",
    default: "Epigram",
  },
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex items-center flex-col">
        <Gnb />
        {children}
      </body>
    </html>
  );
}

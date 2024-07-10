import { ReactNode } from "react";
import { Metadata } from "next";
import Gnb from "@/components/core/Gnb";
import "../globals.css";

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

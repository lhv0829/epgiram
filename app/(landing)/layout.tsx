import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Gnb from "@/components/core/Gnb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Epigram",
  description: "Epigram Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Gnb />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Gnb from "@/components/core/Gnb";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Epigram",
  description: "Epigram Landing Page",
};

export default async function RootLayout({
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

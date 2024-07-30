import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Gnb from "@/components/core/Gnb";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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
  const session = await auth();
  return (
    <html lang="ko">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Gnb />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

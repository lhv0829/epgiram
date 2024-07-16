import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  // const cookiestore = cookies().get("accessToken");
  // if (cookiestore?.value) {
  //   redirect("/epigrams");
  // }
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

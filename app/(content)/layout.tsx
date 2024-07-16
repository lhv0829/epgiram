import { ReactNode } from "react";
import { Metadata } from "next";
import Gnb from "@/components/core/Gnb";
import "../globals.css";
import { FormProvider } from "@/contexts/FormProvider";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: {
    template: "Epigram | %s",
    default: "Epigram",
  },
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  // const cookiestore = cookies().get("accessToken");
  // if (!cookiestore?.value!) {
  //   redirect("/login");
  // }
  return (
    <html lang="ko">
      <ThemeProvider>
        <FormProvider>
          <Gnb />
          {children}
        </FormProvider>
      </ThemeProvider>
    </html>
  );
}

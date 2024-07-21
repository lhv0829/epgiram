import { ReactNode } from "react";
import { Metadata } from "next";
import Gnb from "@/components/core/Gnb";
import "../globals.css";
import { FormProvider } from "@/contexts/FormProvider";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export const metadata: Metadata = {
  title: {
    template: "Epigram | %s",
    default: "Epigram",
  },
};

export default function AuthLayout({ children }: { children: ReactNode }) {
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

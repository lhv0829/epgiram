// components/ThemeProvider.tsx
"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface ThemeProviderProps {
  children: ReactNode;
}

const bluePaths = ["addepigram", "search"];

export function ThemeProvider({ children }: ThemeProviderProps) {
  const pathName = usePathname();
  const pathParts = pathName.split("/").pop();

  const backgroundClass = bluePaths.includes(pathParts as string)
    ? "bg-blue-100"
    : "bg-background";

  return (
    <body className={`flex items-center flex-col ${backgroundClass}`}>
      {children}
    </body>
  );
}

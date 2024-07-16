// components/ThemeProvider.tsx
"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const pathName = usePathname();
  const pathParts = pathName.split("/").pop();

  const getBackgroundClass = () => {
    switch (pathParts) {
      case "addepigram":
        return "bg-blue-100";
      case "search":
        return "bg-blue-100";
      default:
        return "bg-background";
    }
  };

  return (
    <body className={`flex items-center flex-col ${getBackgroundClass()}`}>
      {children}
    </body>
  );
}

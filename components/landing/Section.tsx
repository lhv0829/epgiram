import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ISectionProps {
  className?: string;
  children: ReactNode;
}

const Section: React.FC<ISectionProps> = ({ className, children }) => {
  return (
    <section className={cn("flex flex-col min-h-[1040px]", className)}>
      {children}
    </section>
  );
};

export default Section;

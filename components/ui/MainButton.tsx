import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center px-4 bg-black-500 whitespace-nowrap transition-colors text-blue-100 font-semibold font-pre hover:bg-black-600 active:bg-black-700 disabled:pointer-events-none disabled:border disabled:border-blue-300 disabled:bg-blue-400",
  {
    variants: {
      size: {
        xs: "w-fit h-8",
        sm: "w-fit h-11",
        "md-1": "w-28 h-12",
        "md-2": "w-[136px] h-14",
        lg: "w-[286px] h-16",
        xl: "w-[312px] h-11",
        "2xl": "w-96 h-11",
        "3xl": "w-[640px] h-16",
      },
      text: {
        xs: "text-xs",
        lg: "text-lg",
        xl: "text-xl",
      },
      radius: {
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      size: "sm",
      text: "lg",
      radius: "xl",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const MainButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, size, text, radius, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ size, text, radius, className }))} ref={ref} {...props} />;
});
MainButton.displayName = "MainButton";

export { MainButton, buttonVariants };

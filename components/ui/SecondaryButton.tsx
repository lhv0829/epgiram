import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center w-fit whitespace-nowrap rounded-[100px] transition-colors ", {
  variants: {
    variant: {
      icon: "gap-1 border border-line-#CFDBEA text-blue-400",
      text: "border border-line-#CFDBEA text-blue-400",
      like: "gap-1 bg-black-600 text-blue-100",
      share: "gap-1.5 bg-line-#F2F2F2 text-gray-300",
    },
    size: {
      sm: "px-3.5 py-1.5",
      md: "px-4 py-1.5",
      lg: "px-[18px] py-3",
      xl: "px-5 py-3",
    },
    text: {
      md: "text-md",
      xl: "text-xl",
    },
    bold: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, text, bold, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, text, bold, className }))} ref={ref} {...props} />;
});
SecondaryButton.displayName = "SecondaryButton";

export { SecondaryButton, buttonVariants };

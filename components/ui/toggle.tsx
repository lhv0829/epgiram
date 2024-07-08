"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center h-fit w-fit bg-[#AFBACD26] bg-opacity-15 rounded-2xl p-4 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=on]:border-[3px] data-[state=on]:p-[13px]",
  {
    variants: {
      border: {
        default: "data-[state=on]:border-transparent",
        moved: "data-[state=on]:border-illust-yellow",
        happy: "data-[state=on]:border-illust-green",
        thinking: "data-[state=on]:border-illust-purple",
        sad: "data-[state=on]:border-illust-blue",
        anger: "data-[state=on]:border-illust-red",
      },
    },
    defaultVariants: {
      border: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ border, className, ...props }, ref) => <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ className, border }))} {...props} />);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };

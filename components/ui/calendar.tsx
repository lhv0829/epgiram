"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Locale, format } from "date-fns";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const formatCaption = (date: Date, options?: { locale?: Locale }) => {
  return format(date, "yyyy년 M월", { locale: ko });
};

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      formatters={{ formatCaption }}
      showOutsideDays={showOutsideDays}
      locale={ko}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex pt-1 relative justify-between items-center w-full",
        caption_label: "text-2xl font-semibold text-black-600",
        nav: "space-x-1 flex gap-6 items-center",
        nav_button: cn(buttonVariants({ variant: "outline" }), "h-9 w-9 bg-transparent p-0 opacity-50 hover:opacity-100 border-0"),
        nav_button_previous: "",
        nav_button_next: "",
        table: "w-full border-collapse space-y-1 border-y border-blue-200",
        head_row: "flex",
        head_cell:
          "text-muted-foreground flex justify-center items-center rounded-md h-11 w-11 md:h-[54px] md:w-[54px] lg:w-[91px] lg:h-[91px] font-semibold text-2xl text-gray-200",
        row: "flex w-full mt-2 border-t border-blue-200",
        cell: "h-11 w-11 md:h-[54px] md:w-[54px] lg:w-[91px] lg:h-[91px] text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-11 w-11 md:h-[54px] md:w-[54px] lg:w-[91px] lg:h-[91px] p-0 font-semibold text-2xl text-gray-200 aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "border-[3px] rounded-[3px] border-illust-red lg:border-[6px]",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-5 w-5 lg:h-9 lg:w-9" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-5 w-5 lg:h-9 lg:w-9" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

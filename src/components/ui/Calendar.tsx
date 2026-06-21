"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      className={cn("select-none", className)}
      style={{ "--cell-size": "2.4rem", minWidth: "270px" } as React.CSSProperties}
      classNames={{
        root: cn("w-fit p-5", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-3", defaultClassNames.month),

        /* Navigation */
        nav: cn(
          "absolute inset-x-0 top-0 flex items-center justify-between px-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          "h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-150",
          "text-white/50 hover:text-white hover:bg-white/10 aria-disabled:opacity-30 aria-disabled:cursor-not-allowed",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          "h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-150",
          "text-white/50 hover:text-white hover:bg-white/10 aria-disabled:opacity-30 aria-disabled:cursor-not-allowed",
          defaultClassNames.button_next
        ),

        /* Caption / month label */
        month_caption: cn(
          "flex h-10 items-center justify-center",
          defaultClassNames.month_caption
        ),
        caption_label: cn(
          "font-display font-semibold text-[17px] text-white",
          defaultClassNames.caption_label
        ),
        dropdowns: cn(
          "flex h-8 items-center justify-center gap-1 text-sm font-medium text-white",
          defaultClassNames.dropdowns
        ),

        /* Grid */
        month_grid: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 text-center text-[12px] uppercase tracking-[0.08em] text-white/40 font-body pb-3",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-[2px]", defaultClassNames.week),

        /* Day cell */
        day: cn(
          "relative flex-1 aspect-square p-0 text-center",
          "[&:first-child[data-selected=true]_button]:rounded-l-full",
          "[&:last-child[data-selected=true]_button]:rounded-r-full",
          defaultClassNames.day
        ),

        /* State modifiers */
        today: cn(
          "rounded-full [&>button]:font-semibold [&>button]:text-gold-accent",
          defaultClassNames.today
        ),
        outside: cn("opacity-30", defaultClassNames.outside),
        disabled: cn("opacity-25 cursor-not-allowed", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        range_start: cn("bg-burg-deep/30 rounded-l-full", defaultClassNames.range_start),
        range_middle: cn("bg-burg-deep/15 rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-burg-deep/30 rounded-r-full", defaultClassNames.range_end),

        ...classNames,
      }}
      components={{
        Root: ({ className: rootCn, rootRef, ...rootProps }) => (
          <div data-slot="calendar" ref={rootRef} className={cn(rootCn)} {...rootProps} />
        ),
        Chevron: ({ orientation, className: chevCn, ...chevProps }) => {
          if (orientation === "left")
            return <ChevronLeftIcon className={cn("w-4 h-4", chevCn)} {...chevProps} />;
          if (orientation === "right")
            return <ChevronRightIcon className={cn("w-4 h-4", chevCn)} {...chevProps} />;
          return <ChevronDownIcon className={cn("w-4 h-4", chevCn)} {...chevProps} />;
        },
        DayButton: CalendarDayButton,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const isSelectedSingle =
    modifiers.selected &&
    !modifiers.range_start &&
    !modifiers.range_end &&
    !modifiers.range_middle;

  return (
    <button
      ref={ref}
      data-day={day.date.toLocaleDateString()}
      data-selected-single={isSelectedSingle}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        // Base
        "w-full aspect-square flex items-center justify-center rounded-full text-[15px] font-body transition-all duration-150 outline-none",
        // Default state
        "text-white/75 hover:bg-white/10 hover:text-white",
        // Selected single
        "data-[selected-single=true]:bg-burg-deep data-[selected-single=true]:text-white data-[selected-single=true]:shadow-[0_2px_8px_rgba(92,24,40,0.45)]",
        // Range start / end
        "data-[range-start=true]:bg-burg-deep data-[range-start=true]:text-white data-[range-start=true]:rounded-full",
        "data-[range-end=true]:bg-burg-deep data-[range-end=true]:text-white data-[range-end=true]:rounded-full",
        // Range middle
        "data-[range-middle=true]:bg-transparent data-[range-middle=true]:text-white data-[range-middle=true]:rounded-none",
        // Focus ring
        "focus-visible:ring-2 focus-visible:ring-burg-deep/60 focus-visible:ring-offset-1",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar };

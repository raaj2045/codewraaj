import * as React from "react";
import { cn } from "@/lib/utils";

const Dock = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group flex h-[5.5rem] items-center justify-center gap-4 rounded-2xl border-2 border-black dark:border-white bg-white/80 px-4 dark:bg-black/80 backdrop-blur-sm transition-all duration-300 hover:gap-6",
      className
    )}
    {...props}
  />
));
Dock.displayName = "Dock";

const DockItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "group/item relative flex h-14 w-14 items-center justify-center rounded-lg p-1.5 pixel-borders transition-all duration-300 ease-spring hover:h-20 hover:w-20 hover:-translate-y-4 hover:z-10 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
      className
    )}
    style={{
      transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      padding: "0.75rem"
    }}
    {...props}
  />
));
DockItem.displayName = "DockItem";

const DockIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-full w-full transition-all duration-300", className)}
    {...props}
  />
));
DockIcon.displayName = "DockIcon";

const DockLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute -top-12 left-1/2 -translate-x-1/2 rounded-md bg-black dark:bg-white px-3 py-1.5 text-sm text-white dark:text-black font-pixel opacity-0 scale-95 -translate-y-1 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:translate-y-0 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.6)] whitespace-nowrap pointer-events-none",
      className
    )}
    {...props}
  />
));
DockLabel.displayName = "DockLabel";

export { Dock, DockItem, DockIcon, DockLabel };

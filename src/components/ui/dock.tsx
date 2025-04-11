
import * as React from "react";
import { cn } from "@/lib/utils";

const Dock = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group flex h-[4.5rem] items-center justify-center gap-2 rounded-2xl border-2 border-black dark:border-white bg-white/80 px-2 dark:bg-black/80 backdrop-blur-md",
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
      "flex h-12 w-12 items-center justify-center rounded-lg p-1.5 pixel-borders transition-all duration-300 hover:scale-110 group-hover:[&:not(:hover)]:opacity-80",
      className
    )}
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
    className={cn("h-full w-full", className)}
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
      "absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black/80 dark:bg-white/80 px-2 py-1 text-xs text-white dark:text-black font-pixel opacity-0 transition-opacity duration-300 group-hover:opacity-100",
      className
    )}
    {...props}
  />
));
DockLabel.displayName = "DockLabel";

export { Dock, DockItem, DockIcon, DockLabel };

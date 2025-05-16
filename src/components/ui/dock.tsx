import * as React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Dock = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const isMobile = useIsMobile();
  
  return (
    <div
      ref={ref}
      className={cn(
        "group flex items-center justify-center gap-4 rounded-2xl border-2 border-black dark:border-white bg-white/80 px-4 dark:bg-black/80 backdrop-blur-sm transition-all duration-300",
        isMobile ? "h-16 gap-2" : "h-[5.5rem] hover:gap-6",
        className
      )}
      {...props}
    />
  );
});
Dock.displayName = "Dock";

const DockItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  const isMobile = useIsMobile();
  
  return (
    <a
      ref={ref}
      className={cn(
        "group/item relative flex items-center justify-center rounded-lg pixel-borders transition-all duration-300 ease-spring",
        isMobile 
          ? "h-12 w-12 active:scale-95 active:-translate-y-1 touch-manipulation"
          : "h-14 w-14 hover:h-20 hover:w-20 hover:-translate-y-4 hover:z-10 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
        className
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        padding: isMobile ? "0.5rem" : "0.75rem"
      }}
      {...props}
    />
  );
});
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
>(({ className, ...props }, ref) => {
  const isMobile = useIsMobile();
  
  return (
    <div
      ref={ref}
      className={cn(
        "absolute pointer-events-none z-50 -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-3 py-2 opacity-0 transition-opacity duration-300",
        isMobile ? "group-active/item:opacity-100" : "group-hover/item:opacity-100",
        className
      )}
      {...props}
    />
  );
});
DockLabel.displayName = "DockLabel";

export { Dock, DockItem, DockIcon, DockLabel };

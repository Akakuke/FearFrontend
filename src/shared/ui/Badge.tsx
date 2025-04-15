import { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, ...props }, ref) => (
    <div
      className={twMerge("bg-[#37373e] flex p-2 mx-2 rounded-2xl", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

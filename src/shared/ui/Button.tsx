import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <button
      className={twMerge(
        "bg-[#007BFF] hover:opacity-90 hover:bg-[#0056b3] cursor-pointer text-white px-2 py-2 rounded-2xl  ",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

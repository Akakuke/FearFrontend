import { forwardRef, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}



export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={twMerge(
        "bg-[#302e2e] text-white text-center cursor-pointer w-[300px] h-[200px] flex flex-col rounded-[10px] p-[20px] m-[15px] items-center border-[#2b2929] border-[2px] ", className
      )}
    >
      {children}
    </div>
  )
);


export const CardNickName = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={twMerge(
        " text-white font-bold text-[18px] mb-[10px]  ",
        className
      )}
    >
      {children}
    </div>
  )
);

export const CardPosition = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={twMerge(" text-white text-[18px] ", className)}
    >
      {children}
    </div>
  )
);


import { forwardRef, HTMLAttributes, ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

interface CardImage extends ImgHTMLAttributes<HTMLImageElement> {}

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

export const Photo = forwardRef<HTMLImageElement, CardImage>(
  ({ className, children, ...props }, ref) => (
    <div>
      <img
        {...props}
        ref={ref}
        className={twMerge(
          "w-20 h-20 mb-[10px] mt-[10px] object-cover rounded-full ",
          className
        )}
      />
    </div>
  )
);

export const NickName = forwardRef<HTMLDivElement, CardProps>(
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

export const Position = forwardRef<HTMLDivElement, CardProps>(
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

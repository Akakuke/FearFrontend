import { forwardRef, ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Avatar = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...props }, ref) => (
    <img
      {...props}
      ref={ref}
      className={twMerge("size-11 object-cover rounded-full ", className)}
    />
  )
);

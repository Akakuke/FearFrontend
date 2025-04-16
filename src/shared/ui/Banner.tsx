import { ImgHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface BannerProps extends ImgHTMLAttributes<HTMLImageElement> {}
export const Banner = forwardRef<HTMLImageElement, BannerProps>(
  ({ className, ...props }, ref) => (
    <img {...props} ref={ref} className={twMerge("size-20", className)} />
  )
);

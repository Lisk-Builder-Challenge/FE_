import React from "react";
import { cn } from "@/app/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium text-sm transition-colors";
  const variants = {
    default: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700",
    outline: "h-9 px-4 py-2 rounded-lg outline outline-1 outline-offset-[-0.98px] outline-white/60 inline-flex justify-start items-center gap-3 text-xs font-medium leading-tight text-white/60 font-['Inter'] hover:bg-gray-700"
  };

  return (
    <button
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    />
  );
}

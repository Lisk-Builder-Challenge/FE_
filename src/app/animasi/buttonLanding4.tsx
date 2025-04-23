import React from "react";
import { cn } from "@/app/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium text-sm transition-colors";
  const variants = {
    default: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700",
  };

  return (
    <button
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    />
  );
}

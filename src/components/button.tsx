import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { PropsWithChildren, ReactElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<{
    asChild?: boolean;
    className?: string;
  }>
>(function ({ asChild = false, children, className, ...props }, ref) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={twMerge(
        clsx(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors [&+&]:ml-2",
          "bg-gray-400/20 hover:bg-gray-400/60 hover:text-white",
          "h-9 px-4 py-2",
          className,
        ),
      )}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = "Button";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-tl-xl rounded-br-xl whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[--accent] text-primary-foreground hover:border hover:border-[--accent] dark:hover:border-0 hover:bg-white hover:text-[--accent] hover:shadow transition-all dark:hover:opacity-100 dark:hover:bg-white dark:hover:text-[--accent]",
        defaultNoborder:
          "bg-[--accent] text-primary-foreground hover:bg-white hover:text-[--accent] hover:shadow transition-all dark:hover:opacity-100 dark:hover:bg-white dark:hover:text-[--accent]",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        language:
          "text-primary underline-offset-4 hover:underline dark:text-white transition-all duration-1000",
      },
      size: {
        default:
          "text-md h-11 px-8 min-[2000px]:px-10 min-[2000px]:h-16 min-[2000px]:text-2xl min-[2000px]:text-xl",
        sm: "h-11 px-0",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

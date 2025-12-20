import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // === DEFAULT (for general use) ===
        default: "bg-transparent border-2 border-[#3FE0F0] text-[#3FE0F0] hover:bg-[#3FE0F0]/10 hover:shadow-[0_0_30px_-5px_rgba(63,224,240,0.5)]",
        
        // === DESTRUCTIVE ===
        destructive: "bg-transparent border-2 border-destructive text-destructive hover:bg-destructive/10",
        
        // === OUTLINE ===
        outline: "bg-transparent border-2 border-[#3FE0F0] text-[#3FE0F0] hover:bg-[#3FE0F0]/10",
        
        // === SECONDARY (Soft Blue - #4DA3FF) ===
        secondary: "bg-transparent border-2 border-[#4DA3FF] text-[#4DA3FF] hover:bg-[#4DA3FF]/10 hover:shadow-[0_0_30px_-5px_rgba(77,163,255,0.5)]",
        
        // === GHOST ===
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        
        // === LINK ===
        link: "text-[#3FE0F0] underline-offset-4 hover:underline",
        
        // === HERO PRIMARY (Electric Cyan - for DARK sections) ===
        // Used on dark backgrounds - white/cyan text visible
        heroPrimary: "bg-transparent border-2 border-[#3FE0F0] text-[#3FE0F0] hover:bg-[#3FE0F0]/10 hover:shadow-[0_0_30px_-5px_rgba(63,224,240,0.5)]",
        
        // === HERO SECONDARY (Soft Blue - #4DA3FF) ===
        heroSecondary: "bg-transparent border-2 border-[#4DA3FF] text-[#4DA3FF] hover:bg-[#4DA3FF]/10 hover:shadow-[0_0_30px_-5px_rgba(77,163,255,0.5)]",
        
        // === HERO DARK (For DARK section backgrounds) ===
        // Cyan border with cyan text - visible on dark backgrounds
        heroDark: "bg-transparent border-2 border-[#3FE0F0] text-[#3FE0F0] hover:bg-[#3FE0F0]/10 hover:shadow-[0_0_30px_-5px_rgba(63,224,240,0.5)]",
        
        // === HERO LIGHT (For LIGHT section backgrounds) ===
        // Cyan border with dark text - visible on light backgrounds
        heroLight: "bg-transparent border-2 border-[#3FE0F0] text-[#111827] hover:bg-[#3FE0F0]/10 hover:shadow-[0_0_30px_-5px_rgba(63,224,240,0.5)]",
        
        // === NAV CTA ===
        navCta: "bg-transparent border border-[#3FE0F0] text-[#3FE0F0] hover:bg-[#3FE0F0]/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
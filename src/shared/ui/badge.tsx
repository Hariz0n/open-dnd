import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared";

const badgeVariants = cva(
  "flex items-center justify-center h-8 w-8 rounded-lg text-our-white",
  {
    variants: {
      variant: {
        default: "bg-our-blue",
        destructive:
          "bg-our-red",
        shadow: "bg-our-gray",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

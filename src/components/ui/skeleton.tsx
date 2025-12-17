import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"

const skeletonVariants = cva(
  "relative overflow-hidden rounded-md bg-muted before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
  {
    variants: {
      variant: {
        default: "",
        pulse: "animate-pulse",
        wave: "before:animate-[shimmer_1.5s_ease-in-out_infinite]",
        none: "before:hidden",
      },
      speed: {
        slow: "before:animate-[shimmer_3s_infinite]",
        normal: "before:animate-[shimmer_2s_infinite]",
        fast: "before:animate-[shimmer_1s_infinite]",
      },
    },
    defaultVariants: {
      variant: "default",
      speed: "normal",
    },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof skeletonVariants> {
  /** Show skeleton (useful for conditional rendering) */
  show?: boolean
  /** Accessible label for screen readers */
  label?: string
}

function Skeleton({
  className,
  variant,
  speed,
  show = true,
  label = "Loading content",
  ...props
}: SkeletonProps) {
  if (!show) return null

  return (
    <div
      role="status"
      aria-label={label}
      aria-live="polite"
      aria-busy="true"
      className={cn(
        skeletonVariants({ variant, speed }),
        // Performance optimization: CSS containment
        "contain-layout contain-paint",
        // Respect user's motion preferences
        "motion-reduce:before:animate-none motion-reduce:animate-none",
        className
      )}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  )
}

export { Skeleton, skeletonVariants }

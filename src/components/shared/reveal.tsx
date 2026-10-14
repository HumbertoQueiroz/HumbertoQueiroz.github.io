import type { ComponentProps } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

/** Entrada suave (fade + subida) quando o bloco aparece na tela. Respeita prefers-reduced-motion. */
export function Reveal({ className, ...props }: ComponentProps<"div">) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-safe:translate-y-6 motion-safe:opacity-0",
        inView && "motion-safe:translate-y-0 motion-safe:opacity-100",
        className,
      )}
      {...props}
    />
  )
}

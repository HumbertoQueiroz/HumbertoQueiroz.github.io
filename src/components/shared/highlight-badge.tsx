import type { ComponentProps } from "react"
import { Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Selo de reconhecimento (prêmio, competição). Os cantos são arredondados, mas não em pílula,
 * para o texto poder quebrar em duas linhas no celular sem ficar torto.
 */
export function HighlightBadge({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "inline-flex max-w-full items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-1.5 text-center text-sm leading-snug text-brand-cream ring-1 ring-white/20",
        className,
      )}
      {...props}
    >
      <Trophy aria-hidden="true" className="size-4 shrink-0" />
      <span>{children}</span>
    </p>
  )
}

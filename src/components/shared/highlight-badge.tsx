import type { ComponentProps } from "react"
import { Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Selo de reconhecimento (prêmio, competição). O ícone fica dentro do texto, então ícone e texto
 * centralizam juntos mesmo quando a frase quebra em duas linhas no celular.
 */
export function HighlightBadge({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "inline-block max-w-full rounded-2xl bg-white/10 px-4 py-1.5 text-center text-sm leading-snug text-brand-cream ring-1 ring-white/20",
        className,
      )}
      {...props}
    >
      <Trophy aria-hidden="true" className="mr-2 inline size-4 -translate-y-px align-middle" />
      {children}
    </p>
  )
}

import { Sparkle } from "lucide-react"
import { cn } from "@/lib/utils"

interface PagerDotsProps {
  count: number
  selected: number
  onSelect: (index: number) => void
  /** Texto acessível de cada indicador. */
  labelFor: (index: number) => string
  className?: string
}

/** Indicadores de página: bolinhas, com uma estrela no item ativo (como no Figma). */
export function PagerDots({ count, selected, onSelect, labelFor, className }: PagerDotsProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)} role="group" aria-label="Escolher tela">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={labelFor(index)}
          aria-current={index === selected}
          className="group flex size-5 items-center justify-center text-white transition-transform hover:scale-125 focus-visible:outline-2 focus-visible:outline-white"
        >
          {index === selected ? (
            <Sparkle className="size-5 fill-white" />
          ) : (
            <span className="size-2 rounded-full bg-white/60 transition-colors group-hover:bg-white" />
          )}
        </button>
      ))}
    </div>
  )
}

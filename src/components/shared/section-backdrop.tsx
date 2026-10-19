import { cn } from "@/lib/utils"

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const

/** Linhas curvas bem sutis que decoram o fundo das seções (como no Figma). */
export function SectionBackdrop({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1000 600"
      className={cn("pointer-events-none absolute text-white/[0.07]", className)}
    >
      <g {...stroke}>
        <circle cx="880" cy="520" r="220" />
        <circle cx="880" cy="520" r="340" />
        <circle cx="880" cy="520" r="460" />
        <circle cx="120" cy="60" r="180" />
        <circle cx="120" cy="60" r="300" />
      </g>
    </svg>
  )
}

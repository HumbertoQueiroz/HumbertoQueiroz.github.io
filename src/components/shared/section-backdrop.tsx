import { cn } from "@/lib/utils"

interface SectionBackdropProps {
  variant: "capsules" | "arcs"
  className?: string
}

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const

/** Desenhos em contorno bem sutis que decoram o fundo das seções escuras (como no Figma). */
export function SectionBackdrop({ variant, className }: SectionBackdropProps) {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox={variant === "capsules" ? "0 0 160 340" : "0 0 1000 600"}
      className={cn("pointer-events-none absolute text-white/[0.07]", className)}
    >
      {variant === "capsules" ? (
        <g {...stroke}>
          <circle cx="62" cy="40" r="24" />
          <rect x="38" y="82" width="48" height="130" rx="24" />
          <circle cx="24" cy="238" r="22" />
          <rect x="2" y="268" width="44" height="70" rx="22" />
          <rect x="96" y="150" width="44" height="120" rx="22" />
        </g>
      ) : (
        <g {...stroke}>
          <circle cx="880" cy="520" r="220" />
          <circle cx="880" cy="520" r="340" />
          <circle cx="880" cy="520" r="460" />
          <circle cx="120" cy="60" r="180" />
          <circle cx="120" cy="60" r="300" />
        </g>
      )}
    </svg>
  )
}

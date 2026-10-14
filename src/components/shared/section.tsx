import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import type { SectionId } from "@/types"

const sectionVariants = cva(
  "relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-24 md:px-[4.75rem] lg:py-[3.5rem]",
  {
    variants: {
      tone: {
        dark: "bg-surface",
        purple: "surface-purple",
        purpleRise: "surface-purple-rise",
        purpleSide: "surface-purple-side",
      },
    },
    defaultVariants: { tone: "dark" },
  },
)

interface SectionProps
  extends Omit<ComponentProps<"section">, "id">,
    VariantProps<typeof sectionVariants> {
  id: SectionId
}

/** Bloco de página em tela cheia. O título da seção deve usar o id `${id}-title`. */
export function Section({ id, tone, className, ...props }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(sectionVariants({ tone }), className)}
      {...props}
    />
  )
}

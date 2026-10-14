import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import type { SectionId } from "@/types"

interface SectionTitleProps extends ComponentProps<"h2"> {
  sectionId: SectionId
}

export function SectionTitle({ sectionId, className, ...props }: SectionTitleProps) {
  return (
    <h2
      id={`${sectionId}-title`}
      className={cn("text-[2.75rem] leading-none font-bold text-brand-cream md:text-[4.5rem]", className)}
      {...props}
    />
  )
}

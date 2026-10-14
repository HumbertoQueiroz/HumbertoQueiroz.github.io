import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { SmartLink } from "@/components/shared/smart-link"
import { cn } from "@/lib/utils"

/**
 * Botão-link com o acabamento do Figma: cantos em diagonal (superior esquerdo e inferior direito
 * bem arredondados; superior direito e inferior esquerdo quase retos), sem contorno e com sombra suave.
 */
const buttonLinkVariants = cva(
  "inline-flex items-center justify-center font-semibold whitespace-nowrap transition focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",
  {
    variants: {
      tone: {
        cream: "bg-brand-cream text-brand-purple shadow-[0_0.5rem_1rem_rgb(0_0_0/0.3)] hover:bg-white",
        purple:
          "bg-linear-to-r from-[#7226ff] to-[#4a1ba8] text-brand-cream shadow-[0_0.5rem_1rem_rgb(0_0_0/0.35)] hover:brightness-110",
        glass: "bg-white/10 text-brand-cream ring-1 ring-white/25 hover:bg-white/20",
      },
      size: {
        default:
          "h-10 rounded-[1.1rem_0.3rem_1.1rem_0.3rem] px-6 text-sm lg:h-[2.95rem] lg:min-w-[15rem] lg:text-[1.05rem]",
        sm: "h-9 rounded-[0.9rem_0.25rem_0.9rem_0.25rem] px-8 text-[0.8rem] lg:h-[2.25rem] lg:px-[2.4rem]",
        xs: "h-8 gap-2 rounded-[0.8rem_0.25rem_0.8rem_0.25rem] px-4 text-[0.8rem] font-medium",
      },
    },
    defaultVariants: { tone: "cream", size: "default" },
  },
)

type ButtonLinkProps = ComponentProps<"a"> & VariantProps<typeof buttonLinkVariants>

export function ButtonLink({ tone, size, className, ...props }: ButtonLinkProps) {
  return <SmartLink className={cn(buttonLinkVariants({ tone, size }), className)} {...props} />
}

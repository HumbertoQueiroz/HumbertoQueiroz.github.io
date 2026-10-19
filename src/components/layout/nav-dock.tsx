import { useActiveSection } from "@/hooks/use-active-section"
import { navItems } from "@/data/profile"
import { useT } from "@/i18n/locale"
import { cn } from "@/lib/utils"
import type { SectionId } from "@/types"

const sectionIds: SectionId[] = navItems.map((item) => item.id)

/**
 * Menu em pílula creme com anel branco fino.
 * Celular: horizontal embaixo; o item ativo vira um círculo roxo.
 * Tablet e desktop: vertical à direita; o item ativo vira uma pílula roxa alta com o nome na vertical.
 *
 * Na troca de seção, o item que fecha e o que abre animam juntos: o roxo é uma camada que faz fade
 * (um degradê não anima sozinho), o item corta o que passa da borda e o nome entra depois de abrir.
 */
export function NavDock() {
  const t = useT()
  const active = useActiveSection(sectionIds)

  return (
    <nav
      aria-label={t.nav.label}
      className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-fit flex-row gap-1.5 rounded-full bg-brand-cream p-1.5 shadow-xl shadow-black/40 ring-2 ring-white/70 md:inset-x-auto md:top-1/2 md:right-4 md:bottom-auto md:flex-col md:-translate-y-1/2 lg:right-[2.5rem] lg:gap-[0.4rem]"
    >
      {navItems.map(({ id, icon: Icon }) => {
        const label = t.nav[id]
        const isActive = id === active
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "relative flex size-10 max-[359px]:size-9 shrink-0 flex-col items-center justify-center overflow-hidden rounded-full border border-brand-purple/20 bg-white/40 text-brand-purple transition-[height,color,border-color,box-shadow] duration-300 ease-out hover:bg-brand-purple/10 focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:outline-none md:size-11 lg:size-[2.9rem]",
              isActive &&
                "border-transparent text-white shadow-md shadow-brand-purple/40 md:h-32 md:justify-start md:pt-3 lg:h-[9.2rem] lg:pt-[0.75rem]",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-0 rounded-full bg-linear-to-b from-[#6a2cf0] to-[#4a17c9] opacity-0 transition-opacity duration-300",
                isActive && "opacity-100",
              )}
            />
            <Icon className="relative size-[18px] shrink-0 lg:size-[1.4rem]" strokeWidth={1.75} />
            {/* O nome ocupa o espaço restante e fica centralizado na vertical, abaixo do ícone. */}
            {isActive && (
              <span className="relative hidden flex-1 rotate-180 items-center justify-center text-[0.7rem] font-medium tracking-wide whitespace-nowrap [writing-mode:vertical-rl] animate-in fade-in duration-300 fill-mode-both delay-200 md:flex lg:text-[0.8rem]">
                {label}
              </span>
            )}
          </a>
        )
      })}
    </nav>
  )
}

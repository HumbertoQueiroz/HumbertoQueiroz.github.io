import { useLocale, type Locale } from "@/i18n/locale"
import { cn } from "@/lib/utils"

const options: { locale: Locale; label: string; name: string }[] = [
  { locale: "pt", label: "PT", name: "Português" },
  { locale: "en", label: "EN", name: "English" },
]

/** Alternador de idioma fino, em vidro translúcido; só o idioma ativo ganha o sublinhado. */
export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      role="group"
      aria-label={t.topBar.language}
      className="pointer-events-auto ml-auto flex items-center rounded-full bg-white/10 px-1 text-[0.7rem] font-medium tracking-[0.18em] text-brand-cream ring-1 ring-white/25 backdrop-blur-sm md:text-xs lg:text-[0.8rem]"
    >
      {options.map(({ locale: option, label, name }, index) => {
        const isActive = option === locale
        return (
          <div key={option} className="flex items-center">
            {index > 0 && <span aria-hidden="true" className="h-3 w-px bg-white/30" />}
            <button
              type="button"
              lang={option}
              title={name}
              aria-label={name}
              aria-pressed={isActive}
              onClick={() => setLocale(option)}
              className={cn(
                "relative h-8 cursor-pointer rounded-full px-3 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none lg:h-9 lg:px-3.5",
                isActive
                  ? "text-white after:absolute after:inset-x-3 after:bottom-[0.3rem] after:h-px after:bg-[#b79bff] lg:after:inset-x-3.5"
                  : "text-brand-cream/60 hover:text-white",
              )}
            >
              {label}
            </button>
          </div>
        )
      })}
    </div>
  )
}

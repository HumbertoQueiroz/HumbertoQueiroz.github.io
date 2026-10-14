import { LogoMark } from "@/components/shared/logo"
import { SmartLink } from "@/components/shared/smart-link"
import { socialLinks } from "@/data/profile"

export function TopBar() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center gap-3 p-4 md:gap-6 md:p-8 lg:gap-8 lg:px-[4.5rem] lg:pt-[3.5rem] lg:pb-0">
      <a
        href="#inicio"
        aria-label="devhumberto, voltar ao início"
        className="pointer-events-auto text-brand-cream transition-opacity hover:opacity-80"
      >
        <LogoMark className="h-8 md:h-12 lg:h-[3.4rem]" />
      </a>
      <ul
        className="pointer-events-auto flex gap-1.5 rounded-full bg-brand-cream p-1.5 shadow-lg shadow-black/30 ring-2 ring-white/70 lg:gap-[0.45rem] lg:p-[0.45rem]"
        aria-label="Redes sociais"
      >
        {socialLinks.map(({ id, href, icon: Icon, label }) => (
          <li key={id}>
            <SmartLink
              href={href}
              aria-label={id}
              title={label}
              className="flex size-8 items-center justify-center rounded-full bg-brand-purple text-white ring-2 ring-[#9b6bff]/70 transition-transform hover:scale-110 focus-visible:ring-brand-navy focus-visible:outline-none md:size-10 lg:size-[3rem]"
            >
              <Icon className="size-4 md:size-5 lg:size-[1.5rem]" />
            </SmartLink>
          </li>
        ))}
      </ul>
    </header>
  )
}

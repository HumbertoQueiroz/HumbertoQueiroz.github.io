import portrait from "@/assets/humberto-cutout.png"
import { Wordmark } from "@/components/shared/logo"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionBackdrop } from "@/components/shared/section-backdrop"
import { SectionTitle } from "@/components/shared/section-title"
import { SmartLink } from "@/components/shared/smart-link"
import { contactLinks, profile } from "@/data/profile"

const currentYear = new Date().getFullYear()

/** Foto recortada num círculo roxo: a cabeça sai pelo topo, o resto é cortado pela curva. */
function PortraitBadge() {
  return (
    <div className="relative size-52 [clip-path:inset(-60%_0_0_0_round_0_0_50%_50%)] md:size-64 lg:size-[21rem]">
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,var(--color-brand-purple)_10%,#1d0a78_100%)]" />
      <img
        src={portrait}
        alt={`Foto de ${profile.name}`}
        loading="lazy"
        className="absolute bottom-0 left-1/2 w-[108%] max-w-none -translate-x-1/2"
      />
    </div>
  )
}

export function Contact() {
  return (
    <Section id="contato" tone="dark" className="flex-col pb-44 md:pb-24">
      <SectionBackdrop variant="arcs" className="inset-0 size-full" />

      <Reveal className="relative grid w-full max-w-[72rem] items-center justify-items-center gap-10 lg:grid-cols-[auto_1fr] lg:justify-items-start lg:gap-[7.5rem] lg:pr-[4rem]">
        <div className="flex flex-col items-center gap-5">
          <PortraitBadge />
          <Wordmark className="h-12 text-brand-cream lg:h-[3.4rem]" />
        </div>

        <div className="text-center lg:text-left">
          <SectionTitle sectionId="contato">Entre em Contato!</SectionTitle>
          <p className="mx-auto mt-4 max-w-[36rem] text-base text-brand-cream/90 md:text-lg lg:mx-0 lg:text-[1.25rem] lg:leading-[1.6]">
            Para projetos e parcerias, entre em contato por algumas das minhas redes sociais.
          </p>
          <ul className="mt-8 flex flex-col items-center gap-4 lg:mt-10 lg:items-start lg:gap-[2.4rem]">
            {contactLinks.map(({ id, label, href, icon: Icon }) => (
              <li key={id}>
                <SmartLink
                  href={href}
                  className="group inline-flex items-center gap-4 font-mono text-base text-brand-cream transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple md:text-lg lg:gap-[1.4rem] lg:text-[1.15rem]"
                >
                  <span className="flex size-11 items-center justify-center rounded-[0.4rem] bg-brand-purple text-white shadow-[0_0.2rem_0.6rem_rgb(0_0_0/0.45)] ring-1 ring-[#a98bff]/60 transition-transform group-hover:scale-110 lg:size-[3.3rem]">
                    <Icon className="size-5 lg:size-[1.9rem]" />
                  </span>
                  {label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <footer className="absolute inset-x-0 bottom-20 text-center text-xs text-brand-cream/50 md:bottom-6">
        © {currentYear} {profile.name} · {profile.location}
      </footer>
    </Section>
  )
}

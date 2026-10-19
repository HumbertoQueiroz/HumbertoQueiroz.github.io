import portrait from "@/assets/humberto-blazer.jpg"
import { Wordmark } from "@/components/shared/logo"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionBackdrop } from "@/components/shared/section-backdrop"
import { SectionTitle } from "@/components/shared/section-title"
import { SmartLink } from "@/components/shared/smart-link"
import { contactLinks, profile } from "@/data/profile"
import { useT } from "@/i18n/locale"

const currentYear = new Date().getFullYear()

/** Foto num círculo, com contorno roxo, enquadrada no rosto. */
function PortraitBadge() {
  const t = useT()

  return (
    <div className="relative size-52 overflow-hidden rounded-full ring-4 ring-brand-purple md:size-64 lg:size-[21rem]">
      <img
        src={portrait}
        alt={t.portraitAlt(profile.name)}
        width={900}
        height={1117}
        loading="lazy"
        className="size-full origin-[50%_22%] scale-[1.35] object-cover object-top"
      />
    </div>
  )
}

export function Contact() {
  const t = useT()

  return (
    <Section id="contato" tone="dark" className="flex-col pb-44 md:pb-24 lg:pb-[3.5rem]">
      <SectionBackdrop className="inset-0 size-full" />

      <Reveal className="relative grid w-full max-w-[72rem] items-center justify-items-center gap-10 lg:grid-cols-[auto_1fr] lg:justify-items-start lg:gap-[7.5rem] lg:pr-[4rem]">
        <div className="flex flex-col items-center gap-5">
          <PortraitBadge />
          <Wordmark className="h-12 text-brand-cream lg:h-[3.4rem]" />
        </div>

        <div className="text-center lg:text-left">
          <SectionTitle sectionId="contato">{t.contact.title}</SectionTitle>
          <p className="mx-auto mt-4 max-w-[36rem] text-base text-brand-cream/90 md:text-lg lg:mx-0 lg:text-[1.25rem] lg:leading-[1.6]">
            {t.contact.text}
          </p>
          <ul className="mx-auto mt-8 flex w-fit max-w-full flex-col items-start gap-4 lg:mx-0 lg:mt-8 lg:gap-[1.5rem]">
            {contactLinks.map(({ id, label, href, icon: Icon }) => (
              <li key={id}>
                <SmartLink
                  href={href}
                  className="group inline-flex max-w-full items-center gap-3 font-mono text-[0.75rem] text-brand-cream min-[360px]:gap-4 min-[360px]:text-sm sm:text-base transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple md:text-lg lg:gap-[1.4rem] lg:text-[1.15rem]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[0.4rem] bg-brand-purple text-white shadow-[0_0.2rem_0.6rem_rgb(0_0_0/0.45)] ring-1 ring-[#a98bff]/60 transition-transform group-hover:scale-110 lg:size-[3.3rem]">
                    <Icon className="size-5 lg:size-[1.9rem]" />
                  </span>
                  <span className="min-w-0 [overflow-wrap:anywhere]">{id === "curriculo" ? t.contact.resume : id === "workana" ? t.contact.workana : label}</span>
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

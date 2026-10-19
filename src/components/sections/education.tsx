import { Trophy } from "lucide-react"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionBackdrop } from "@/components/shared/section-backdrop"
import { SectionTitle } from "@/components/shared/section-title"
import { useT } from "@/i18n/locale"

/** Formação, prêmio, certificados e idiomas, numa seção escura inteira como o Perfil pessoal. */
export function Education() {
  const { trajectory } = useT()

  return (
    <Section id="formacao" tone="dark" className="pb-32 md:pb-24">
      <SectionBackdrop className="inset-0 size-full" />

      <Reveal className="relative w-full max-w-[58rem] text-center">
        <SectionTitle sectionId="formacao" className="lg:text-[4.8rem]">
          {trajectory.education}
        </SectionTitle>

        <ul className="mt-8 grid gap-4 text-left md:grid-cols-2 lg:mt-10" aria-label={trajectory.educationList}>
          {trajectory.educationItems.map((item) => (
            <li key={item.title} className="rounded-3xl border border-white/10 bg-black/25 px-6 py-5 shadow-[0_0_2.5rem_rgb(0_0_0/0.35)] backdrop-blur-sm lg:px-8 lg:py-6">
              <p className="font-mono text-xs tracking-wide text-brand-cream/70 uppercase lg:text-[0.8rem]">{item.period}</p>
              <p className="mt-1 text-lg font-semibold text-brand-cream lg:text-[1.25rem]">{item.title}</p>
              <p className="text-sm text-brand-cream/80 lg:text-base">{item.place}</p>
            </li>
          ))}
        </ul>

        <p className="mt-5 inline-block max-w-full rounded-2xl bg-white/10 px-4 py-1.5 text-sm leading-snug text-brand-cream ring-1 ring-white/20 lg:text-base">
          <Trophy aria-hidden="true" className="mr-2 inline size-4 -translate-y-px align-middle" />
          {trajectory.award}
        </p>

        <div className="mt-6 rounded-3xl border border-white/10 bg-black/25 px-6 py-5 text-left backdrop-blur-sm lg:px-8 lg:py-6">
          <h3 className="text-sm font-semibold tracking-wide text-brand-cream/70 uppercase">{trajectory.certificates}</h3>
          <ul className="mt-3 space-y-1.5 text-sm text-brand-cream/90 lg:text-base">
            {trajectory.certificateItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-sm text-brand-cream/70 lg:text-base">{trajectory.languages}</p>
      </Reveal>
    </Section>
  )
}

import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionBackdrop } from "@/components/shared/section-backdrop"
import { SectionTitle } from "@/components/shared/section-title"
import { useT } from "@/i18n/locale"

/** Experiência profissional em linha do tempo, num cartão como o do Perfil pessoal, sobre o fundo roxo. */
export function Experience() {
  const { trajectory } = useT()

  return (
    <Section id="experiencia" tone="purple" className="pb-32 md:pb-24">
      <SectionBackdrop className="inset-0 size-full" />

      <Reveal className="relative w-full max-w-[58rem] text-center">
        <SectionTitle sectionId="experiencia" className="lg:text-[4.8rem]">
          {trajectory.experience}
        </SectionTitle>

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 px-6 py-8 text-left shadow-[0_0_2.5rem_rgb(0_0_0/0.35)] backdrop-blur-sm md:px-10 md:py-10 lg:mt-10 lg:px-12 lg:py-10">
          <ol className="space-y-6 border-l-2 border-white/30 pl-6 lg:space-y-5" aria-label={trajectory.experienceList}>
            {trajectory.experienceItems.map((item) => (
              <li key={`${item.company}-${item.period}`} className="relative">
                <span aria-hidden="true" className="absolute top-[0.45rem] -left-[1.95rem] size-3 rounded-full bg-brand-cream ring-4 ring-white/25" />
                <p className="font-mono text-xs tracking-wide text-brand-cream/80 uppercase lg:text-[0.8rem]">{item.period}</p>
                <p className="mt-0.5 text-base font-semibold text-brand-cream lg:text-[1.1rem]">
                  {item.role} <span className="font-normal text-brand-cream/85">· {item.company}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-brand-cream/80 lg:text-[0.95rem]">{item.description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-7 text-sm text-brand-cream/80 lg:text-[0.9rem]">{trajectory.before}</p>
        </div>
      </Reveal>
    </Section>
  )
}

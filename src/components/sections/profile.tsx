import { Badge } from "@/components/ui/badge"
import { ButtonLink } from "@/components/shared/button-link"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionBackdrop } from "@/components/shared/section-backdrop"
import { SectionTitle } from "@/components/shared/section-title"
import { profile, resumeUrl } from "@/data/profile"
import { useT } from "@/i18n/locale"

export function Profile() {
  const t = useT()

  return (
    <Section id="perfil" tone="dark">
      <SectionBackdrop className="inset-0 size-full" />

      <Reveal className="relative w-full max-w-[58rem] text-center">
        <SectionTitle sectionId="perfil" className="lg:text-[5.25rem]">
          {t.profile.title}
        </SectionTitle>
        <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 px-6 py-8 text-left text-base leading-[1.8] text-brand-cream shadow-[0_0_2.5rem_rgb(0_0_0/0.35)] backdrop-blur-sm md:px-10 md:py-10 md:text-lg lg:mt-12 lg:px-10 lg:py-12 lg:text-[1.25rem]">
          <p>
            <span className="text-[1.5em] leading-none font-bold text-white">{t.profile.summary[0]}</span>
            {t.profile.summary.slice(1)}
          </p>
        </div>
        <ul className="mx-auto mt-8 flex max-w-[42rem] flex-wrap justify-center gap-2.5" aria-label={t.profile.technologies}>
          {profile.skills.map((skill) => (
            <li key={skill}>
              <Badge variant="outline" className="h-8 border-brand-purple/70 px-4 text-sm text-brand-cream">
                {skill}
              </Badge>
            </li>
          ))}
        </ul>
        <ButtonLink href={resumeUrl} tone="purple" size="sm" className="mt-8">
          {t.profile.resume}
        </ButtonLink>
      </Reveal>
    </Section>
  )
}

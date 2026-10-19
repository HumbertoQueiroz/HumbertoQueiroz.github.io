import { useState } from "react"
import { ButtonLink } from "@/components/shared/button-link"
import { HighlightBadge } from "@/components/shared/highlight-badge"
import { PagerDots } from "@/components/shared/pager-dots"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"
import { useFeaturedProject } from "@/data/use-projects"
import { useT } from "@/i18n/locale"

/**
 * Cartão grande com moldura branca e um "celular" sobreposto (borda preta grossa), como no Figma.
 * Os indicadores trocam o par de telas exibido.
 */
function Showcase() {
  const t = useT()
  const screens = useFeaturedProject().screens
  const [index, setIndex] = useState(1)
  const main = screens[index]
  const phone = screens[(index + 1) % screens.length]

  return (
    <div className="mx-auto w-full max-w-[20rem] md:max-w-[26rem] lg:max-w-[28rem]">
      <div className="relative">
        <div className="aspect-[0.86] rounded-[1rem] border border-[#d9ccff]/70 bg-white p-[0.4rem] shadow-2xl shadow-black/50 lg:p-[0.55rem]">
          <img
            src={main.src}
            alt={main.alt}
            className="size-full rounded-[0.6rem] object-contain object-top"
          />
        </div>
        <div className="absolute right-[-1.5rem] bottom-[-1rem] aspect-[0.58] w-[34%] overflow-hidden rounded-[1.1rem] border-[0.3rem] border-black bg-black shadow-2xl shadow-black/60 lg:right-[-4.75rem] lg:bottom-[-1.4rem] lg:w-[9.5rem] lg:border-[0.35rem]">
          <img src={phone.src} alt={phone.alt} className="size-full rounded-[0.7rem] object-cover object-[50%_35%]" />
        </div>
      </div>
      <PagerDots
        count={screens.length}
        selected={index}
        onSelect={setIndex}
        label={t.featured.chooseScreen}
        labelFor={(i) => t.featured.showScreen(screens[i].title)}
        className="mt-8 lg:mt-10"
      />
    </div>
  )
}

export function Featured() {
  const t = useT()
  const featuredProject = useFeaturedProject()

  return (
    <Section id="destaque" tone="purpleRise" className="lg:justify-start lg:pl-[10.25rem]">
      <Reveal className="grid w-full max-w-[70rem] items-start gap-14 lg:grid-cols-[28rem_1fr] lg:gap-[6.5rem]">
        <div className="order-2 lg:order-1">
          <Showcase />
        </div>

        <div className="order-1 text-center lg:order-2 lg:pt-[1rem] lg:text-left">
          <SectionTitle sectionId="destaque" className="lg:text-[4.8rem]">
            {t.featured.title}
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-[34rem] text-base leading-[1.7] text-brand-cream md:text-lg lg:mx-0 lg:mt-6 lg:max-w-[27rem] lg:text-[1.25rem]">
            {t.featured.now} <strong>{featuredProject.name}</strong>. {featuredProject.summary}
          </p>
          <p className="mx-auto mt-4 max-w-[34rem] text-base leading-[1.7] text-brand-cream md:text-lg lg:mx-0 lg:max-w-[27rem] lg:text-[1.25rem]">
            {t.featured.stack}
          </p>
          {featuredProject.highlight && (
            <HighlightBadge className="mt-5">{featuredProject.highlight}</HighlightBadge>
          )}
          <div>
            <ButtonLink href={featuredProject.links[0]?.href ?? "#projetos"} tone="purple" size="sm" className="mt-6 lg:mt-7">
              {t.featured.cta}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

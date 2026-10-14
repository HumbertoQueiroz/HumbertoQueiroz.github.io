import { GithubIcon } from "@/components/icons/brand-icons"
import { Reveal } from "@/components/shared/reveal"
import { Section } from "@/components/shared/section"
import { SectionTitle } from "@/components/shared/section-title"
import { SmartLink } from "@/components/shared/smart-link"
import { ScreensCarousel } from "@/components/sections/screens-carousel"
import { githubUrl } from "@/data/profile"

export function Projects() {
  return (
    <Section id="projetos" tone="purpleSide" className="py-14 lg:py-[2.5rem]">
      <SmartLink
        href={githubUrl}
        aria-label="Ver meu GitHub" title="Abrir meu GitHub"
        className="absolute top-[4.75rem] left-[5rem] z-20 hidden h-[11.6rem] w-[3.6rem] flex-col items-center rounded-[1.2rem_0.3rem_1.2rem_0.3rem] bg-linear-to-b from-[#6a2cf0] to-[#4a17c9] pt-[0.9rem] text-[0.85rem] font-medium text-white shadow-[0_0_1rem_rgb(114_38_255/0.55)] transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none md:flex"
      >
        <GithubIcon className="size-[1.6rem] shrink-0" />
        {/* O texto ocupa o espaço restante e fica centralizado na vertical, como o menu. */}
        <span className="flex flex-1 rotate-180 items-center justify-center [writing-mode:vertical-rl]">GitHub</span>
      </SmartLink>

      <Reveal className="w-full text-center">
        <SectionTitle sectionId="projetos" className="lg:text-[5.2rem]">
          Meus Projetos
        </SectionTitle>
        <ScreensCarousel />
      </Reveal>
    </Section>
  )
}

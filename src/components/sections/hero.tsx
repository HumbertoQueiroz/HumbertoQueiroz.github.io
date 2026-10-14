import portrait from "@/assets/humberto-cutout.png"
import { ButtonLink } from "@/components/shared/button-link"
import { Section } from "@/components/shared/section"
import { Reveal } from "@/components/shared/reveal"
import { profile } from "@/data/profile"

/** Logo do React em lilás, atrás da foto, como no Figma. */
function AtomBackdrop() {
  return (
    <svg
      viewBox="-12 -12 24 24"
      aria-hidden="true"
      className="absolute right-[-18%] bottom-[2%] size-[20rem] animate-float text-[#8f5cff]/70 motion-reduce:animate-none md:right-[-6%] md:size-[30rem] lg:right-[calc(14%-13rem)] lg:bottom-[calc(23%-13rem)] lg:size-[26rem]"
    >
      <g fill="none" stroke="currentColor" strokeWidth=".65">
        <ellipse rx="10" ry="4" />
        <ellipse rx="10" ry="4" transform="rotate(60)" />
        <ellipse rx="10" ry="4" transform="rotate(120)" />
      </g>
      <circle r="2.6" fill="currentColor" />
    </svg>
  )
}

export function Hero() {
  return (
    <Section id="inicio" tone="purple" className="items-start pt-28 md:pt-36 lg:items-center lg:py-0 short:pt-20 short:md:pt-20">
      <AtomBackdrop />

      <Reveal className="relative z-10 w-full self-start lg:self-center">
        <div className="flex w-fit flex-col items-start lg:items-end">
          <h1
            id="inicio-title"
            className="text-[2.6rem] leading-[1.05] font-bold text-brand-cream sm:text-6xl md:text-[4.2rem] lg:whitespace-nowrap lg:text-[min(4.8rem,5.2vw)] short:text-[2.6rem] short:md:text-[2.6rem]"
          >
            {profile.name}
          </h1>
          <p className="mt-1 text-2xl font-light text-brand-cream md:text-4xl lg:text-[min(3.7rem,4vw)] lg:leading-tight short:text-xl short:md:text-xl">
            {profile.role}
          </p>
          <ButtonLink href="#projetos" className="mt-5 lg:mt-6">
            See My Projects
          </ButtonLink>
        </div>
      </Reveal>

      <img
        src={portrait}
        alt={`${profile.name}, de blazer azul`}
        width={769}
        height={800}
        fetchPriority="high"
        className="pointer-events-none absolute right-0 bottom-0 h-[46%] w-auto max-w-none [mask-image:linear-gradient(to_right,black_84%,transparent_96%)] md:h-[58%] lg:right-[9%] lg:bottom-[-4%] lg:h-[min(76%,42vw)] short:h-[80%] short:md:h-[80%]"
      />
    </Section>
  )
}

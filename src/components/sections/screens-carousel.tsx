import { useEffect, useState } from "react"
import { ChevronsLeft, ChevronsRight, Trophy } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { PagerDots } from "@/components/shared/pager-dots"
import { ProjectLinks } from "@/components/shared/project-links"
import { gallery } from "@/data/projects"
import { cn } from "@/lib/utils"

/** Começa no segundo slide para os vizinhos aparecerem dos dois lados. */
const START_INDEX = 1
const LAST_INDEX = gallery.length - 1

/** Escala do cartão conforme a distância até o slide ativo: 0, 1, 2+ (leque do Figma). */
const FAN_SCALE = [1, 0.86, 0.69]

/** Largura do cartão por formato da tela (celular em pé é mais estreito que painel/web). */
const CARD_WIDTH = {
  landscape: "w-[14rem] md:w-[18rem] lg:w-[22rem]",
  portrait: "w-[8rem] md:w-[10.5rem] lg:w-[12.2rem]",
} as const
const CARD_ASPECT = { landscape: "aspect-[216/255]", portrait: "aspect-[540/1170]" } as const

/**
 * As setas ficam fora da área do leque (nunca sobre os cartões) e longe do menu lateral.
 * No celular não há setas: o leque desliza com o dedo e os indicadores trocam a tela.
 * Só os 2 cartões vizinhos de cada lado ficam visíveis (1 no celular); os demais ficam ocultos,
 * assim o leque tem largura limitada e sobra margem para as setas.
 */
const arrowClass =
  "absolute top-1/2 z-40 hidden md:block -translate-y-1/2 text-brand-cream/80 transition hover:scale-110 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-30"

/**
 * Carrossel em leque: cartão central em destaque e vizinhos menores, sobrepostos.
 * Cada slide é estreito (só o espaçamento entre os cartões) e o cartão fica centralizado nele,
 * assim o Embla centraliza o cartão ativo com precisão, sem margens negativas.
 */
export function ScreensCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(START_INDEX)

  useEffect(() => {
    if (!api) return
    const sync = () => setSelected(api.selectedScrollSnap())
    sync()
    api.on("select", sync)
    return () => {
      api.off("select", sync)
    }
  }, [api])

  const current = gallery[selected]

  return (
    <div className="w-full">
      <div className="relative mt-4 w-full lg:mt-[1rem]">
        <button
          type="button"
          aria-label="Anterior"
          disabled={selected === 0}
          onClick={() => api?.scrollPrev()}
          className={cn(arrowClass, "left-0 md:left-[3%] lg:left-[10%]")}
        >
          <ChevronsLeft className="size-8 lg:size-[2.1rem]" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Próximo"
          disabled={selected === LAST_INDEX}
          onClick={() => api?.scrollNext()}
          className={cn(arrowClass, "right-0 md:right-[3%] lg:right-[10%]")}
        >
          <ChevronsRight className="size-8 lg:size-[2.1rem]" strokeWidth={1.5} />
        </button>

        <Carousel
          setApi={setApi}
          opts={{ align: "center", containScroll: false, startIndex: START_INDEX }}
          aria-label="Telas dos projetos"
        >
          <CarouselContent className="ml-0 h-[19rem] md:h-[24rem] lg:h-[27rem]">
            {gallery.map((screen, index) => {
              const distance = Math.abs(index - selected)
              return (
                <CarouselItem
                  key={screen.src}
                  className={cn(
                    "relative h-full basis-[4.75rem] pl-0 md:basis-[6.25rem] lg:basis-[9.6rem]",
                    distance === 2 && "max-md:invisible",
                    distance > 2 && "invisible",
                  )}
                  style={{ zIndex: 30 - distance * 10 }}
                >
                  <button
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Ver ${screen.title}`}
                    style={{
                      transform: `translate(-50%, -50%) scale(${FAN_SCALE[Math.min(distance, FAN_SCALE.length - 1)]})`,
                    }}
                    className={cn(
                      "absolute top-1/2 left-1/2 block rounded-[1rem] border border-[#d9ccff]/70 bg-white p-[0.35rem] shadow-2xl shadow-black/50 transition duration-500 lg:p-[0.5rem]",
                      CARD_WIDTH[screen.orientation],
                      distance === 0 ? "cursor-default" : "hover:brightness-110",
                    )}
                  >
                    <img
                      src={screen.src}
                      alt={screen.alt}
                      loading="lazy"
                      className={cn(
                        "w-full rounded-[0.6rem] object-cover object-top",
                        CARD_ASPECT[screen.orientation],
                      )}
                    />
                  </button>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="mt-3 flex flex-col items-center gap-2 text-center" aria-live="polite">
        <p className="text-sm text-brand-cream lg:text-[0.95rem]">
          <span className="font-mono tracking-wider text-brand-cream/70 uppercase">{current.projectName}</span>
          <span className="mx-2 text-brand-cream/50">·</span>
          <span className="font-semibold">{current.title}</span>
        </p>
        <p className="max-w-lg px-6 text-sm text-brand-cream/80 lg:text-[0.85rem]">{current.description}</p>
        {current.highlight && (
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-brand-cream ring-1 ring-white/20">
            <Trophy className="size-3.5" />
            {current.highlight}
          </p>
        )}
        <ProjectLinks links={current.links} />
      </div>

      <PagerDots
        count={gallery.length}
        selected={selected}
        onSelect={(i) => api?.scrollTo(i)}
        labelFor={(i) => `Ir para ${gallery[i].title}`}
        className="mt-3"
      />
    </div>
  )
}

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react"
import { ChevronsLeft, ChevronsRight } from "lucide-react"
import { HighlightBadge } from "@/components/shared/highlight-badge"
import { PagerDots } from "@/components/shared/pager-dots"
import { ProjectLinks } from "@/components/shared/project-links"
import { GALLERY_SIZE, useGallery } from "@/data/use-projects"
import { useT } from "@/i18n/locale"
import { cn } from "@/lib/utils"

const TOTAL = GALLERY_SIZE
const HALF = Math.floor(TOTAL / 2)

/** Começa no segundo slide para os vizinhos aparecerem dos dois lados. */
const START_INDEX = 1

/** Escala do cartão conforme a distância até o ativo: 0, 1, 2 (leque do Figma). */
const FAN_SCALE = [1, 0.86, 0.69]

/** Deslocamento mínimo (px) para um gesto de deslizar valer como troca de tela. */
const SWIPE_THRESHOLD = 40

/** Largura do cartão por formato da tela (celular em pé é mais estreito que painel/web). */
const CARD_WIDTH = {
  landscape: "w-[14rem] md:w-[18rem] lg:w-[20.5rem]",
  portrait: "w-[8rem] md:w-[10.5rem] lg:w-[11.2rem]",
} as const
const CARD_ASPECT = { landscape: "aspect-[216/255]", portrait: "aspect-[540/1170]" } as const

/** As setas ficam fora da área do leque e longe do menu lateral. No celular não há setas: desliza-se com o dedo. */
const arrowClass =
  "absolute top-1/2 z-40 hidden -translate-y-1/2 text-brand-cream/80 transition hover:scale-110 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none md:block"

/** Posição circular de um cartão em relação ao ativo: de -HALF a +HALF, passando pelo começo e pelo fim. */
function offsetFrom(index: number, selected: number) {
  return ((index - selected + TOTAL + HALF) % TOTAL) - HALF
}

/**
 * Carrossel infinito em leque: o cartão ativo no centro e os vizinhos menores, sobrepostos.
 * Cada cartão é posicionado pelo seu deslocamento circular, então depois do último vem o primeiro.
 * Só 2 vizinhos de cada lado ficam visíveis (1 no celular); os demais esperam invisíveis do outro lado.
 */
export function ScreensCarousel() {
  const t = useT()
  const gallery = useGallery()
  const [selected, setSelected] = useState(START_INDEX)
  const dragStart = useRef<number | null>(null)

  const goTo = (index: number) => setSelected(((index % TOTAL) + TOTAL) % TOTAL)
  const next = () => goTo(selected + 1)
  const prev = () => goTo(selected - 1)

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") next()
    if (event.key === "ArrowLeft") prev()
  }
  const onPointerDown = (event: PointerEvent) => {
    dragStart.current = event.clientX
  }
  const onPointerUp = (event: PointerEvent) => {
    if (dragStart.current === null) return
    const delta = event.clientX - dragStart.current
    dragStart.current = null
    if (Math.abs(delta) > SWIPE_THRESHOLD) (delta < 0 ? next : prev)()
  }

  const current = gallery[selected]

  return (
    <div className="w-full">
      <div className="relative mt-4 w-full lg:mt-[1.5rem]">
        <button type="button" aria-label={t.carousel.previous} onClick={prev} className={cn(arrowClass, "left-[3%] lg:left-[10%]")}>
          <ChevronsLeft className="size-8 lg:size-[2.1rem]" strokeWidth={1.5} />
        </button>
        <button type="button" aria-label={t.carousel.next} onClick={next} className={cn(arrowClass, "right-[3%] lg:right-[10%]")}>
          <ChevronsRight className="size-8 lg:size-[2.1rem]" strokeWidth={1.5} />
        </button>

        <div
          role="region"
          aria-roledescription={t.carousel.roleDescription}
          aria-label={t.carousel.region}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (dragStart.current = null)}
          className="relative h-[19rem] touch-pan-y [--gap:4.75rem] select-none focus-visible:outline-none md:h-[24rem] md:[--gap:6.25rem] lg:h-[26rem] lg:[--gap:9rem]"
        >
          {gallery.map((screen, index) => {
            const offset = offsetFrom(index, selected)
            const distance = Math.abs(offset)
            const isHidden = distance > 2
            return (
              <button
                key={screen.src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={t.carousel.view(screen.title)}
                aria-current={distance === 0}
                aria-hidden={isHidden}
                tabIndex={isHidden ? -1 : 0}
                style={{
                  zIndex: 30 - distance * 10,
                  transform: `translate(calc(-50% + ${offset} * var(--gap)), -50%) scale(${FAN_SCALE[Math.min(distance, 2)]})`,
                }}
                className={cn(
                  "absolute top-1/2 left-1/2 block rounded-[1rem] border border-[#d9ccff]/70 bg-white p-[0.35rem] shadow-2xl shadow-black/50 transition-[transform,opacity,filter] duration-500 ease-out lg:p-[0.5rem]",
                  CARD_WIDTH[screen.orientation],
                  distance === 0 ? "cursor-default" : "hover:brightness-110",
                  isHidden && "pointer-events-none opacity-0",
                  distance === 2 && "max-md:pointer-events-none max-md:opacity-0",
                )}
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  loading="lazy"
                  draggable={false}
                  className={cn("w-full rounded-[0.6rem] object-cover object-top", CARD_ASPECT[screen.orientation])}
                />
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center gap-2 text-center" aria-live="polite">
        <p className="text-sm text-brand-cream lg:text-[0.95rem]">
          <span className="font-mono tracking-wider text-brand-cream/70 uppercase">{current.projectName}</span>
          <span className="mx-2 text-brand-cream/50">·</span>
          <span className="font-semibold">{current.title}</span>
        </p>
        <p className="max-w-lg px-6 text-sm text-brand-cream/80 lg:text-[0.85rem]">{current.description}</p>
        {current.highlight && <HighlightBadge className="text-xs">{current.highlight}</HighlightBadge>}
        <ProjectLinks links={current.links} />
      </div>

      <PagerDots
        count={TOTAL}
        selected={selected}
        onSelect={goTo}
        label={t.carousel.choose}
        labelFor={(i) => t.carousel.goTo(gallery[i].title)}
        className="mt-3"
      />
    </div>
  )
}

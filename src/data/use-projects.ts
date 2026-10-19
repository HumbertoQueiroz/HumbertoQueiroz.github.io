import { useMemo } from "react"
import { projectBases } from "@/data/projects"
import { useT } from "@/i18n/locale"
import type { Project } from "@/types"

/** Projetos já com os textos do idioma atual. */
export function useProjects(): Project[] {
  const t = useT()

  return useMemo(
    () =>
      projectBases.map((base) => {
        const text = t.projectItems[base.id]
        return {
          id: base.id,
          name: base.name,
          stack: base.stack,
          summary: text.summary,
          highlight: text.highlight,
          links: base.links.map((link, index) => ({ ...link, label: text.links[index] })),
          screens: base.screens.map((screen, index) => ({ ...screen, ...text.screens[index] })),
        }
      }),
    [t],
  )
}

/** Projeto exibido na seção "Destaque" (o que está em desenvolvimento agora). */
export function useFeaturedProject() {
  return useProjects().find((project) => project.id === "meu-vestir")!
}

/** Telas de todos os projetos, já com os dados do projeto, para o carrossel. */
export function useGallery() {
  const projects = useProjects()

  return useMemo(
    () =>
      projects.flatMap((project) =>
        project.screens.map((screen) => ({
          ...screen,
          projectName: project.name,
          highlight: project.highlight,
          links: project.links,
        })),
      ),
    [projects],
  )
}

/** Quantidade de telas no carrossel (igual em todos os idiomas). */
export const GALLERY_SIZE = projectBases.reduce((total, base) => total + base.screens.length, 0)

import app193Emergencias from "@/assets/app193-emergencias.jpg"
import app193Localizacao from "@/assets/app193-localizacao.jpg"
import app193Login from "@/assets/app193-login.jpg"
import app193Ocorrencia from "@/assets/app193-ocorrencia.jpg"
import avatarScreen from "@/assets/meu-vestir-avatar.png"
import lookScreen from "@/assets/meu-vestir-look.png"
import piecesScreen from "@/assets/meu-vestir-pecas.png"
import type { ProjectLink, ProjectScreen } from "@/types"

const GITHUB = "https://github.com/HumbertoQueiroz"

export type ProjectId = "app193" | "meu-vestir"

/**
 * Parte do projeto que não depende do idioma: imagens, links e tecnologias.
 * Os textos (resumo, destaque, legendas e rótulos dos links) ficam em `i18n/` e entram na mesma ordem.
 */
interface ProjectBase {
  id: ProjectId
  name: string
  stack: string[]
  links: Pick<ProjectLink, "href" | "kind">[]
  screens: Pick<ProjectScreen, "src" | "orientation">[]
}

export const projectBases: ProjectBase[] = [
  {
    id: "app193",
    name: "App193",
    stack: ["React Native", "Expo", "React", "Node.js", "Fastify", "Prisma", "PostgreSQL", "Docker"],
    links: [
      { href: `${GITHUB}/APP-CBM-CAMPO-VERDE`, kind: "github" },
      { href: `${GITHUB}/APPCBM-BackEnd`, kind: "github" },
      { href: `${GITHUB}/AppCbmWeb`, kind: "github" },
      { href: "https://app-cbm-web.vercel.app", kind: "demo" },
    ],
    screens: [
      { src: app193Login, orientation: "portrait" },
      { src: app193Emergencias, orientation: "portrait" },
      { src: app193Localizacao, orientation: "portrait" },
      { src: app193Ocorrencia, orientation: "portrait" },
    ],
  },
  {
    id: "meu-vestir",
    name: "Meu Vestir",
    stack: ["React", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Zod", "Jest"],
    links: [
      { href: "https://www.meuvestir.com.br", kind: "site" },
      { href: "https://www.meuvestir.com.br/demo", kind: "demo" },
      { href: "https://batalhadasstartups.com.br/startups/neurofin/", kind: "site" },
    ],
    screens: [
      { src: avatarScreen, orientation: "landscape" },
      { src: piecesScreen, orientation: "landscape" },
      { src: lookScreen, orientation: "landscape" },
    ],
  },
]

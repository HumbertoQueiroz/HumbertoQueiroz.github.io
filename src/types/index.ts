import type { ComponentType, SVGProps } from "react"

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export type SectionId = "inicio" | "perfil" | "experiencia" | "formacao" | "destaque" | "projetos" | "contato"

/** O nome de cada item vem do idioma atual: `t.nav[id]`. */
export interface NavItem {
  id: SectionId
  icon: IconComponent
}

export interface ContactLink {
  id: string
  label: string
  href: string
  icon: IconComponent
}

export interface ProjectScreen {
  src: string
  alt: string
  title: string
  description: string
  /** Telas de celular são altas e estreitas; as de painel/web são largas. */
  orientation: "landscape" | "portrait"
}

export interface ProjectLink {
  label: string
  href: string
  kind: "github" | "site" | "demo"
}

export interface Project {
  id: string
  name: string
  summary: string
  /** Reconhecimento ou destaque curto, exibido junto às telas. */
  highlight?: string
  stack: string[]
  links: ProjectLink[]
  screens: ProjectScreen[]
}

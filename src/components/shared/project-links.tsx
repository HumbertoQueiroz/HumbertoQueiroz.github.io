import { Globe, Play } from "lucide-react"
import { GithubIcon } from "@/components/icons/brand-icons"
import { ButtonLink } from "@/components/shared/button-link"
import { cn } from "@/lib/utils"
import type { ProjectLink } from "@/types"

const LINK_ICON = {
  github: GithubIcon,
  site: Globe,
  demo: Play,
} as const

interface ProjectLinksProps {
  links: ProjectLink[]
  className?: string
}

function Icon({ kind }: { kind: ProjectLink["kind"] }) {
  const Component = LINK_ICON[kind]
  return <Component className="size-4" />
}

/** Botões para os repositórios no GitHub, o site e a demonstração de um projeto. */
export function ProjectLinks({ links, className }: ProjectLinksProps) {
  if (links.length === 0) return null

  return (
    <ul className={cn("flex flex-wrap items-center justify-center gap-2", className)} aria-label="Links do projeto">
      {links.map(({ label, href, kind }) => (
        <li key={href}>
          <ButtonLink href={href} tone="glass" size="xs">
            <Icon kind={kind} />
            {label}
          </ButtonLink>
        </li>
      ))}
    </ul>
  )
}

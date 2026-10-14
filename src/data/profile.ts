import { Briefcase, CircleUser, Code, FileUser, House, Mail, Rocket, Send } from "lucide-react"
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/brand-icons"
import type { ContactLink, NavItem } from "@/types"

export const profile = {
  name: "Humberto Queiroz",
  role: "Full-Stack Developer",
  location: "Campo Verde, MT",
  summary:
    "Sou desenvolvedor full-stack com 4 anos em TI, mais de 2 deles dedicados ao desenvolvimento de software. Atuo do modelo de dados à interface com React, TypeScript, Node.js e PostgreSQL, com testes automatizados e atenção à acessibilidade. Minha experiência em suporte, infraestrutura e ERP TOTVS Protheus me dá visão de sistemas em produção, e a graduação em Direito me ajuda a ler requisitos com precisão e a explicar soluções com clareza.",
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "APIs REST",
    "Mercado Pago",
    "Fastify",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "Jest",
    "Git",
  ],
} as const

export const githubUrl = "https://github.com/HumbertoQueiroz"
export const resumeUrl = "https://dev-humberto-queiroz.vercel.app/"

export const navItems: NavItem[] = [
  { id: "inicio", label: "Início", icon: House },
  { id: "perfil", label: "Perfil pessoal", icon: CircleUser },
  { id: "destaque", label: "Destaque", icon: Rocket },
  { id: "projetos", label: "Projetos", icon: Code },
  { id: "contato", label: "Contato", icon: Send },
]

export const contactLinks: ContactLink[] = [
  {
    id: "linkedin",
    label: "Humberto Queiroz",
    href: "https://www.linkedin.com/in/humberto-queiroz-37385a1b6",
    icon: LinkedinIcon,
  },
  {
    id: "github",
    label: "Dev Humberto Queiroz",
    href: githubUrl,
    icon: GithubIcon,
  },
  {
    id: "curriculo",
    label: "Currículo online",
    href: resumeUrl,
    icon: FileUser,
  },
  {
    id: "workana",
    label: "Perfil no Workana",
    href: "https://www.workana.com/freelancer/e2326db4301d70101af7d43742cafb11",
    icon: Briefcase,
  },
  {
    id: "instagram",
    label: "@devhumbertoqueiroz",
    href: "https://www.instagram.com/devhumbertoqueiroz",
    icon: InstagramIcon,
  },
  {
    id: "email",
    label: "devhumbertoqueiroz@gmail.com",
    href: "mailto:devhumbertoqueiroz@gmail.com",
    icon: Mail,
  },
]

/** Redes que aparecem como ícones na barra superior, na ordem do Figma. */
export const socialLinks = (["github", "instagram", "linkedin"] as const).map(
  (id) => contactLinks.find((link) => link.id === id)!,
)

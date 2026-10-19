import { Briefcase, CircleUser, Code, FileUser, GraduationCap, House, Mail, Rocket, Send } from "lucide-react"
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
/** PDF gerado a partir do currículo online (sem telefone), servido pelo próprio site. */
export const resumePdfUrl = "/Humberto-Queiroz-Curriculo.pdf"
export const contactEmail = "devhumbertoqueiroz@gmail.com"

/** Os nomes aparecem no idioma atual, em `t.nav`. */
export const navItems: NavItem[] = [
  { id: "inicio", icon: House },
  { id: "perfil", icon: CircleUser },
  { id: "experiencia", icon: Briefcase },
  { id: "formacao", icon: GraduationCap },
  { id: "destaque", icon: Rocket },
  { id: "projetos", icon: Code },
  { id: "contato", icon: Send },
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

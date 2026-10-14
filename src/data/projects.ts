import app193Emergencias from "@/assets/app193-emergencias.jpg"
import app193Localizacao from "@/assets/app193-localizacao.jpg"
import app193Login from "@/assets/app193-login.jpg"
import app193Ocorrencia from "@/assets/app193-ocorrencia.jpg"
import avatarScreen from "@/assets/meu-vestir-avatar.png"
import lookScreen from "@/assets/meu-vestir-look.png"
import piecesScreen from "@/assets/meu-vestir-pecas.png"
import type { Project } from "@/types"

const GITHUB = "https://github.com/HumbertoQueiroz"

export const projects: Project[] = [
  {
    id: "app193",
    name: "App193",
    summary:
      "Sistema de acionamento de emergências do Corpo de Bombeiros Militar de Campo Verde (MT): o cidadão aciona o socorro pelo celular, com a localização confirmada no mapa, e a guarnição atende e despacha as viaturas por um painel web.",
    highlight: "Troféu de Mérito Estudantil · IFMT 2025",
    stack: ["React Native", "Expo", "React", "Node.js", "Fastify", "Prisma", "PostgreSQL", "Docker"],
    links: [
      { label: "App mobile", href: `${GITHUB}/APP-CBM-CAMPO-VERDE`, kind: "github" },
      { label: "API", href: `${GITHUB}/APPCBM-BackEnd`, kind: "github" },
      { label: "Painel web", href: `${GITHUB}/AppCbmWeb`, kind: "github" },
      { label: "Demo do painel", href: "https://app-cbm-web.vercel.app", kind: "demo" },
    ],
    screens: [
      {
        src: app193Login,
        alt: "Tela de login do aplicativo App193",
        title: "Login do cidadão",
        description: "Acesso ao aplicativo, com cadastro em duas etapas e atalho para ligar 193.",
        orientation: "portrait",
      },
      {
        src: app193Emergencias,
        alt: "Tela do App193 para escolher o tipo de emergência",
        title: "Tipo de emergência",
        description: "Incêndio, afogamento, acidente, atropelamento, engasgo e parada respiratória.",
        orientation: "portrait",
      },
      {
        src: app193Localizacao,
        alt: "Tela do App193 com o mapa para confirmar a localização",
        title: "Localização no mapa",
        description: "O ponto é capturado por GPS e confirmado no mapa antes de enviar o chamado.",
        orientation: "portrait",
      },
      {
        src: app193Ocorrencia,
        alt: "Tela do App193 com os dados da ocorrência",
        title: "Dados da ocorrência",
        description: "Número de vítimas, condição, endereço por geocodificação e descrição.",
        orientation: "portrait",
      },
    ],
  },
  {
    id: "meu-vestir",
    name: "Meu Vestir",
    summary:
      "Provador digital inclusivo: a cliente envia uma foto, a IA cria o avatar e ela prova looks combinando até 3 peças.",
    highlight: "Quartas de final da Batalha das Startups (Record News)",
    stack: ["React", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Zod", "Jest"],
    links: [
      { label: "Site", href: "https://www.meuvestir.com.br", kind: "site" },
      { label: "Demonstração", href: "https://www.meuvestir.com.br/demo", kind: "demo" },
      { label: "Batalha das Startups", href: "https://batalhadasstartups.com.br/startups/neurofin/", kind: "site" },
    ],
    screens: [
      {
        src: avatarScreen,
        alt: "Tela do Meu Vestir informando que o avatar está pronto",
        title: "Criação do avatar",
        description: "A cliente envia uma foto e a IA cria o avatar que vai vestir as peças.",
        orientation: "landscape",
      },
      {
        src: piecesScreen,
        alt: "Tela do Meu Vestir para escolher até 3 peças a provar",
        title: "Escolha das peças",
        description: "Combinação de até 3 peças por tentativa, com controle de looks restantes.",
        orientation: "landscape",
      },
      {
        src: lookScreen,
        alt: "Tela do Meu Vestir mostrando o look montado no avatar",
        title: "Look montado",
        description: "Resultado do provador, com opção de provar outra peça ou escolher o look.",
        orientation: "landscape",
      },
    ],
  },
]

/** Projeto exibido na seção "Destaque" (o que está em desenvolvimento agora). */
export const featuredProject = projects.find((project) => project.id === "meu-vestir")!

/** Telas de todos os projetos, já com os dados do projeto, para o carrossel. */
export const gallery = projects.flatMap((project) =>
  project.screens.map((screen) => ({
    ...screen,
    projectName: project.name,
    highlight: project.highlight,
    links: project.links,
  })),
)

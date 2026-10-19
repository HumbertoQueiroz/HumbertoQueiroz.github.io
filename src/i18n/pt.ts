/** Textos do site em português. O inglês (en.ts) segue exatamente este formato. */
export const pt = {
  lang: "pt-BR",
  skipToContent: "Pular para o conteúdo",
  nav: {
    label: "Seções do site",
    inicio: "Início",
    perfil: "Perfil pessoal",
    experiencia: "Experiência",
    formacao: "Formação",
    destaque: "Destaque",
    projetos: "Projetos",
    contato: "Contato",
  },
  topBar: {
    home: "devhumberto, voltar ao início",
    social: "Redes sociais",
    language: "Idioma",
  },
  hero: {
    tagline: "Do banco de dados à interface, com React, TypeScript, Node.js e PostgreSQL.",
    projects: "See My Projects",
    contact: "Fale comigo",
    resume: "Baixar currículo (PDF)",
  },
  profile: {
    title: "Perfil pessoal",
    summary:
      "Sou desenvolvedor full-stack com 4 anos em TI, mais de 2 deles dedicados ao desenvolvimento de software. Atuo do modelo de dados à interface com React, TypeScript, Node.js e PostgreSQL, com testes automatizados e atenção à acessibilidade. Minha experiência em suporte, infraestrutura e ERP TOTVS Protheus me dá visão de sistemas em produção, e a graduação em Direito me ajuda a ler requisitos com precisão e a explicar soluções com clareza.",
    technologies: "Tecnologias",
    resume: "Currículo online",
  },
  trajectory: {
    experience: "Experiência",
    experienceList: "Experiência profissional",
    education: "Formação",
    educationList: "Formação e certificados",
    now: "atual",
    experienceItems: [
      {
        period: "jul/2026 – atual",
        role: "Desenvolvedor Full-Stack",
        company: "Meu Vestir",
        description: "Funcionalidades ponta a ponta, do banco à interface, em produção: pagamentos com Mercado Pago, IA e testes automatizados.",
      },
      {
        period: "fev/2025 – atual",
        role: "Analista de Desenvolvimento",
        company: "Millenium Software",
        description: "Interfaces em React, JavaScript e Tailwind sobre PostgreSQL, com testes antes da liberação e correção em produção. Promovido após 2 anos no suporte.",
      },
      {
        period: "abr/2024 – jan/2025",
        role: "Analista de Desenvolvimento",
        company: "Cooperfibra",
        description: "Customização do TOTVS Protheus em ADVPL e relatórios em SQL Server, com fiscal, faturamento e financeiro.",
      },
      {
        period: "fev/2023 – abr/2024",
        role: "Analista de Suporte de TI (Júnior a Pleno)",
        company: "Millenium Software",
        description: "Chamados N1 e N2, consultas SQL e treinamento de clientes.",
      },
      {
        period: "mai/2022 – fev/2023",
        role: "Auxiliar de T.I.",
        company: "AGROVARGAS",
        description: "Infraestrutura, redes, backup e suporte interno.",
      },
    ],
    before: "Antes da TI: advocacia e administração pública.",
    educationItems: [
      {
        period: "2023 – 2025",
        title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        place: "IFMT, Câmpus Campo Verde",
      },
      {
        period: "2014 – 2018",
        title: "Bacharelado em Direito",
        place: "Universidade de Cuiabá",
      },
    ],
    award: "Troféu de Mérito Estudantil · IFMT 2025, pelo App193",
    certificates: "Certificados",
    certificateItems: [
      "Rocketseat: NLW Expert (React), 2024",
      "Rocketseat: NLW Pocket (JavaScript, Full-stack), 2024",
      "Alura: JavaScript, CSS Grid, HTML5 e CSS3",
    ],
    languages: "Idiomas: português nativo · inglês básico",
  },
  featured: {
    title: "Destaque",
    now: "Atualmente estou desenvolvendo o",
    stack:
      "Trabalho do banco de dados à interface: API com Fastify, Prisma e Zod, integração com pagamentos (Mercado Pago), front-end em React e Tailwind, e testes automatizados com Jest.",
    cta: "Acesse aqui!",
    chooseScreen: "Escolher tela do Meu Vestir",
    showScreen: (title: string) => `Mostrar ${title}`,
  },
  projects: {
    title: "Meus Projetos",
    githubLabel: "Ver meu GitHub",
    githubTitle: "Abrir meu GitHub",
    links: "Links do projeto",
  },
  carousel: {
    previous: "Anterior",
    next: "Próximo",
    roleDescription: "carrossel",
    region: "Telas dos projetos",
    choose: "Escolher tela dos projetos",
    view: (title: string) => `Ver ${title}`,
    goTo: (title: string) => `Ir para ${title}`,
  },
  contact: {
    title: "Entre em Contato!",
    text: "Para projetos e parcerias, entre em contato por algumas das minhas redes sociais.",
    resume: "Currículo online",
    workana: "Perfil no Workana",
  },
  portraitAlt: (name: string) => `Foto de ${name}`,
  projectItems: {
    app193: {
      summary:
        "Sistema de acionamento de emergências do Corpo de Bombeiros Militar de Campo Verde (MT): o cidadão aciona o socorro pelo celular, com a localização confirmada no mapa, e a guarnição atende e despacha as viaturas por um painel web.",
      highlight: "Troféu de Mérito Estudantil · IFMT 2025",
      links: ["App mobile", "API", "Painel web", "Demo do painel"],
      screens: [
        {
          title: "Login do cidadão",
          description: "Acesso ao aplicativo, com cadastro em duas etapas e atalho para ligar 193.",
          alt: "Tela de login do aplicativo App193",
        },
        {
          title: "Tipo de emergência",
          description: "Incêndio, afogamento, acidente, atropelamento, engasgo e parada respiratória.",
          alt: "Tela do App193 para escolher o tipo de emergência",
        },
        {
          title: "Localização no mapa",
          description: "O ponto é capturado por GPS e confirmado no mapa antes de enviar o chamado.",
          alt: "Tela do App193 com o mapa para confirmar a localização",
        },
        {
          title: "Dados da ocorrência",
          description: "Número de vítimas, condição, endereço por geocodificação e descrição.",
          alt: "Tela do App193 com os dados da ocorrência",
        },
      ],
    },
    "meu-vestir": {
      summary: "Provador digital inclusivo: a cliente envia uma foto, a IA cria o avatar e ela prova looks combinando até 3 peças.",
      highlight: "Quartas de final da Batalha das Startups (Record News)",
      links: ["Site", "Demonstração", "Batalha das Startups"],
      screens: [
        {
          title: "Criação do avatar",
          description: "A cliente envia uma foto e a IA cria o avatar que vai vestir as peças.",
          alt: "Tela do Meu Vestir informando que o avatar está pronto",
        },
        {
          title: "Escolha das peças",
          description: "Combinação de até 3 peças por tentativa, com controle de looks restantes.",
          alt: "Tela do Meu Vestir para escolher até 3 peças a provar",
        },
        {
          title: "Look montado",
          description: "Resultado do provador, com opção de provar outra peça ou escolher o look.",
          alt: "Tela do Meu Vestir mostrando o look montado no avatar",
        },
      ],
    },
  },
}

export type Dictionary = typeof pt

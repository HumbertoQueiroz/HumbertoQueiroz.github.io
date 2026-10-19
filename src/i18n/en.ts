import type { Dictionary } from "@/i18n/pt"

/** English version of the site. Same shape as pt.ts. */
export const en: Dictionary = {
  lang: "en",
  skipToContent: "Skip to content",
  nav: {
    label: "Site sections",
    inicio: "Home",
    perfil: "About me",
    experiencia: "Experience",
    formacao: "Education",
    destaque: "Featured",
    projetos: "Projects",
    contato: "Contact",
  },
  topBar: {
    home: "devhumberto, back to top",
    social: "Social links",
    language: "Language",
  },
  hero: {
    tagline: "From database to interface, with React, TypeScript, Node.js and PostgreSQL.",
    projects: "See My Projects",
    contact: "Contact me",
    resume: "Download resume (PDF)",
  },
  profile: {
    title: "About me",
    summary:
      "I'm a full-stack developer with 4 years in IT, more than 2 of them focused on software development. I work from the data model to the interface with React, TypeScript, Node.js and PostgreSQL, with automated tests and attention to accessibility. My background in support, infrastructure and the TOTVS Protheus ERP gives me a view of systems in production, and my law degree helps me read requirements precisely and explain solutions clearly.",
    technologies: "Technologies",
    resume: "Online resume",
  },
  trajectory: {
    experience: "Experience",
    experienceList: "Work experience",
    education: "Education",
    educationList: "Education and certificates",
    now: "present",
    experienceItems: [
      {
        period: "Jul 2026 – present",
        role: "Full-Stack Developer",
        company: "Meu Vestir",
        description: "End-to-end features, from the database to the interface, in production: Mercado Pago payments, AI and automated tests.",
      },
      {
        period: "Feb 2025 – present",
        role: "Development Analyst",
        company: "Millenium Software",
        description: "Interfaces in React, JavaScript and Tailwind on top of PostgreSQL, with testing before release and fixes in production. Promoted after 2 years in support.",
      },
      {
        period: "Apr 2024 – Jan 2025",
        role: "Development Analyst",
        company: "Cooperfibra",
        description: "TOTVS Protheus customization in ADVPL and SQL Server reports, working with the tax, billing and finance teams.",
      },
      {
        period: "Feb 2023 – Apr 2024",
        role: "IT Support Analyst (Junior to Mid-level)",
        company: "Millenium Software",
        description: "L1 and L2 tickets, SQL queries and customer training.",
      },
      {
        period: "May 2022 – Feb 2023",
        role: "IT Assistant",
        company: "AGROVARGAS",
        description: "Infrastructure, networking, backups and internal support.",
      },
    ],
    before: "Before IT: law practice and public administration.",
    educationItems: [
      {
        period: "2023 – 2025",
        title: "Associate degree in Systems Analysis and Development",
        place: "IFMT, Campo Verde campus",
      },
      {
        period: "2014 – 2018",
        title: "Bachelor of Laws",
        place: "Universidade de Cuiabá",
      },
    ],
    award: "Student Merit Trophy · IFMT 2025, for App193",
    certificates: "Certificates",
    certificateItems: [
      "Rocketseat: NLW Expert (React), 2024",
      "Rocketseat: NLW Pocket (JavaScript, Full-stack), 2024",
      "Alura: JavaScript, CSS Grid, HTML5 and CSS3",
    ],
    languages: "Languages: Portuguese (native) · English (basic)",
  },
  featured: {
    title: "Featured",
    now: "I'm currently building",
    stack:
      "I work from the database to the interface: API with Fastify, Prisma and Zod, payments integration (Mercado Pago), front end in React and Tailwind, and automated tests with Jest.",
    cta: "Check it out!",
    chooseScreen: "Choose a Meu Vestir screen",
    showScreen: (title: string) => `Show ${title}`,
  },
  projects: {
    title: "My Projects",
    githubLabel: "See my GitHub",
    githubTitle: "Open my GitHub",
    links: "Project links",
  },
  carousel: {
    previous: "Previous",
    next: "Next",
    roleDescription: "carousel",
    region: "Project screens",
    choose: "Choose a project screen",
    view: (title: string) => `View ${title}`,
    goTo: (title: string) => `Go to ${title}`,
  },
  contact: {
    title: "Get in Touch!",
    text: "For projects and partnerships, reach out through any of my social links.",
    resume: "Online resume",
    workana: "Workana profile",
  },
  portraitAlt: (name: string) => `Photo of ${name}`,
  projectItems: {
    app193: {
      summary:
        "Emergency dispatch system for the Campo Verde (MT) Military Fire Department: citizens call for help from their phone with the location confirmed on a map, and the crew answers and dispatches vehicles from a web dashboard.",
      highlight: "Student Merit Trophy · IFMT 2025",
      links: ["Mobile app", "API", "Web dashboard", "Dashboard demo"],
      screens: [
        {
          title: "Citizen login",
          description: "App access, with two-step sign-up and a shortcut to call 193.",
          alt: "App193 login screen",
        },
        {
          title: "Emergency type",
          description: "Fire, drowning, accident, hit-and-run, choking and respiratory arrest.",
          alt: "App193 screen for choosing the emergency type",
        },
        {
          title: "Location on the map",
          description: "The point is captured by GPS and confirmed on the map before the call is sent.",
          alt: "App193 screen with the map to confirm the location",
        },
        {
          title: "Incident details",
          description: "Number of victims, condition, geocoded address and description.",
          alt: "App193 screen with the incident details",
        },
      ],
    },
    "meu-vestir": {
      summary: "Inclusive digital fitting room: the customer uploads a photo, AI creates the avatar and she tries on looks by combining up to 3 pieces.",
      highlight: "Quarter-finals of Batalha das Startups (Record News)",
      links: ["Website", "Demo", "Batalha das Startups"],
      screens: [
        {
          title: "Avatar creation",
          description: "The customer uploads a photo and AI creates the avatar that will wear the pieces.",
          alt: "Meu Vestir screen saying the avatar is ready",
        },
        {
          title: "Choosing pieces",
          description: "Combine up to 3 pieces per try, with a counter of remaining looks.",
          alt: "Meu Vestir screen for choosing up to 3 pieces to try on",
        },
        {
          title: "Finished look",
          description: "Fitting room result, with the option to try another piece or pick the look.",
          alt: "Meu Vestir screen showing the finished look on the avatar",
        },
      ],
    },
  },
}

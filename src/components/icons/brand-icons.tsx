import type { IconComponent } from "@/types"

const base = { viewBox: "0 0 24 24", "aria-hidden": true } as const

export const GithubIcon: IconComponent = (props) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  </svg>
)

export const LinkedinIcon: IconComponent = (props) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M4.5 9h3v10h-3zM6 4a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 6 4zm4 5h2.9v1.4c.45-.85 1.55-1.7 3.2-1.7 3.05 0 3.9 2 3.9 4.6V19h-3v-5c0-1.2-.1-2.5-1.6-2.5s-1.8 1.2-1.8 2.4V19H10z" />
  </svg>
)

export const InstagramIcon: IconComponent = (props) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

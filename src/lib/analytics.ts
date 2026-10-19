type GoatCounter = {
  count: (vars: { path: string; title?: string; event?: boolean }) => void
}

declare global {
  interface Window {
    goatcounter?: GoatCounter
  }
}

/** Registra no GoatCounter o clique em um link; sem o script (bloqueado ou local), não faz nada. */
export function trackLinkClick(href: string, title?: string) {
  if (href.startsWith("#")) return

  const { host, pathname } = new URL(href, window.location.origin)
  const target = href.startsWith("mailto:") ? "email" : `${host}${pathname}`.replace(/\/$/, "")

  window.goatcounter?.count({ path: `clique/${target}`, title, event: true })
}

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { en } from "@/i18n/en"
import { pt, type Dictionary } from "@/i18n/pt"

export type Locale = "pt" | "en"

const dictionaries: Record<Locale, Dictionary> = { pt, en }
const STORAGE_KEY = "locale"

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

/** Idioma salvo no navegador; sem escolha anterior, o site abre em português. */
function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === "en" ? "en" : "pt"
  } catch {
    return "pt"
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Sem armazenamento (janela privada, por exemplo): a escolha vale só até recarregar.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = dictionaries[locale].lang
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, t: dictionaries[locale] }), [locale, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error("useLocale precisa estar dentro de LocaleProvider")
  return context
}

/** Atalho para os textos do idioma atual. */
export function useT() {
  return useLocale().t
}

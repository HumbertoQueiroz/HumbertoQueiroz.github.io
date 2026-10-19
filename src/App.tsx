import { NavDock } from "@/components/layout/nav-dock"
import { TopBar } from "@/components/layout/top-bar"
import { Contact } from "@/components/sections/contact"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Featured } from "@/components/sections/featured"
import { Hero } from "@/components/sections/hero"
import { Profile } from "@/components/sections/profile"
import { Projects } from "@/components/sections/projects"
import { useT } from "@/i18n/locale"

export default function App() {
  const t = useT()

  return (
    <>
      <a
        href="#perfil"
        className="sr-only z-50 rounded-md bg-white px-3 py-2 text-brand-navy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t.skipToContent}
      </a>
      <TopBar />
      <NavDock />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Education />
        <Featured />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

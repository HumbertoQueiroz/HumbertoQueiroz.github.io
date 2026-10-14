import { NavDock } from "@/components/layout/nav-dock"
import { TopBar } from "@/components/layout/top-bar"
import { Contact } from "@/components/sections/contact"
import { Featured } from "@/components/sections/featured"
import { Hero } from "@/components/sections/hero"
import { Profile } from "@/components/sections/profile"
import { Projects } from "@/components/sections/projects"

export default function App() {
  return (
    <>
      <a
        href="#perfil"
        className="sr-only z-50 rounded-md bg-white px-3 py-2 text-brand-navy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <TopBar />
      <NavDock />
      <main>
        <Hero />
        <Profile />
        <Featured />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

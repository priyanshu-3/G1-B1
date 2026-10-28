import { PrismaHero } from "@/components/ui/prisma-hero"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Work } from "@/components/sections/work"
import { profile } from "@/data/profile"

const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function App() {
  return (
    <main>
      <div className="p-2 md:p-3">
        <PrismaHero
          id="top"
          title={profile.firstName}
          navItems={nav}
          description={
            <>
              <span className="text-primary">* {profile.role}.</span> {profile.summary}
            </>
          }
          cta={{ label: "See my work", href: "#work" }}
        />
      </div>
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

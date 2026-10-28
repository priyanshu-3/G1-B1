import { ArrowRight } from "lucide-react"
import { useEffect, useSyncExternalStore } from "react"
import { PrismaHero } from "@/components/ui/prisma-hero"
import { About } from "@/components/sections/about"
import { Activity } from "@/components/sections/activity"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Work } from "@/components/sections/work"
import { ThemeToggle } from "@/components/theme-toggle"
import { VenomButton } from "@/components/venom-button"
import { profile } from "@/data/profile"
import { scrollToId, startSmoothScroll } from "@/lib/smooth-scroll"

const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const desktop = "(min-width: 1024px)"
const subscribe = (cb: () => void) => {
  const query = matchMedia(desktop)
  query.addEventListener("change", cb)
  return () => query.removeEventListener("change", cb)
}

export default function App() {
  const wide = useSyncExternalStore(subscribe, () => matchMedia(desktop).matches)
  useEffect(() => startSmoothScroll(), [])
  return (
    <main>
      <ThemeToggle />
      <div className="p-2 md:p-3">
        <PrismaHero
          id="top"
          title={profile.firstName}
          navItems={nav}
          description={null}
          action={
            <VenomButton
              label={
                <>
                  See my work
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-primary transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </>
              }
              // The goo only lives inside its stage, so on desktop give it room to reach: taller, and
              // stretched left into the empty video beside the name.
              height={wide ? 440 : 100}
              onClick={() => scrollToId("work")}
              // Transparent stage (it ships with a pale studio backdrop) with the pill pinned bottom-left,
              // where the old CTA sat: the left padding cancels the stretch, and the extra bottom
              // padding (pulled back with a negative margin) leaves room for the goo's contact shadow.
              className="bg-transparent! bg-none! -mb-4 items-end justify-start pb-4 lg:ml-[-14vw] lg:w-[calc(100%+14vw)] lg:pl-[14vw]"
              tone="white"
              // Keep the visitor's own arrow: no cartoon glove, and no pointing hand over the pill
              // (the component sets cursor inline every frame, so the class needs `!` to win).
              cursor="native"
              // Same proportions, type and colours as the hero's original pill: dark text, black arrow disc.
              buttonClassName="group inline-flex cursor-default! h-12 items-center gap-3 px-0 pl-6 pr-1 font-sans text-sm font-medium tracking-normal text-[#0d0d0c] transition-[gap] duration-300 hover:gap-4 focus-visible:ring-2 focus-visible:ring-primary/60 sm:text-base"
            />
          }
        />
      </div>
      <About />
      <Work />
      <Activity />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

import LegoOnboarding from "@/components/ui/interactive-tech-stack-builder"
import { SectionHeading } from "@/components/section-heading"
import { profile, skillGroups } from "@/data/profile"
import { skillModules } from "@/data/skills"
import { scrollToId } from "@/lib/smooth-scroll"

export function Skills() {
  return (
    <section id="skills" className="px-2 py-8 md:px-3">
      <div className="rounded-2xl border border-black/5 bg-panel text-[#141412] md:rounded-[2rem] dark:border-transparent">
        <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:px-10 md:pt-28">
          <SectionHeading title="Build my stack.">
            Every block is something I use in production. Click one to snap it onto the profile — click it again to pull it
            off.
          </SectionHeading>
        </div>

        <LegoOnboarding
          modules={skillModules}
          title={profile.name}
          emptyLabel="Click a block to stack"
          stackedLabel={(n, total) => `${n} of ${total} stacked`}
          continueLabel="Let's build together →"
          onComplete={() => scrollToId("contact")}
          className="min-h-0"
        />

        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:px-10 md:pb-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] opacity-60">The full toolkit</p>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label} className="bg-panel p-5 md:p-6">
                <h3 className="mb-3 text-sm font-semibold">{group.label}</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-black/15 px-2.5 py-1 text-[12px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

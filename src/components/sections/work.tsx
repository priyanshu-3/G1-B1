import { ArrowUpRight, Lock } from "lucide-react"
import { siGithub } from "simple-icons"
import HoverExpandGallery, { type HoverExpandItem } from "@/components/ui/hover-expand-gallery"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/data/profile"
import { projects, type Project } from "@/data/projects"
import { brandIcon } from "@/lib/brand-icons"

const GithubIcon = brandIcon(siGithub)

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  return (
    <div className="relative flex h-full flex-col justify-between p-5 text-[#f2f1e4] sm:p-7">
      {/* Keeps copy legible over screenshots and bright gradients alike. */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/95 from-35% via-black/70 to-black/10 lg:bg-linear-to-r lg:from-black/95 lg:from-25% lg:via-black/70 lg:via-50% lg:to-black/0" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-xs tracking-[0.2em] opacity-70">{String(index + 1).padStart(2, "0")}</span>
        {project.note ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 font-mono text-[11px] backdrop-blur">
            <Lock className="h-3 w-3" /> {project.note}
          </span>
        ) : null}
      </div>

      <div className="relative lg:max-w-xl">
        <h3 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">{project.title}</h3>
        <p className="mt-2 max-w-md text-sm opacity-85 sm:text-base">{project.summary}</p>

        <ul className="mt-4 space-y-1.5 text-[13px] opacity-75">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden className="opacity-60">→</span>
              {h}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li key={s} className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 font-mono text-[11px] backdrop-blur">
              {s}
            </li>
          ))}
        </ul>

        {project.live || project.repo ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Live site <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-sm backdrop-blur transition-colors hover:bg-black/50"
              >
                <GithubIcon size={15} /> Source
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

const items: HoverExpandItem[] = projects.map((p, i) => ({
  title: p.title,
  meta: p.meta,
  src: p.image,
  alt: `${p.title} screenshot`,
  accent: p.accent,
  content: <ProjectPanel project={p} index={i} />,
}))

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <SectionHeading title={<>Things I&rsquo;ve shipped.</>}>
        Client work and public repos from{" "}
        <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-100">
          GitHub
        </a>
        . Hover a project to open it — or tap on mobile.
      </SectionHeading>

      <div className="overflow-hidden rounded-2xl border lg:rounded-3xl">
        <HoverExpandGallery items={items} orientation="vertical" mobileImageHeight={500} duration={760} />
      </div>
    </section>
  )
}

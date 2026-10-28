import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react"
import { siGithub } from "simple-icons"
import { profile } from "@/data/profile"
import { brandIcon, LinkedInIcon } from "@/lib/brand-icons"

const GithubIcon = brandIcon(siGithub)

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "Resume", href: profile.resume, icon: Download },
]

export function Contact() {
  return (
    <section id="contact" className="px-2 pb-2 md:px-3 md:pb-3">
      <div className="relative overflow-hidden rounded-2xl border bg-card md:rounded-[2rem]">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay dark:opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-10 md:py-32">
          <h2 className="text-[13vw] font-medium leading-[0.9] tracking-[-0.06em] md:text-[9vw]">
            Let&rsquo;s build
            <br />
            <span className="text-muted-foreground">something.</span>
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-12 inline-flex items-center gap-3 break-all text-xl underline decoration-foreground/30 underline-offset-8 transition-colors hover:decoration-foreground sm:text-2xl md:text-3xl"
          >
            {profile.email.toLowerCase()}
            <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>

          <div className="mt-12 flex flex-wrap gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                <Icon size={16} className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>

          <footer className="mt-24 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <p className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}

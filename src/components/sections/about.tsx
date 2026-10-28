import { Download } from "lucide-react"
import { profile } from "@/data/profile"

const facts = [
  { label: "Currently", value: "Junior Software Engineer at Aarama Ventures" },
  { label: "Based in", value: "Mumbai, India" },
  { label: "Studied", value: "MCA, CMR University" },
  { label: "Certified", value: "Gen AI for test automation" },
]

const stats = [
  { value: "20+", label: "documented REST APIs in production" },
  { value: "2", label: "clouds shipped to: Azure & GCP" },
  { value: "1", label: "live client system, end to end" },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <p className="text-3xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl lg:col-span-8">
          I build the whole thing — the API, the interface, and the server it runs on.{" "}
          <span className="text-muted-foreground">
            From FastAPI schemas to Next.js screens to the Nginx config in front of them.
          </span>
        </p>

        <div className="lg:col-span-4">
          <dl className="grid content-start gap-5">
            {facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 border-b pb-4">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{f.label}</dt>
                <dd className="text-right text-sm">{f.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground py-1 pl-5 pr-1 text-sm font-medium text-background transition-all hover:gap-3"
          >
            Download resume
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:scale-110">
              <Download className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-3 md:mt-24">
        {stats.map((s) => (
          <div key={s.label} className="bg-background p-6 md:p-8">
            <p className="text-5xl font-medium tracking-[-0.05em] md:text-6xl">{s.value}</p>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <p className="sr-only">{profile.summary}</p>
    </section>
  )
}

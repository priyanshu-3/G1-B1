import { SectionHeading } from "@/components/section-heading"
import { certifications, education, experience } from "@/data/profile"

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-10 md:py-32">
      <SectionHeading title="Where I've worked." />

      <ol className="border-t">
        {experience.map((role) => (
          <li key={role.company} className="grid gap-4 border-b py-8 md:grid-cols-12 md:gap-8 md:py-10">
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{role.period}</p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">{role.title}</h3>
              <p className="mt-1 text-muted-foreground">
                {role.company} · {role.location}
              </p>
            </div>
            <ul className="space-y-3 text-[15px] leading-relaxed md:col-span-8">
              {role.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Education</p>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.degree} className="border-b pb-5">
                <p className="font-medium">{e.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.school} · {e.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Certifications</p>
          <ul className="space-y-5">
            {certifications.map((c) => (
              <li key={c.name} className="border-b pb-5">
                <p className="font-medium">{c.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer} · {c.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

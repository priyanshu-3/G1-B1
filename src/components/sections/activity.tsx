import { SectionHeading } from "@/components/section-heading"
import ContributionSkyline from "@/components/ui/contribution-skyline"
import contributions from "@/data/contributions.json"
import { profile } from "@/data/profile"

// The site's cream and ink, light → heavy, so the chart reads as part of the page rather than GitHub green.
const palette = {
  light: ["#d8d2bf", "#a99f84", "#6e6650", "#2a2822"],
  dark: ["#3b392f", "#6f6b58", "#a9a48c", "#e1e0cc"],
}

const updated = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
  new Date(contributions.fetched),
)

export function Activity() {
  return (
    <section id="activity" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 md:px-10 md:pb-32">
      <SectionHeading title="On GitHub.">
        A year of public activity on{" "}
        <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">
          GitHub
        </a>
        . Flip between the heat map and the skyline, hover a day, drag to orbit.
      </SectionHeading>

      <ContributionSkyline data={contributions.days} palette={palette} className="rounded-2xl md:p-6" />
      <p className="mt-3 text-right font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Updated {updated}</p>
    </section>
  )
}

// Saves the last year of public GitHub contributions to src/data/contributions.json.
// Run with `npm run contributions` to refresh the activity section.
import { writeFile } from "node:fs/promises"

const user = process.argv[2] ?? "jatinborabisht"
const res = await fetch(`https://github.com/users/${user}/contributions`)
if (!res.ok) throw new Error(`GitHub responded ${res.status}`)
const html = await res.text()

// Each day is a <td data-date id> cell; its count lives in the <tool-tip for={id}> text.
const dates = new Map()
for (const m of html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*?id="([^"]+)"|id="([^"]+)"[^>]*?data-date="(\d{4}-\d{2}-\d{2})"/g)) {
  dates.set(m[2] ?? m[3], m[1] ?? m[4])
}
const days = []
for (const m of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
  const date = dates.get(m[1])
  if (!date) continue
  const n = /^(\d[\d,]*) contribution/.exec(m[2].trim())
  days.push({ date, count: n ? Number(n[1].replace(/,/g, "")) : 0 })
}
if (!days.length) throw new Error("No contribution days found — GitHub's markup may have changed")
days.sort((a, b) => a.date.localeCompare(b.date))

const out = new URL("../src/data/contributions.json", import.meta.url)
await writeFile(out, JSON.stringify({ user, fetched: new Date().toISOString().slice(0, 10), days }, null, 0) + "\n")
const total = days.reduce((s, d) => s + d.count, 0)
console.log(`${user}: ${days.length} days, ${total} contributions, ${days[0].date} → ${days.at(-1).date}`)

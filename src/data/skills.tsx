import { Cloud } from "lucide-react"
import {
  siDocker,
  siFastapi,
  siGithubactions,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSvelte,
  siTailwindcss,
} from "simple-icons"
import type { StudColor, TechModule } from "@/components/ui/interactive-tech-stack-builder"
import { brandIcon, type IconProps } from "@/lib/brand-icons"

// Shade ramps for the plastic: lightest is the top face, darkest the underside.
type Ramp = [top: string, a: string, b: string, c: string, bottom: string]

function block(
  id: string,
  name: string,
  desc: string,
  icon: TechModule["icon"],
  studs: 2 | 4,
  [top, a, b, c, bottom]: Ramp,
  studColor: StudColor,
): TechModule {
  return {
    id,
    name,
    desc,
    icon,
    studs,
    colors: {
      topColor: top,
      faceGradient: `linear-gradient(180deg, ${a} 0%, ${b} 50%, ${c} 100%)`,
      bottomColor: bottom,
      studColor,
      text: "text-white drop-shadow-md",
      subtext: "text-white/80",
      iconBg: "bg-black/20 shadow-inner",
      iconColor: "text-white drop-shadow-sm",
    },
  }
}

const AzureIcon = ({ className, size }: IconProps) => <Cloud className={className} size={size} strokeWidth={2.4} />

const BLUE: Ramp = ["#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e3a8a"]
const SKY: Ramp = ["#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985"]
const TEAL: Ramp = ["#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59"]
const GREEN: Ramp = ["#4ade80", "#22c55e", "#16a34a", "#15803d", "#14532d"]
const INK: Ramp = ["#27272a", "#3f3f46", "#27272a", "#18181b", "#09090b"]
const INDIGO: Ramp = ["#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#312e81"]
const ORANGE: Ramp = ["#fb923c", "#f97316", "#ea580c", "#c2410c", "#7c2d12"]
const CYAN: Ramp = ["#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#164e63"]

/** Blocks for the stack builder — the core of the resume, sized by weight. */
export const skillModules: TechModule[] = [
  block("python", "Python", "Primary backend language", brandIcon(siPython), 4, BLUE, "yellow"),
  block("fastapi", "FastAPI", "REST APIs with OpenAPI docs", brandIcon(siFastapi), 4, TEAL, "green"),
  block("react", "React", "UI library", brandIcon(siReact), 4, SKY, "blue"),
  block("next", "Next.js", "Full-stack React framework", brandIcon(siNextdotjs), 4, INK, "dark"),
  block("postgres", "PostgreSQL", "Relational data", brandIcon(siPostgresql), 4, INDIGO, "blue"),
  block("actions", "GH Actions", "CI/CD pipelines", brandIcon(siGithubactions), 4, INK, "blue"),
  block("node", "Node.js", "JavaScript runtime", brandIcon(siNodedotjs), 2, GREEN, "green"),
  block("docker", "Docker", "Containerized services", brandIcon(siDocker), 2, SKY, "blue"),
  block("azure", "Azure", "VM hosting", AzureIcon, 2, BLUE, "blue"),
  block("nginx", "Nginx", "Reverse proxy, SSL, load balancing", brandIcon(siNginx), 2, GREEN, "green"),
  block("tailwind", "Tailwind", "Utility-first CSS", brandIcon(siTailwindcss), 2, CYAN, "blue"),
  block("svelte", "Svelte", "SvelteKit apps", brandIcon(siSvelte), 2, ORANGE, "red"),
]

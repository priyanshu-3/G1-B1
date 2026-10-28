// Curated from github.com/jatinborabisht plus the client work on the resume.
// Left out: forks, the empty HoldMySpace repo, Dictionary (README credits another
// author) and the static Ecommerce page (its live build renders broken images).

export type Project = {
  title: string
  meta: string
  summary: string
  highlights: string[]
  stack: string[]
  repo?: string
  live?: string
  /** Screenshot in /public/projects. */
  image?: string
  accent: string
  note?: string
}

export const projects: Project[] = [
  {
    title: "ManageAll",
    meta: "Client · 2026",
    summary: "Production clinic-management system for a dental practice in Mumbai.",
    highlights: [
      "Appointments, patient records, billing, invoices and doctor allocation",
      "20+ documented FastAPI endpoints secured with JWT and RBAC",
      "Dockerized on an Azure VM behind Nginx with SSL and CI/CD",
    ],
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "Azure", "Nginx"],
    accent: "radial-gradient(120% 80% at 80% 0%,#2f6b5f 0%,#123029 45%,#0b1613 100%)",
    note: "Private client codebase",
  },
  {
    title: "Pastebin Lite",
    meta: "2025",
    summary: "Share text snippets that expire by time or after a set number of views.",
    highlights: [
      "Next.js App Router API with a health-check route",
      "Prisma on serverless Postgres (Neon) with view counting",
      "Unit tests in Vitest, end-to-end tests in Playwright",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vitest", "Playwright"],
    repo: "https://github.com/jatinborabisht/Pastebin-lite",
    live: "https://pastebin-lite-beta.vercel.app",
    image: "/projects/pastebin.png",
    accent: "linear-gradient(200deg,#26304d,#0b0e18)",
  },
  {
    title: "Online Bookstore",
    meta: "2026",
    summary: "Full-stack bookstore with a customer storefront and an admin console.",
    highlights: [
      "Role-based access: customers buy, admins manage inventory",
      "MySQL-backed catalog with server-side search and filtering",
      "JWT sessions, bcrypt hashing and transaction history",
    ],
    stack: ["Node.js", "Express", "MySQL", "JWT", "Tailwind CSS"],
    repo: "https://github.com/jatinborabisht/Online-Bookstore",
    accent: "radial-gradient(120% 80% at 20% 0%,#b4642c 0%,#4a230d 45%,#1a0c05 100%)",
  },
  {
    title: "Secure Notes API",
    meta: "2026",
    summary: "Authenticated REST API for personal notes.",
    highlights: [
      "Register and log in with bcrypt-hashed passwords and JWTs",
      "Per-user CRUD on notes behind auth middleware",
      "Rate limiting on auth routes against brute force",
    ],
    stack: ["Node.js", "Express", "SQLite", "JWT", "bcrypt"],
    repo: "https://github.com/jatinborabisht/Task_1",
    accent: "radial-gradient(120% 80% at 80% 10%,#6b4a8f 0%,#2a1c3a 45%,#120b19 100%)",
  },
  {
    title: "Restaurant Menu",
    meta: "2025",
    summary: "Responsive, mobile-first menu with live category filtering.",
    highlights: [
      "Built with SvelteKit and Tailwind CSS",
      "Category filters update the menu without a reload",
      "Deployed on Vercel",
    ],
    stack: ["SvelteKit", "JavaScript", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/jatinborabisht/Restaurantmenu",
    accent: "radial-gradient(120% 80% at 30% 0%,#c8371f 0%,#5a170c 45%,#1f0905 100%)",
  },
]

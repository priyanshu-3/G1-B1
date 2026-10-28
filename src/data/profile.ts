export const profile = {
  name: "Jatin Bisht",
  firstName: "Jatin",
  role: "Full-Stack Software Engineer",
  location: "Mumbai, Maharashtra, India",
  email: "Jatinborabisht@gmail.com",
  github: "https://github.com/jatinborabisht",
  linkedin: "https://www.linkedin.com/in/jatin-bisht-1b6a3b419",
  summary:
    "Full-stack engineer shipping production web apps with Python, FastAPI, React and Next.js — containerised with Docker, automated with GitHub Actions and served through Nginx on Azure and GCP.",
}

export type Role = {
  title: string
  company: string
  location: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: "Junior Software Engineer",
    company: "Aarama Ventures Pvt. LLP",
    location: "Mumbai",
    period: "Mar 2026 — Present",
    points: [
      "Design, build and ship production full-stack apps with Python, FastAPI, React.js, Next.js, Vite and Node.js.",
      "Document RESTful APIs with Swagger/OpenAPI as a single, testable reference for frontend and client teams.",
      "Automate build, test and deploy with GitHub Actions; containerise services with Docker on Azure VMs and GCP.",
      "Configure Nginx reverse proxy, load balancing, SSL/TLS and domain routing for production servers.",
    ],
  },
  {
    title: "Developer Intern",
    company: "ExclCloud",
    location: "Bengaluru",
    period: "Dec 2024 — Feb 2025",
    points: [
      "Shipped product features across core modules with SvelteKit and Node.js.",
      "Optimised backend logic and data-processing workflows for faster, more responsive pages.",
      "Built and deployed a Microsoft Teams bot on REST APIs that automates employee reward tracking.",
    ],
  },
]

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "CMR University, Bengaluru", period: "2023 — 2025" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Amrapali Group of Institutes, Uttarakhand", period: "2020 — 2023" },
]

export const certifications = [
  { name: "Gen AI Capabilities", issuer: "Testsigma Academy", date: "Sep 2026" },
  { name: "Programming in Java", issuer: "NPTEL, IIT", date: "Oct 2024" },
  { name: "AWS Billing and Cost Management", issuer: "Amazon Web Services", date: "Dec 2023" },
]

/** The full list from the resume, grouped the same way. */
export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "JavaScript (ES6+)", "Java", "SQL", "Bash"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Vite", "SvelteKit", "HTML5", "CSS3", "Tailwind CSS", "Responsive design"] },
  { label: "Backend & APIs", items: ["FastAPI", "Node.js", "Express", "REST APIs", "Swagger / OpenAPI", "JWT auth", "RBAC", "Teams bots"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Prisma", "Schema design", "Query optimisation"] },
  { label: "Cloud & DevOps", items: ["Azure VMs", "GCP", "Docker", "GitHub Actions", "Nginx", "Load balancing", "SSL/TLS", "DNS", "Linux", "Vercel", "Render"] },
  { label: "Testing & QA", items: ["Unit testing", "Vitest", "Playwright", "Postman", "Swagger UI", "Testsigma"] },
  { label: "AI", items: ["Generative AI", "AI-assisted test automation", "Prompt engineering"] },
  { label: "Practices", items: ["Git", "Agile / Scrum", "DSA", "OOP", "System design", "Performance"] },
]

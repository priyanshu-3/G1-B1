# Jatin Bisht — Portfolio

Vite + React + TypeScript + Tailwind v4, shadcn project structure (`components.json`, `@/` alias, `src/components/ui`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/ — deploy to Vercel, Netlify, etc.
```

## Where things live

| What | File |
| --- | --- |
| Name, links, experience, education, certs, skill list | `src/data/profile.ts` |
| Projects shown in the hover gallery | `src/data/projects.ts` |
| Blocks in the stack builder | `src/data/skills.tsx` |
| Project screenshots | `public/projects/` |
| Colours and fonts | `src/index.css` |

UI components (`src/components/ui`): `prisma-hero`, `hover-expand-gallery`, `interactive-tech-stack-builder`.
Page sections: `src/components/sections`.

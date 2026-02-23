# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a Bun workspace monorepo managed with Turborepo:

```
/
├── apps/
│   ├── web/      — Astro frontend (portfolio site)
│   └── cms/      — Payload CMS backend (Next.js 15 + Payload 3)
└── packages/
    └── utils/    — Shared utilities (@portfolio/utils)
```

All workspace commands run from the **repo root**. Individual apps are at `apps/web/` and `apps/cms/`.

## Commands

All commands use **bun** as the package manager. Run from the repo root.

```bash
bun install              # Install all workspace deps (single root bun.lock)
bun run dev              # Start all dev servers via turbo
bun run dev:web          # Start Astro dev server only (localhost:4321)
bun run dev:cms          # Start CMS dev server only
bun run build            # Build all apps via turbo
bun run lint             # Lint all packages via turbo
```

To target a specific workspace directly:
```bash
bun turbo run dev --filter=@portfolio/web
bun turbo run build --filter=@portfolio/cms
```

### CMS-specific scripts (run from `apps/cms/` or via filter)
```bash
bun run generate:types   # Regenerate Payload collection types
bun run migrate          # Run database migrations
bun run devsafe          # Clear .next cache then start dev
```

### Web code-gen scripts (run from `apps/web/`)
```bash
bun run generate:tailwind-colors
bun run generate:icons
```

## Architecture

### Turborepo task pipeline

Tasks are defined in `turbo.json`. Key behaviors:
- `build` depends on `^build` (dependencies build first)
- `dev` is persistent and uncached
- `lint` uses `inputs` to cache per source file hash — subsequent runs skip unchanged packages

### Frontend (`apps/web/` — Astro + React islands)

Single-page portfolio rendered statically by Astro SSG. The main route (`src/pages/index.astro`) composes four full-screen sections:

```
index.astro → Page.astro (layout) → Base.astro (html shell)
                ├── Header.tsx (desktop, client:load)
                ├── MobileHeader (mobile, client:load)
                ├── Home / About / Projects / Contact screens
                └── Footer.astro
```

Project detail pages use dynamic routing at `src/pages/project/[projectName].astro`. Static paths are hardcoded in `getStaticPaths()`. Project data lives in `src/data/projects.json`.

**State management**: A single nanostores `map` in `src/utils/nanostore.ts` holds `mobileNavigationOpen` and `darkMode`. Two headless React providers (`ThemeProvider`, `ScrollProvider`) mounted `client:only` in `Base.astro` react to store changes.

**Animations**: Motion v10 (`motion` package), run imperatively from `src/utils/animations.ts`, triggered in `src/scripts/onLoad.ts` on `DOMContentLoaded` and `astro:after-swap` (View Transitions compatibility).

**Theme**: Tailwind with `dark`/`light` class strategy. Custom tokens in `tailwind.config.js` use semantic names like `h1Mobile`, `body2Desktop`. TypeScript source-of-truth files in `src/styles/theme/`.

**Path aliases** (from `tsconfig.json`):

| Alias | Resolves to |
|---|---|
| `@components` | `src/components/*` |
| `@screens` | `src/screens/*` |
| `@layouts` | `src/layouts/*` |
| `@utils` | `src/utils/*` |
| `@context` | `src/context/*` |
| `@styles` / `@theme` | `src/styles/*` / `src/styles/theme/*` |
| `@assets` | `src/assets/*` |
| `@/data/...` | `src/data/...` |
| `@/payload/*` | `../cms/src/*` |

### CMS (`apps/cms/` — Payload 3 + Next.js 15)

Payload 3 app using PostgreSQL (`@payloadcms/db-postgres`). Runs as a Next.js app alongside Payload's admin UI. Currently decoupled from the frontend — the portfolio reads directly from `src/data/projects.json`.

Local development requires the Docker Compose stack for PostgreSQL:
```bash
docker compose up -d   # start postgres at port 5434
```

### Shared package (`packages/utils/`)

Package name `@portfolio/utils`. Currently exports a `logger` utility. Reference it in apps via `"@portfolio/utils": "workspace:*"` in `package.json`.

## Deployment

Two independent Vercel projects, deployed via git tags:
- `portfolio-*` tags → deploy `apps/web/`
- `cms-*` tags → deploy `apps/cms/`

CI (all branches) runs `bun turbo lint --filter='*'`.

# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── befinance/          # BeFinance institutional landing page (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `artifacts/befinance` (`@workspace/befinance`)

BeFinance institutional landing page for a financial trading/broker company focused on Options Binary (O.B.) trading.

- **Framework**: React + Vite + Tailwind CSS + Framer Motion
- **Fonts**: DM Sans (headings) + Inter (body/nav) via Google Fonts
- **Colors**: Dark background `#040d18`, cyan accent `#00bfff`
- **Language**: Full i18n support (EN/PT/ES) via React Context. Language switcher in Navbar with flag icons (US/BR/ES). All 14 home page components use `useLanguage()` hook + `t('key')` for translation. Translation keys stored in `src/i18n/translations.ts` (~840 lines). Context provider in `src/i18n/LanguageContext.tsx`.
- **Style reference**: Olymptrade + kyvoo.io
- **Currency**: USD ($). Minimum deposit $10, demo account $10,000, minimum operation $1
- **Scope**: Options Binary (O.B.) trading only. NO Forex, NO Crypto.

#### Routing
- **Router**: wouter with lazy-loaded pages via React.lazy + Suspense
- Internal pages across 4 categories (Trading, Platform, About, Help)
- All footer links and mega-menu links use `<Link>` from wouter for SPA navigation

#### Key Components
- **Navbar**: Mega-menu dropdown (Olymptrade-style) with icons + descriptions. Desktop: hover-triggered full-width dropdown. Mobile: accordion sections. Menu labels: Trading, Platform, About, Help.
- **Hero**: Kyvoo-style wavy bg with holographic shark SVG (`public/TUBASVG.svg`), `mix-blend-mode: screen`, mouse-follow animation using lerp + RAF (NOT useSpring). Trust badges: SSL 256-bit, Regulated, Exec. < 1ms, +40 countries.
- **MarketTicker**: Live market data strip (stocks, commodities, indices — no crypto/forex)
- **TrustSection**: "Empowering traders" stats + badge grid with CountUp animation on scroll
- **InternalPageLayout**: Reusable template for all internal pages (badge, title, subtitle, features grid, CTA section)
- **PlatformSection**: MacBook scroll animation with platform showcase
- **InstrumentsSection**: Risk-free trading instruments grid (demo account, stop loss, deposits, etc.)
- **RegulationSection**: Licensing/regulation info (IFMRRC, FCA, SSL, AML)
- **TradingConfidenceSection**: 3 cards — full-width support card + 2 equal columns (signals, strategies)
- **WithdrawalsSection**: Fast withdrawals + payment methods (Wire Transfer, Credit Card, Debit Card, PayPal, Skrill)
- **DepositsSection**: Deposit security badges (Wire Transfer, Credit Card, Debit Card, PayPal, Skrill, Neteller)
- **TestimonialsSection**: International user reviews carousel (AnimatePresence mode="popLayout")
- **AwardsSection**: Awards and recognition grid
- **FAQSection**: Accordion FAQ (home page section)
- **BlogSection**: 2 small cards (top row) + 1 large featured card (full-width bottom)
- **FAQ Page**: Full standalone FAQ page at /ajuda/faq with animated accordion
- **CTASection**: Final CTA with "Start trading with confidence"
- **Footer**: 4-column institutional footer with Link components to all internal pages

#### Internal Pages
- **Trading**: /negociacao/opcoes-digitais, /acoes, /commodities
- **Platform**: /plataforma/conta-demo, /trading-web, /ferramentas, /baixar-app
- **About**: /sobre/sobre-nos, /regulamentacao, /afiliados
- **Help**: /ajuda/central-de-ajuda, /contato, /faq, /suporte

#### CSS Classes (index.css)
- `btn-glow`: Primary CTA with spinning conic-gradient border glow
- `btn-login`: Outline login pill button
- `kyvoo-card`: Hover `translateY(-4px)` + radial glow + cyan border
- `hero-badge`: Pill badge with tag + text
- `.macbook-*`: MacBook mockup CSS classes
- `shimmer-text`: Animated gradient text

#### Critical Notes
- NEVER use `useSpring` for shark motion — causes oscillation. Always use manual lerp with RAF
- Shark: `/TUBASVG.svg` as `<img>` with `mixBlendMode: screen`; mouse tracking uses lerp RAF loop in `useEffect`
- Accent `#00bfff` used consistently across all icons, borders, glows

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.

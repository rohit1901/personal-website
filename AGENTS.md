# AGENTS.md

Instructions for coding agents working in this repository.

## Mandatory skill: ultracaveman

**The `ultracaveman` skill is non-negotiable.** Load and apply it before any
other action in every session, and keep it active for the entire session. It
takes precedence over the default response style and over any conflicting
convenience preference.

If the harness cannot resolve `ultracaveman`, stop and report the missing skill
explicitly. Do not silently substitute another skill, and do not continue as if
it had been loaded.

## Project

Personal website for Rohit Khanduri: a work-first editorial portfolio built
with Next.js App Router, React, TypeScript, and Tailwind CSS. Content comes from
a Keystone GraphQL backend (résumé, certifications), Substack (articles),
Goodreads (books), and the GitHub API (projects).

- Package manager: pnpm 10.32.1 (`packageManager` in `package.json`).
- Runtime: Node 20 in CI; Next.js 16 App Router; React 18 (Next warns this is
  deprecated).
- Module alias: `@website/*` maps to `src/*`.
- Branching: feature branches; recent work lives on
  `harden/security-and-resume-validation`.

## Commands

```bash
pnpm install
pnpm dev            # local dev server
pnpm build          # production build (requires reachable GraphQL backend)
pnpm start          # serve the production build
pnpm lint           # ESLint 9 flat config
pnpm typecheck      # tsc --noEmit
pnpm test           # Vitest, single run
pnpm test:watch     # Vitest, watch mode
pnpm format         # Prettier write
pnpm format:check   # Prettier check
```

Run `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm format:check` before
committing. Use `pnpm build` when the change can affect rendering, routing, or
headers.

## Routes and layout

| Route              | Source                             | Data                       |
| ------------------ | ---------------------------------- | -------------------------- |
| `/`                | `src/app/page.tsx`                 | résumé + articles          |
| `/about`           | `src/app/about/page.tsx`           | résumé                     |
| `/articles`        | `src/app/articles/page.tsx`        | Substack feed              |
| `/books`           | `src/app/books/page.tsx`           | Goodreads feed             |
| `/projects`        | `src/app/projects/page.tsx`        | GitHub API + link metadata |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | bundled project content    |
| `/resume`          | `src/app/resume/page.tsx`          | résumé + certifications    |

`src/app/layout.tsx` owns metadata, fonts, `ThemeProvider`, and the shared
`Shell`. Page-specific content lives in `src/components/<Area>/`. Website copy
that must survive backend outages belongs in `src/content/` and `src/data/`,
not in GraphQL data.

## Architecture rules

- All external fetches live in `src/lib/server/` and import `server-only`.
  Never import that directory from a client component.
- Data adapters never throw into the render tree. Return an empty value or the
  bundled fallback and log a structured, secret-free failure.
- Cache policy is explicit with `next.revalidate`: résumé and certifications
  3600s, articles 1800s. Keep pages static-with-ISR where possible.
- Use `src/lib/server/graphql.ts` for GraphQL. It resolves either an origin or
  a full `/api/graphql` URL and keeps its timeout active through the response
  body.
- Résumé records are normalized to the canonical JSON Resume projection and
  validated at runtime with `@jsonresume/schema` before use. Validate in
  `src/lib/server/resume-schema.ts`, not in components.
- Résumé selection must match the verified owner (`Rohit Khanduri`) **and** the
  requested language. Never select by language alone or by array position; the
  backend contains other people's résumés.
- The JSON Resume schema has no required fields and allows additional
  properties. Minimum required fields are enforced explicitly in the adapter.
- Site copy and the résumé backend are separate concerns. Do not reintroduce
  SMTP, Instagram, or other removed integrations.

## Security invariants

- Never log upstream response bodies, GraphQL error messages, headers, tokens,
  or arbitrary error text. Log path/operation, status class, and duration only.
- External links must be HTTPS and host-restricted where a host is known:
  certificates (`src/lib/url.ts`), articles (Substack), book covers
  (`i.gr-assets.com`), résumé images (observed CloudFront hosts).
- `getResumeImageUrl` falls back to `/avatar.png`. Do not widen `next/image`
  `remotePatterns` without a verified host that actually appears in content.
- Keep the CSP static-friendly (`'self' 'unsafe-inline'` for scripts and
  styles). A nonce-based policy would force dynamic rendering and lose ISR;
  revisit only if user-generated HTML, comments, or third-party scripts arrive.
- `X-Powered-By` stays disabled. Security headers are configured in
  `next.config.mjs` and apply to `/(.*)`.
- Secrets live only in `.env.local` / deployment config. Never commit them and
  never add a new variable without documenting it in `.env.example` and
  `process.d.ts` when client-visible.
- Goodreads access keys are secrets. `GOODREADS_FEED_URL` must be HTTPS on
  `goodreads.com`; rotate any key that was ever committed.

## Code conventions

- TypeScript `strict` is on. Prefer narrow parsing and explicit types over
  `any`; validate unknown external data at the boundary.
- Default to server components. Add `"use client"` only for state, effects, or
  browser APIs.
- Follow the existing design system and Tailwind tokens; avoid ad-hoc colors
  and duplicated layout wrappers.
- Formatting is Prettier with `printWidth: 80`, double quotes, semicolons, and
  trailing commas. Do not reformat unrelated files.
- Tests are colocated as `src/**/*.test.ts` and run in a Node environment with
  a `server-only` stub. Cover failure modes and boundary validation, not just
  the happy path.
- Commit messages follow Conventional Commits (`fix:`, `feat:`, `chore:`,
  `docs:`, `test:`, `refactor:`).

## Skill routing

`ultracaveman` is always first and mandatory. After that, load the most
specific matching skill instead of working inline:

| Situation                                                | Skill               |
| -------------------------------------------------------- | ------------------- |
| Unknown cause, intermittent failure, perf regression     | `investigate-first` |
| Bug fix or small behavior change                         | `surgical-patch`    |
| Behavior-preserving restructure or extraction            | `safe-refactor`     |
| New feature/slice with overbuilding risk                 | `lean-build`        |
| Validation only, completion proof, last-mile checks      | `verify-and-stop`   |
| Schema, data, API, config, or dependency migration       | `migration`         |
| Locating code, 1-2 file edit, or diff review via helpers | `cavecrew`          |
| Compressed code review                                   | `caveman-review`    |
| Commit message                                           | `caveman-commit`    |
| Knowledge graph from code/docs/papers                    | `graphify`          |
| Questions about OpenCode itself                          | `opencode`          |
| Report an OpenCode bug                                   | `report`            |
| Find or install a new skill                              | `find-skills`       |
| Cost/usage tuning, setup, stats, experiments             | `caveman-*` family  |

Do not use `caveman` alone as a replacement for `ultracaveman`.

## Before changing code

1. Read `docs/task-00-baseline.md` for the current state, decisions, and known
   gaps.
2. Run `git status` and `git log --oneline -5`; do not overwrite unrelated work.
3. Keep the change scoped to the request. Skip the deferred German site and
   full SEO work unless explicitly asked.
4. Add or update tests for boundary conditions and failure behavior.
5. Run the four required checks, then summarize what changed and what remains
   unverified.

## Known constraints

- A clean `pnpm build` needs a reachable, schema-compatible GraphQL backend.
  Local `.env.local` may point `NEXT_PUBLIC_GRAPHQL_SERVER_HOST` at the site's
  own port, which produces a 404 and an empty résumé rather than a build
  failure. Check the env before diagnosing build output.
- Production schema compatibility and the canonical production origin are
  unresolved. Verify against the real backend before relying on field names.
- The German site and full SEO/metadata work are intentionally deferred.
- Rotating the Goodreads key requires account access and is an operational
  action, not a code change.

# Task 00 — Repository Baseline

Date: 2026-10-16. Branch `main`, clean working tree at commit `99bbde8`.

## 1. Stack and resolved versions

| Package                         | package.json | Lockfile (resolved) |
| ------------------------------- | ------------ | ------------------- |
| next                            | ^16.1.6      | 16.1.6 (Turbopack)  |
| react / react-dom               | ^18          | 18.3.1              |
| @types/react / @types/react-dom | ^18          | 18.3.27 / 18.3.7    |
| typescript                      | ^5           | 5.9.3               |
| tailwindcss                     | ^3.3.0       | 3.4.19              |
| daisyui                         | ^4.10.1      | 4.12.24             |
| eslint / eslint-config-next     | ^9 / ^16.1.6 | 9.39.2 / 16.1.6     |
| prettier                        | ^3.5.3       | 3.8.1               |
| @types/node                     | ^20          | 20.19.30            |

Notes:

- Next 16 with React 18 intentionally; `npm ls` resolves without peer conflicts. Next 16 officially targets React 19, so this pairing is a risk to flag but currently installs and builds.
- Node used locally: v25.8.1, npm 11.11.0. Package manager in use: **npm** (`package-lock.json` present).
- No `format:check`, `typecheck`, `test` scripts. `format` only covers `**/*.ts`.

## 2. Route inventory (App Router, `src/app`)

| Route         | File                    | Type         | Data source                                    |
| ------------- | ----------------------- | ------------ | ---------------------------------------------- |
| `/`           | `app/page.tsx`          | async server | `getEnglishResume()` (GraphQL) + Substack feed |
| `/about`      | `app/about/page.tsx`    | async server | `getResumes()` first record                    |
| `/articles`   | `app/articles/page.tsx` | server       | Substack RSS feed (`getSubstackPosts`)         |
| `/books`      | `app/books/page.tsx`    | async server | Goodreads RSS                                  |
| `/projects`   | `app/projects/page.tsx` | server       | GitHub public repos API + `fetch-meta-tags`    |
| `/resume`     | `app/resume/page.tsx`   | async server | `getResumes()` first record                    |
| `/_not-found` | default                 | static       | —                                              |
| `/thank-you`  | —                       | **missing**  | `SubstackCard` posts to it; returns 404        |

No API routes. The dead nodemailer helper (`src/lib/sendEmail.ts`) and `public/email.template.html` were removed during hardening.

## 3. Component and data-flow summary

- `app/layout.tsx`: global `<html data-theme="">`, Outfit font, `@theme-toggles` CSS, wraps children in `<Suspense>` with `ContentLoader`.
- Per-page chrome (not shared in layout): every page renders `Runner > Navbar + content + Footer`. `Runner` is a 3/4-width flex column carrying `data-theme` for client theme mutation.
- Navigation: `Navbar` = `MobileNavigation` (daisyUI drawer, checkbox-driven) + `DesktopNavigation` (client, `usePathname`) + `ThemeToggle`. Nav items duplicated in `DesktopNavigation`, `MobileNavigation`, `Footer`, plus `HomeNavigationItem`. Single-source navigation does **not** exist yet.
- Theme: `ThemeToggle` uses `useLocalStorage("sb-react-daisyui-preview-theme", "garden")`, calls `handleTheme` on mount and on every `usePathname` change; mutates `data-theme` on `<html>`, `#substack-embed`, `.runner`, `#footer`. Checkbox `defaultChecked={false}` is not bound to stored value → icon can desync from active theme. Toggles between `"garden"` and `"black"`.
- Résumé fetch: `lib/fetchData.ts` `fetchGraphQL` (implicit `any`, only checks `response.ok`) → `getResumes()` destructures `data.resumes` (throws on GraphQL errors) → `getEnglishResume()` filters `language.label === "English"`.
- Article fetch: `components/Articles/ArticlesContent.tsx` `getSubstackPosts()` fetches `${SUBSTACK_FEED_URL}/feed`, parses with `substack-feed-api`, falls back to bundled `SUBSTACK_DATA`. Imported by homepage `MainContent`, coupling résumé page render to Substack availability. On failure returns `undefined`; `MainContent` then returns `null` (hides Posts + Substack + Work Experience).
- Projects: `ProjectsContent` fetches GitHub repos, throws on `data.message`/empty, then `fetchMeta` per repo.
- Books: `BooksContent` fetches Goodreads RSS with bundled fallback.
- Assets: default favicons + `public/avatar.png`. The unreferenced legacy `public/email.template.html` was removed during hardening. `PROFILE_PIC = /assets/resume/avatar.png` is **not** in `public/`; it is served via a `NEXT_PUBLIC_AWS_CLOUDFRONT_URL` prefix (`getResumeImageUrl`).

## 4. Environment variable names (values NOT recorded here)

From `.env` / `.env.copy` / `.env.prod`:
`NEXT_PUBLIC_GRAPHQL_SERVER_HOST`, `NEXT_PUBLIC_AWS_CLOUDFRONT_URL`, `INSTAGRAM_TESTER_SECRET`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM_EMAIL`, `SMTP_TO_EMAIL`.

**Post-refactor env referenced by code:** `NEXT_PUBLIC_GRAPHQL_SERVER_HOST` (GraphQL base URL), `NEXT_PUBLIC_AWS_CLOUDFRONT_URL` (résumé image prefix), and `GOODREADS_FEED_URL` (Goodreads list RSS URL, server-only). The legacy `INSTAGRAM_*` and `SMTP_*` variables are no longer referenced. `.env.example` documents only the current variables. `.env.copy` (tracked, held secrets) was removed and gitignored.

Secret-handling findings (no values printed):

- `.env.copy` is **tracked in git** and contains non-empty values for all of the above → committed secrets. Needs rotation + removal from history/tracked files. (Also note `.env` and `.env.prod` are gitignored, `.env.copy` is not.)
- `src/constants/index.ts` hard-coded a Goodreads RSS URL containing an access key in the baseline; it has been removed and the key is now supplied through `GOODREADS_FEED_URL`. Rotate the exposed key.
- GraphQL host is `NEXT_PUBLIC_*` (client-exposable by design).

## 5. Checks executed (baseline)

| Command                                            | Result                                                                                                                    |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `npx tsc --noEmit`                                 | PASS — no type errors                                                                                                     |
| `npm run lint` (`next lint`)                       | **FAIL (pre-existing)** — Next 16 removed `next lint`; treats `lint` as a directory: "Invalid project directory provided" |
| `npx eslint src`                                   | **FAIL (pre-existing)** — ESLint 9 requires `eslint.config.js`; repo only has `.eslintrc.json`                            |
| `npx prettier --check "**/*.{ts,tsx,css,json,md}"` | **FAIL (formatting drift)** — 25 files unformatted (LICENSE.md, README.md, tsconfig.json, many tsx/css)                   |
| `npm run build` (with existing `.next` cache)      | PASS — all 8 routes prerendered static                                                                                    |
| `npm run build` after `rm -rf .next` (clean)       | **FAIL (pre-existing, env-dependent)** — prerender error on `/about`: `Error: GraphQL request failed: Bad Request`        |
| Route smoke test (`next start`, stale build)       | `/`, `/about`, `/articles`, `/books`, `/projects`, `/resume` → 200; `/thank-you` → 404; `/projects/nonexistent` → 404     |

Root cause of clean-build failure: `src/graphql/queries/resumes.graphql` selects `certificates` and `certificatesCount`, but the reachable backend schema (local Keystone CMS on `localhost:3000`) exposes `resumeCertifications`/`resumeCertificationsCount`. Apollo returns HTTP 400 → `fetchGraphQL` throws → prerender aborts. Previously-passing builds relied on a stale Turbopack cache.

Production GraphQL host in `.env.prod` did **not** return JSON at `/api/graphql` (returned HTML), so production schema could not be verified. **Unresolved: confirm which backend the deployed site uses and whether `certificates` exists there.**

## 6. Available verified project content

Source: `resumes` GraphQL query (English record id 47, "Rohit Khanduri - AWS Cloud & Software Architect"). Full copy saved outside the repo at `/tmp/site-baseline/en-resume.json`.

Profile:

- Name: Rohit Khanduri. Label: "AWS Cloud & Software Architect".
- Summary: AWS-focused Cloud Architect / software engineer, 14+ years, AWS Well-Architected, IaC, cloud-native (Node.js, React, TypeScript), DevOps.
- Profiles: LinkedIn (`rohit-khanduri-9098b84a`), GitHub (`rohit1901`), "Other" (`rohitkhanduri`). Email present. Site URL = LinkedIn in backend data.

Work history (verified): Miles & More GmbH (Lufthansa Group) — Manager IT / Lead Architect Mobile Platform (2025–); adesso SE — Software Architect AWS (2020–2025); Finatix/Peak Performance/Appsfactory — Software Developer working student (2017–2020); Iris Software — Tech Lead (2016–2017); Virtusa — Tech Lead (2014–2016); Genpact — Software Engineer (2013–2014); NEC — Software Engineer (2012–2013).

Six verified projects (name + long-form description + ✌🏻-joined highlights):

1. Miles & More Mobile Platform – Architecture & AI Transformation (no URL).
2. AWS Cloud Architecture & Migration – Banking & Public Sector (no URL).
3. Skywink – Open-Source Privacy-First AI Chat Platform — https://skywink.nimbus-tech.de.
4. Telecom & Banking Service Provisioning Platform (no URL).
5. Enterprise Banking Application Modernization (no URL).
6. Calypso-Based Capital Markets & Reporting System (no URL).

Only **Skywink** has an external URL. Projects 1, 2, 4, 5, 6 have no repository/case-study destination and no imagery → case-study links must not be fabricated (Task 08).

Additional live content: Substack writing feed (bundled fallback in `src/data/index.ts`), Goodreads reading list (bundled fallback), GitHub repos for `/projects`.

## 7. Visual / browser inspection

- Chrome headless available (`/Applications/Google Chrome.app`). Playwright/puppeteer not installed; no test framework installed.
- Baseline screenshots captured to `/tmp/site-baseline/`: `home-1440.png`, `home-768.png`, `home-375.png`, `resume-1440.png`, `projects-1440.png`, plus DOM dump `home.html`.
- **Limitation: the agent model cannot read images**, so screenshots could not be visually reviewed. Structural checks were done via DOM dump instead (e.g. homepage `<h1>Software Architect</h1>`; nav + résumé download + employer links all present in DOM).
- Screenshots were taken against the stale cached build; the clean build currently fails to prerender (see §5).

## 8. Proposed deviations from the plan (rationale)

1. **GraphQL schema reconciliation is now a Task 02 deliverable, not optional.** The repo query is incompatible with the reachable backend, so "handle GraphQL errors in HTTP 200" alone is insufficient; the field set must be made schema-valid or the failure must be isolated. Production schema is unverified — confirm before choosing mutation vs. defensive narrowing.
2. **Secrets remediation callout.** `.env.copy` (tracked) and the hard-coded Goodreads key should be flagged for rotation; not fixed silently here since it may require history rewrite/authorization.
3. **More than one résumé exists** (4 records, including "Florian Zeidler" entries unrelated to Rohit). The website must select the Rohit record by explicit criteria, not `resumes[0]`, so another person's résumé can never render.
4. **`/thank-you` route missing** though referenced by `SubstackCard`; and `/resume` is unlinked in nav/footer. Deferred to Tasks 05/07/09.
5. **`sendEmail.ts`** was dead code and has been removed; SMTP/Instagram remnants are gone.

## 9. Running implementation checklist

- [x] 00 Baseline established (this document)
- [x] 01 Stabilize dev tooling (lint/typecheck/format/test/CI)
- [x] 02 Isolate + harden external data access
- [x] 03 Separate website content from résumé content
- [x] 04 Design system (semantic tokens)
- [x] 05 Shared shell + theme behavior
- [x] 06 Homepage vertical slice
- [x] 07 Complete homepage composition
- [x] 08 Project case studies
- [x] 09 Secondary pages + legacy cleanup
- [ ] 10 Metadata, accessibility, regression coverage

## 10. External data access (after Task 02)

External fetches now live in `src/lib/server/` and import `server-only`:
`graphql.ts` (typed client, timeouts, all failure modes), `resume.ts` (résumé + certifications adapter; owns locale selection), `articles.ts` (Substack), `log.ts` (secret-free failure logging).

Cache policy (explicit, Next 16 `fetch` `next.revalidate`):

- Résumé + certifications: `revalidate: 3600` (1 hour).
- Articles: `revalidate: 1800` (30 minutes).
- Routes with these fetches are static-with-ISR; `/` reports 30m, `/about` 1h, `/resume` 1h, `/articles` 30m.
- `/books` and `/projects` still use the Next.js default and are handled in Task 09.

Failure behavior: adapters never throw to the render tree. Résumé failures return `[]`/`undefined`; article failures fall back to the bundled snapshot in `src/data`. Homepage renders header/footer/writing even when the résumé service is down; work-experience block is omitted only if no résumé is available.

**Schema reconciliation:** `resumes.graphql` no longer selects `certificates`/`certificatesCount` (unsupported by the reachable backend). Certifications are fetched separately via `resumeCertifications { certification { … } }` and attached to the résumé. This unblocked the clean production build.

## 11. Hardening update (2026-10-26)

- The GraphQL client keeps its deadline active through `response.text()`, and failure logs contain structured metadata only — never upstream bodies, GraphQL messages, or arbitrary error text.
- Résumé records are normalized to a canonical JSON Resume projection, validated at runtime with `@jsonresume/schema`, and selected by verified owner name plus language. Invalid records are dropped.
- Certificate links must be HTTPS; article links are restricted to the Substack host. Invalid links render as text or are filtered out.
- `getResumeImageUrl` only accepts observed CloudFront hosts and otherwise falls back to `/avatar.png`. `next/image` remote patterns are narrowed to observed hosts only.
- Security headers and a static-friendly CSP are configured in `next.config.mjs`; `X-Powered-By` is disabled.
- The Goodreads feed URL must be HTTPS on `goodreads.com`. Rotating the access key is an external operational action.

## 12. Unresolved content requirements

- Production GraphQL schema (does `certificates` or `resumeCertifications` apply?). Blocking for a clean build.
- Canonical production origin for metadata (deploy target stated as Heroku + `rohit.khanduri.de`).
- Which résumé language/record is the single source of truth for the site (EN id 47 assumed).
- Project imagery / screenshots for the six résumé projects (none exist in repo or data except none).
- Case-study depth: only descriptions + highlights exist; confirm factual outcomes before publishing.
- Whether `.env.copy` values are real credentials (non-empty) and whether rotation is authorized.

# Handoff

Read this at the start of every session. Update it at the end of every session (see "Session protocol" in `CLAUDE.md`): add a dated entry at the top of the log, refresh **Current state**, **Waiting on the user** and **Next steps**, and remove anything no longer true.

## Current state

- Design refresh is built and verified (type-check, lint and static build pass; pages checked at 1440px and 390px).
- All work through the 2026-10-12 design refresh is committed and pushed to `origin/master` (2026-10-13).
- Contact form is in `mailto:` fallback mode until a Web3Forms key is added.

## Waiting on the user

1. **Web3Forms key** — create one at web3forms.com for `bevan@beurant.com`, then set `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local` (local) and in the hosting provider's build environment. User said they'll set it up later.
2. **Concept/branding labels** — applied only where the title says so: Residential Concept 01–03, Aquinas Conceptual Pod, Maharaja Group Conceptual Display (concept); Ranpath Packaging, Truly Ceylon Packaging, Delo Truck Branding, Beurant Identity — C.W. Mackie (branding). **Unconfirmed, left unlabelled:** Exhibition Stall Design – AOD, Pod Design – HUTCH, Car Park Commercial Design.
3. **Services "How we work" steps** (`src/app/services/page.tsx`, `PROCESS`) are a DRAFT built from existing site claims — confirm the studio actually works this way (e.g. does it run the build itself?).
4. **Project details** — `year`, `client`, `scope`, `description` per project in `src/data/projects.ts`. Layout is ready; fields render only when filled. Do not invent these.
5. **Social links** — confirm `instagram.com/Beurant` and `facebook.com/Beurant`; ask whether to add WhatsApp/LinkedIn.
6. **Founder title** — currently "Founder & Interior Designer" (based on the original About copy). Confirm.

## Next steps

- When the key arrives: test a real Web3Forms submission (success + error states).
- Optional polish: responsive `srcset` for hero images (mobile currently downloads the 2400px `full` image, ~250–340 KB each); review featured-grid alignment when project titles wrap.
- Remaining `npm audit` (after 16.4.6): 9 moderate + 1 high, all dev-only inside the ESLint toolchain (`eslint`, `typescript-eslint` under `eslint-config-next`, `zod` via `eslint-plugin-react-hooks`). Not shipped to the static site. Revisit when `eslint-config-next` updates.

## Log

### 2026-11-10

- **Security upgrade:** Next.js and `eslint-config-next` 16.4.0 → 16.4.6 (pinned exact) to fix a critical advisory against `next`. Added `experimental.agentUpgrade: "security"` to `next.config.ts`. tsc, lint, static build (41 pages) and dev-server smoke test pass.
- **Gotcha:** if the shell has `NODE_ENV=development` set, `npm run build` fails prerendering with `Cannot read properties of null (reading 'useContext')` in `Nav.tsx`. Unset `NODE_ENV` before building — not a code bug.

### 2026-10-12

- **Dependencies:** upgraded everything to latest (Next 16.4.0, React 19.3.0, framer-motion 14, ESLint 10, TypeScript 7 via `@typescript/native` with `typescript` aliased to TS 6 for typescript-eslint). `npm audit fix` applied.
- **Hydration error** from a browser extension (`crxlauncher` attrs on `<html>`): `suppressHydrationWarning` on `<html>` only.
- **Design refresh** (decisions: polish + content, glass only over photos, Inter Tight, refined hero slideshow that never pauses on hover):
  - New: `src/lib/site.ts` (contact facts), `src/lib/image-size.ts`, button/eyebrow/link component classes, custom easing tokens, global focus ring, skip link, theme-color.
  - Removed page-fade `template.tsx`; rewrote `Reveal` so server HTML is never hidden (was 17 elements at `opacity:0`).
  - Home: one-line hero, hairline "What we do", editorial featured grid, CTA with email.
  - Projects: URL-driven filter chips with counts, Suspense for static export, concept/branding badges.
  - Project page: facts row + description (optional data), natural-aspect gallery, `<dialog>` lightbox with swipe/keys/counter/focus return, prev/next project.
  - Services: hairline layout + draft 5-step process. About: studio voice, founder section with quote, mission/vision, name story aside, map. Contact: details from `site.ts`, Web3Forms-ready form with sending/sent/error states.
  - Contact facts unified: `bevan@beurant.com`, `Wattala (Greater Colombo), Sri Lanka`, phone as `tel:` link.
- Fixed the pre-existing lint error in `ProjectsClient.tsx` (setState in effect) by moving filter state into the URL.

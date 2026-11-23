# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as the approved "Annual Report" design, with all content matching the 2027 resume.

**Architecture:** A statically rendered Next.js App Router page composed of one Server Component per section, all reading from `src/content/resume.ts`. Client JavaScript is limited to the navbar, theme toggle, scroll reveal, and dialog. Old components stay in place, unimported, until the owner confirms their deletion.

**Tech Stack:** Next.js 16.4.6, React 19, TypeScript 5, Tailwind CSS 3.4, ESLint 9, lucide-react 1.x, `next/font`, Vercel.

**Spec:** `docs/superpowers/specs/2026-11-23-portfolio-redesign-design.md`

## Global Constraints

- Every fact comes from `/Users/lcd/Downloads/Resume/Resume 2027/DungLe_Resume_Public.tex` or the spec's owner-confirmed list. Never invent metrics, projects, or skills.
- No phone number in `src/`, `public/`, docs, commits, or published PDFs.
- SAT copy keeps r=0.701, r=0.572, and p=0.175, and says the difference was not statistically significant.
- ~7.3 MW, ~$886K, and ~3,400 t CO2 always refer to the top 10 buildings.
- Claude Code in Action is dated March 2026. The CodePath image is labeled as program admission.
- Never delete a file without owner confirmation.
- Work on `redesign-2027`. Merge to `main` only after the owner reviews the Vercel preview.
- Palette, fonts, and motion follow the spec's Visual system section exactly.
- No progress bars or skill percentages. Charts use published values only.
- Components use explicit prop interfaces. All text is in English.

**Verification for every task ("Standard checks"):**

```bash
npx tsc --noEmit                # exits 0
npm run lint                    # no errors or new warnings
npm run build                   # succeeds, route / is static
git grep -nE '\(?[0-9]{3}\)?[ .-][0-9]{3}[ .-][0-9]{4}' -- src   # no output
git grep -n 'significantly stronger' -- src                      # no output
```

Then run `npm run start` and use Playwright MCP (headless Chrome if unavailable) to load the affected section at 375px and 1440px in light and dark. Expected: no console errors, `document.documentElement.scrollWidth <= innerWidth`, and screenshots reviewed.

**Commit step for every task:** dispatch the project `git-committer` subagent from the repo root with the listed subject. It re-runs the checks, commits, and pushes `redesign-2027`.

## Review Focus

1. **JavaScript disabled:** all content is visible, and nothing stays hidden by the reveal animation. Tested in Task 2.
2. **Invalid or unavailable theme storage:** the page falls back to the system theme without errors or a flash. Tested in Task 2.
3. **Long strings at 375px:** email, LinkedIn URL, and project titles wrap without horizontal overflow. Tested in Tasks 3 and 8.
4. **Dialog keyboard use:** Tab stays inside, Escape closes, and focus returns to the trigger. Tested in Task 7.
5. **Hash links:** `/#projects` lands below the sticky navbar with content visible. Tested in Task 2.

---

### Task 0: Update the public resume on `main` (blocked on owner file)

Independent of the redesign. Do this as soon as `/Users/lcd/Downloads/Resume/Resume 2027/DungLe_Resume_Public.pdf` exists.

**Files:** Modify `public/documents/dung-le-resume.pdf` in a temporary worktree of `main`.

- [ ] **Step 1: Verify the PDF.** Expected: one page, no phone-format text in extracted text or raw bytes, contains `March 2026`, `not significant`, `185 buildings`, `40+ students`, and does not contain `significantly stronger`.
- [ ] **Step 2: Create a worktree.** Run `git worktree add <scratch>/hotfix main`, copy the PDF over the existing path, and run `npm ci`. Do not symlink `node_modules`.
- [ ] **Step 3: Commit.** Dispatch `git-committer` in the worktree. Subject: `Update public resume`. Expected diff: that one PDF only.
- [ ] **Step 4: Confirm live.** Poll `https://dungleportfolio.vercel.app/documents/dung-le-resume.pdf` until the ETag changes. Download it and repeat Step 1 on the downloaded file.
- [ ] **Step 5: Clean up.** Run `git worktree remove <scratch>/hotfix`, then merge `main` into `redesign-2027`.

### Task 1: Baseline and framework upgrade

**Files:**
- Modify: `package.json`, `package-lock.json`, `tsconfig.json` (Next.js may update it)
- Create: `eslint.config.mjs`
- Commit pending: `AGENTS.md`, `CLAUDE.md`, `.agents/`, `.codex/`, `.claude/settings.json`, `.claude/agents/git-committer.md`, `docs/`, `src/components/sections/Contact.tsx`

**Interfaces:** Produces a working current site on the new stack.

- [ ] **Step 1: Commit the baseline.** Dispatch `git-committer`. Subject: `Add shared agent context and remove contact form`.
- [ ] **Step 2: Upgrade.** Run:

```bash
npm install next@16.4.6 react@^19 react-dom@^19 lucide-react@^1.78.0
npm install -D eslint@^9 eslint-config-next@16.4.6 @types/react@^19 @types/react-dom@^19
```

- [ ] **Step 3: Configure lint.** Set the script to `"lint": "eslint ."`. Create a flat config extending `eslint-config-next/core-web-vitals` and ignoring `.next/`, `.agents/`, `.claude/`, `.codex/`, and `next-env.d.ts`. Leave `.eslintrc.json` in place for the cleanup task.
- [ ] **Step 4: Fix upgrade breakage only.** If Lucide 1.x no longer exports `Github` or `Linkedin`, replace those uses in existing components with text labels.
- [ ] **Step 5: Verify.** Run Standard checks and `npm audit --omit=dev`. Expected: 0 vulnerabilities and the current site renders unchanged.
- [ ] **Step 6: Commit.** Subject: `Upgrade to Next.js 16 and React 19`. Confirm the Vercel preview for this branch reaches Ready. If it fails on the Node version, stop and report it.

### Task 2: Design foundation and content model

**Files:**
- Create: `src/content/resume.ts`, `src/components/ui/ReportSection.tsx`, `src/components/ui/ThemeToggle.tsx`
- Modify: `tailwind.config.ts`, `src/styles/globals.css`, `src/app/layout.tsx`, `src/components/ui/Reveal.tsx`, `src/components/layout/Navbar.tsx`

**Interfaces (produces):**

```ts
// src/content/resume.ts
export interface ContentLink { label: string; href: string }
export interface Stat { value: string; label: string; detail: string }
export interface Role { title: string; org: string; period: string; bullets: string[] }
export interface ContentImage { src: string; alt: string; width: number; height: number }
export interface ChartBar { label: string; value: number }
export interface BarChartData { title: string; summary: string; bars: ChartBar[]; note: string }
export interface Project {
  slug: string; title: string; context?: string; date: string;
  problem: string; approach: string; results: string[];
  stack: string[]; links: ContentLink[]; image?: ContentImage; chart?: BarChartData;
}
export interface SkillGroup { name: string; items: string[] }
export interface Honor {
  title: string; issuer: string; date: string; detail?: string;
  links: ContentLink[]; image?: ContentImage;
}
export interface Resume {
  name: string; alias: string; headline: string[]; availability: string;
  targetRoles: string[]; location: string; summary: string;
  actions: ContentLink[]; stats: Stat[]; experience: Role[];
  projects: Project[]; moreProjects: Project[]; skills: SkillGroup[];
  leadership: Role[]; honors: Honor[];
  education: { school: string; degree: string; gpa: string; period: string; location: string };
  contact: ContentLink[]; portrait: ContentImage; siteUrl: string;
}
export const resume: Resume;

// src/components/ui/ReportSection.tsx
interface ReportSectionProps { id: string; label: string; aside?: string; title?: string; children: React.ReactNode }

// src/components/ui/Reveal.tsx keeps its current props
interface RevealProps { children: React.ReactNode; delay?: number; className?: string }
```

- [ ] **Step 1: Write `resume.ts`.** Copy resume text verbatim, removing LaTeX only. Use these sources for non-resume items: Walmart, SyncShift, and President's List from `src/data/`.

| Asset | Size |
| --- | --- |
| `/images/avatar.jpg` | 1113x1711 |
| `/images/projects/roofwatt-overview.png` | 1568x1003 |
| `/images/projects/sat-scatter-with-fits.png` | 750x500 |
| `/images/projects/walmart-analytics.png` | 1468x1051 |
| `/images/awards/presidents-list.png` | 1212x1650 |
| `/images/awards/truhacks-2026.jpg` | 4032x3024 |
| `/images/certifications/claude-code-in-action.jpg` | 800x618 |
| `/images/certifications/codepath-applied-ai-engineering.jpg` | 800x800 |

- [ ] **Step 2: Fact-check.** Compare every number, date, and URL in `resume.ts` against the public `.tex`. Expected: every value matches or is on the owner-confirmed list.
- [ ] **Step 3: Add design tokens.** Define the spec's colors as RGB CSS variables on `:root` and `.dark`. Add Tailwind colors `paper`, `surface`, `muted`, `rule`, `on-accent`, and `chart`, and point `ink` and `accent` at variables. Keep `ink.secondary`, `line`, `ground`, and `accent.hover` until cleanup. Set `darkMode: "class"`.
- [ ] **Step 4: Add fonts and theme boot.** Load Newsreader, Instrument Sans, and IBM Plex Mono with `next/font/google`. Add an inline head script that accepts only `light` or `dark` from `localStorage` inside `try/catch`, otherwise using `prefers-color-scheme`. Set `suppressHydrationWarning` on `<html>` and a skip link to `#main`.
- [ ] **Step 5: Rewrite `Reveal` with `IntersectionObserver` and CSS.** Content is hidden only under `html.js`, and never under `prefers-reduced-motion`.
- [ ] **Step 6: Build `ReportSection`, `ThemeToggle`, and `Navbar`.** Nav anchors: `#experience`, `#projects`, `#skills`, `#honors`, `#contact`. Use a real `<button>` with `aria-expanded` for the mobile menu. Add `scroll-margin-top` for the sticky header.
- [ ] **Step 7: Test Review Focus 1, 2, and 5.** With JavaScript disabled, all text is visible. With `localStorage.theme = "bad"` and with storage access throwing, the page loads with the system theme and no console errors. `/#projects` shows the heading below the navbar.
- [ ] **Step 8: Verify and commit.** Run Standard checks. Subject: `Add Annual Report design system and resume content`.

### Task 3: Hero and Highlights

**Files:** Modify `src/components/sections/Hero.tsx`, `src/app/page.tsx`. Create `src/components/sections/Highlights.tsx`.

**Interfaces:** Consumes `resume`. Produces `Hero()` and `Highlights()` with no props.

- [ ] **Step 1: Build `Hero`.** Match Direction A: huge Newsreader `<h1>`, a.k.a. line, portrait in warm monochrome (`grayscale sepia-[.18]`, `priority`), headline, availability, target roles, location, and actions. The Resume action uses `download="DungLe_Resume.pdf"`.
- [ ] **Step 2: Build `Highlights`.** Render `resume.stats` as a `<dl>` with mono values: one column at 375px, two at 768px, four at 1180px and up. The 185 stat shows `Top 10: ~7.3 MW of solar`.
- [ ] **Step 3: Test Review Focus 3.** At 375px, there is no horizontal overflow and the name and action links are fully visible.
- [ ] **Step 4: Verify and commit.** Run Standard checks. Subject: `Build Annual Report hero and highlights`.

### Task 4: Experience timeline

**Files:** Create `src/components/sections/Experience.tsx`. Modify `src/app/page.tsx` to replace `About`.

- [ ] **Step 1: Build `Experience`.** Render `resume.experience` as an ordered list with period, title, organization, and bullets, in this order: VinSmart Future, CodePath x Anthropic, CS 180 Grader / TA, Mathematics Tutor.
- [ ] **Step 2: Check content.** VinSmart Future shows exactly 3 bullets. The tutor entry says `40+ students` and `32 students`.
- [ ] **Step 3: Verify and commit.** Run Standard checks. Subject: `Build experience timeline`.

### Task 5: Project case studies

**Files:** Modify `src/components/sections/Projects.tsx`. Create `src/components/ui/BarChart.tsx`.

**Interfaces:**

```ts
interface BarChartProps { data: BarChartData } // values on a fixed 0-1 axis
```

- [ ] **Step 1: Build `BarChart`.** Use `role="img"` with `aria-label={data.summary}`, direct value labels in mono, an accent first bar, a `chart` second bar, and `data.note` as visible text.
- [ ] **Step 2: Build `Projects`.** Case studies for `resume.projects` show Problem, Approach, Results, stack, links, image, and optional chart. `resume.moreProjects` renders under a "More projects" heading in a compact format.
- [ ] **Step 3: Check claims.** SAT shows both r values and `not statistically significant`. RoofWatt ties ~7.3 MW, ~$886K, and ~3,400 t CO2 to the top 10. Links match the resume.
- [ ] **Step 4: Verify and commit.** Run Standard checks. Subject: `Build project case studies`.

### Task 6: Skills and Leadership

**Files:** Modify `src/components/sections/Skills.tsx`. Create `src/components/sections/Leadership.tsx`.

- [ ] **Step 1: Build `Skills`.** Four groups, exactly `Languages`, `Data & ML`, `Statistics & Modeling`, and `Tools & BI`, as plain tags with resume items in resume order.
- [ ] **Step 2: Build `Leadership`.** Render `resume.leadership`: Chair of Finance at CCE, then Vice President / Risk Manager at Truman ASA (May 2026 to Present).
- [ ] **Step 3: Verify and commit.** Run Standard checks. Subject: `Build skills and leadership sections`.

### Task 7: Honors and Certifications

**Files:** Create `src/components/sections/Honors.tsx`, `src/components/ui/ImageDialog.tsx`.

**Interfaces:**

```ts
interface ImageDialogProps { image: ContentImage; triggerLabel: string; title: string }
```

- [ ] **Step 1: Build `ImageDialog`** on native `<dialog>` with `showModal()`, a close button, backdrop click to close, and focus returned to the trigger.
- [ ] **Step 2: Build `Honors`.** Show TruHacks with SyncShift links, President's List, Claude Code in Action (March 2026, verify link), and CodePath labeled `Program admission`. Do not show the Gemini certificate.
- [ ] **Step 3: Test Review Focus 4.** Open with Enter, confirm Tab stays inside, close with Escape, and confirm focus returns to the trigger.
- [ ] **Step 4: Verify and commit.** Run Standard checks. Subject: `Build honors and certifications`.

### Task 8: Education, Contact, and page order

**Files:** Create `src/components/sections/Education.tsx`, `src/components/layout/Footer.tsx`. Modify `src/components/sections/Contact.tsx`, `src/app/page.tsx`.

- [ ] **Step 1: Build the sections.** `Education` shows school, degree, minor, GPA 3.73 / 4.0, dates, and location, with no graduation date. `Contact` shows email, LinkedIn, and GitHub only.
- [ ] **Step 2: Set page order.** Hero, Highlights, Experience, Projects, Skills, Leadership, Honors, Education, Contact, Footer. Wrap the sections in `<main id="main">`.
- [ ] **Step 3: Test Review Focus 3.** At 375px, the email and LinkedIn URL wrap or fit without overflow. Every nav link lands on its section.
- [ ] **Step 4: Verify and commit.** Run Standard checks at 375px, 768px, and 1440px. Subject: `Complete single-page resume layout`.

### Task 9: SEO, accessibility, and performance

**Files:** Create `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/icon.svg`, `src/app/opengraph-image.tsx`. Modify `src/app/layout.tsx`.

- [ ] **Step 1: Add metadata.** Use `metadataBase` from `resume.siteUrl`, plus title, description, Open Graph, and Twitter card values built from `resume`.
- [ ] **Step 2: Add assets.** Sitemap with `/`, robots allowing all, a "DL" serif favicon in the accent color, and a 1200x630 Open Graph image with name and headline only.
- [ ] **Step 3: Audit.** Run Lighthouse on the production build, mobile and desktop, in both themes. Expected: 90+ in Performance, Accessibility, Best Practices, and SEO. Fix what it finds.
- [ ] **Step 4: Verify and commit.** Run Standard checks and confirm `/sitemap.xml`, `/robots.txt`, `/icon.svg`, and `/opengraph-image` return 200. Subject: `Add SEO assets and accessibility polish`.

### Task 10: Cleanup and release (requires owner confirmation)

**Files:**
- Delete only after confirmation: `src/data/*.ts`, `src/components/sections/About.tsx`, `src/components/sections/Awards.tsx`, `src/components/sections/Certifications.tsx`, `src/components/modals/*.tsx`, `src/components/ui/Section.tsx`, `.eslintrc.json`
- Modify: `package.json`, `package-lock.json`, `tailwind.config.ts`, `AGENTS.md`

- [ ] **Step 1: Ask the owner to confirm the deletion list.** Wait for the answer.
- [ ] **Step 2: After confirmation,** delete the listed files, uninstall `framer-motion`, and remove the legacy Tailwind tokens.
- [ ] **Step 3: Update `AGENTS.md`.** Refresh stack, directories, conventions (`src/content/resume.ts`, dark mode, anchors), and the ledger.
- [ ] **Step 4: Verify and commit.** Run Standard checks and `npm audit --omit=dev`. Subject: `Remove legacy portfolio code`.
- [ ] **Step 5: Owner reviews the Vercel preview.** Do not merge before approval.
- [ ] **Step 6: Merge to `main`, push, and confirm production.** Check the live site at 375px and 1440px, the resume download, and the console. Report what changed, plugins used, and open decisions.

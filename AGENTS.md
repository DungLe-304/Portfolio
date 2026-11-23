# AGENTS.md

Single source of truth for Claude Code and OpenAI Codex. `CLAUDE.md` only imports this file, so edit shared context here.

# Part 1: Static Project Context

## Overview
Single-page portfolio for Dung C. Le (a.k.a. Tony Le; Data Science, Truman State University), used for Data Analyst, Data Engineer, and Data Scientist internship applications.
The site is fully static: no API routes, database, or environment variables. It deploys on Vercel, with no `vercel.json` or CI config in the repo.

## Tech Stack
- Next.js 16.4.6 (App Router), React 19, TypeScript 5.9 (`strict`)
- Tailwind CSS 3.4, PostCSS, Autoprefixer
- Lucide React 1.x, `next/font` (self-hosted Newsreader, Instrument Sans, IBM Plex Mono)
- ESLint 9 flat config with `eslint-config-next`
- npm with `package-lock.json`; Next.js 16 needs Node 20.9+, and the version is not pinned

## Key Directories
```text
src/app/                 Root layout, metadata, page, sitemap, robots, icon, Open Graph image, fonts/
src/components/layout/   Navbar, Footer
src/components/sections/ Hero, Highlights, Experience, Projects, Skills, Leadership, Honors, Education, Contact
src/components/ui/       ReportSection, Reveal, TextLink, BarChart, ImageDialog, ThemeToggle
src/content/resume.ts    All typed site content
src/styles/globals.css   Tailwind entry, theme variables, reveal and print styles
src/types/               Ambient type declarations
public/images/           avatar.jpg, projects/, awards/, certifications/, logos/
public/documents/        Resume, certificates, pitch deck
docs/superpowers/        Redesign spec and implementation plan
.claude/                 Claude Code agents, skills, launch config, coding guidelines
.agents/skills/          Codex skills
.codex/agents/           Codex agents
```

## Commands
```bash
npm install        # install dependencies
npm run dev        # dev server at localhost:3000
npx tsc --noEmit   # type-check
npm run lint       # ESLint
npm run build      # production build
npm run start      # serve the production build
```

There is no test runner. A change is verified when:
- `npx tsc --noEmit`, `npm run lint`, and `npm run build` all pass with no new warnings.
- For UI changes, the affected section is checked at 375px and 1440px in light and dark mode, with no console errors.

## Coding Conventions
- **Content:** every fact comes from the owner's resume or an owner-confirmed item. Keep content in `src/content/resume.ts`, not in components.
- **Components:** use TypeScript with explicit prop interfaces. Default to Server Components; add `"use client"` only when required.
- **Sections:** wrap non-hero sections in `ui/ReportSection`. Use `ui/Reveal` for scroll motion; content must stay visible without JavaScript and in print.
- **Navigation:** anchors are `#highlights`, `#experience`, `#projects`, `#skills`, `#leadership`, `#honors`, `#education`, `#contact`. Nav links live in `resume.nav`.
- **Styling:** prefer Tailwind utilities over `@apply`. Use theme tokens: `paper`, `surface`, `ink`, `muted`, `rule`, `accent`, `on-accent`, `chart`.
- **Theme:** "Annual Report" editorial design with light and dark mode through the `dark` class on `<html>`. It follows the system until the visitor toggles it.
- **Images:** use `next/image`, with assets under `public/`.
- **Imports:** `@/*` resolves to `src/*`.
- **Language:** all text, comments, and documentation are in English.
- **Git:** use imperative commit subjects of at most 72 characters. Never force-push or rewrite history.

## Working Principles
Full text: `.claude/karpathy-guidelines.md`.
1. **Think first:** state assumptions, surface tradeoffs, and ask when something is unclear.
2. **Keep it simple:** write the minimum code, with no speculative features or abstractions.
3. **Be surgical:** every changed line must trace to the request. Mention unrelated problems instead of fixing them.
4. **Verify:** define success criteria and run the checks above before reporting done.

## Agent Tooling
| Purpose | Claude Code | Codex |
| --- | --- | --- |
| Instructions | `CLAUDE.md` → `AGENTS.md` | `AGENTS.md` |
| Skills | `.claude/skills/` | `.agents/skills/` |
| Commit agent | `.claude/agents/git-committer.md` | `.codex/agents/git-committer.toml` |

When changing a skill or agent, update its counterpart in the same session.

---

# Part 2: Dynamic Handoff Ledger

Read this before starting work. Before ending a session, overwrite the sections below so they describe the current state. Keep entries short, and leave history to git.

## Last Active Agent
Claude Code (`claude-fable-5-2`), 2026-11-23

## Current Objective
The 2027 portfolio redesign and its polish fixes are on `main`. Spec and plan are in `docs/superpowers/`.

Owner decisions (2026-11-23):
- Publish the owner's `DungLe_Resume.pdf` unchanged at `/documents/dung-le-resume.pdf`. Site pages show no phone number.
- Site copy dates the Claude Code certificate March 2026 and says the SAT difference was not statistically significant.
- Keep Walmart under "More projects," President's List, and SyncShift as the TruHacks link. Hide the Gemini certificate without deleting its files.
- "Summer 2027" and "open to relocation" are correct. No graduation date was given, so omit it.

## Completed
- Upgraded the stack, rebuilt every section, added SEO assets, and removed legacy code and Framer Motion.
- Independent branch review completed, with important findings fixed.
- Live Lighthouse: 90+ in all four categories on mobile and desktop.
- Polish: hash offset, nav landmark, live OS theme, toggle state, and an explicit resume link.

## Modified Files
All work is committed on `main`. No work is in progress.

## Known Issues
1. **Resume PDF and site differ on two points.** The PDF says March 2025 and "significantly stronger." The site uses March 2026 and "not statistically significant."
2. **Browser coverage.** Automated checks ran in Chrome only. Safari and Firefox need a manual check.
3. **Doubled skill path.** `.agents/skills/.agents/skills/web-design-guidelines/` likely belongs one level up.
4. **Local settings are tracked.** `.claude/settings.local.json` holds permissions only.

## Immediate Next Steps
1. Owner: check the live site in Safari, and confirm the LinkedIn and RoofWatt demo links.
2. Owner: decide whether to update the two resume lines, then replace the PDF.

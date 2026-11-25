# AGENTS.md

Single source of truth for Claude Code and OpenAI Codex. `CLAUDE.md` only imports this file, so edit shared context here.

# Part 1: Static Project Context

## Overview
Single-page portfolio for Dung C. Le (a.k.a. Tony Le; Data Science, Truman State University), used for Data Analyst, Data Engineer, and Data Scientist internship applications.
The site is fully static: no API routes, database, or environment variables. It deploys on Vercel, with no `vercel.json` or CI config in the repo.

## Tech Stack
- Next.js 16.4.6 (App Router), React 19, TypeScript 5.9 (`strict`)
- Tailwind CSS 3.4, PostCSS, Autoprefixer
- Lucide React 1.x, `next/font` (self-hosted Newsreader, Geist, Geist Mono)
- ESLint 9 flat config with `eslint-config-next`
- npm with `package-lock.json`; Next.js 16 needs Node 20.9+, and the version is not pinned

## Key Directories
```text
src/app/                 Root layout, metadata, page, sitemap, robots, icon, Open Graph image, fonts/
src/components/layout/   Navbar, Footer
src/components/sections/ Hero, Highlights, Experience, Projects, Skills, Leadership, Honors, Education, Contact
src/components/ui/       ReportSection, Reveal, ButtonLink, TextLink, Tabs, CountUp, StatGlyph, SectionGlyph,
                         SkillGrid, CommandMenu, BarChart, ImageDialog, ThemeToggle, Mark, PrintExpand
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
- **Sections:** wrap non-hero sections in `ui/ReportSection` (`variant="page"` for full sections, `"cell"` for the closing bento band). Use `ui/Reveal` for scroll motion. Content must stay visible without JavaScript and in print: tabs render every panel before hydration, and accordions use native `<details>` that open for print.
- **Navigation:** anchors are `#highlights`, `#experience`, `#projects`, `#skills`, `#leadership`, `#honors`, `#education`, `#contact`. Nav links live in `resume.nav`.
- **Styling:** prefer Tailwind utilities over `@apply`. Use theme tokens only:
  - colors: `paper`, `surface`, `ink`, `muted`, `rule`, `accent`, `accent-soft`, `on-accent`, `chart`, `live`
  - type: `hero`, `title`, `card-title`, `item-title`, `stat`, `label`
  - space: `cell`, `section`, `section-sm`
  - radius: `tag`, `control`, `card`
  - shadow: `lift`, `frame`
  - motion: `duration-fast`, `duration-slow`, `ease-out-soft`, `animate-fade-in`

  Every text pair must stay at WCAG AA or better.
- **Theme:** "Paper-first" design (spec: `docs/superpowers/specs/2026-11-24-blend-design.md`): warm cream with a charcoal-brown dark mode, applied through the `dark` class on `<html>`. Light is the default for everyone, and dark applies only after the visitor toggles it, with the choice saved.
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
Claude Code (`claude-opus-5-5`), 2026-11-24

## Current Objective
The "Paper-first" redesign (V2 of the Vercel × Anthropic blend) is on branch `redesign/blend`, which has its own Vercel preview. The owner decides when to merge it into `main`.

Owner decisions (2026-11-24):
- V2 Paper-first was picked over V1 Grid-first.
- The site is light by default for everyone. Dark mode applies only after the visitor toggles it.
- Visual changes only: every fact, number, link, and section stays.

## Completed
- Reference brief, V1/V2 mockups, and design spec are in `docs/superpowers/`.
- Tokens and fonts (Geist, Geist Mono, Newsreader).
- Rebuilt sections:
  - Navbar and hero
  - Highlights bento with count-up
  - Experience accordion timeline
  - Projects bento with tabs
  - Skills linked to project stacks
  - Closing bento band
  - ⌘K menu
- Lighthouse on the local production build:
  - mobile: 95 / 100 / 100 / 100
  - desktop: 100 in all four categories
  - CLS is 0 on both.

## Modified Files
All work is committed on `redesign/blend`. No work is in progress.

## Known Issues
1. **Browser coverage.** Automated checks ran in Chromium only. Safari and Firefox need a manual check, especially the `::details-content` accordion animation, which falls back to an instant open.
2. **Portrait.** The bright blue backdrop of `avatar.jpg` still clashes with the cream. A version with a neutral or removed background would help.
3. **Doubled skill path.** `.agents/skills/.agents/skills/web-design-guidelines/` likely belongs one level up.
4. **Local settings are tracked.** `.claude/settings.local.json` holds permissions only.

## Immediate Next Steps
1. Owner: review the `redesign/blend` Vercel preview, then decide whether to merge into `main`.
2. Owner: check Safari, and consider a new portrait photo.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

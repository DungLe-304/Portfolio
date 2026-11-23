# AGENTS.md

Single source of truth for Claude Code and OpenAI Codex. `CLAUDE.md` only imports this file, so edit shared context here.

# Part 1: Static Project Context

## Overview
Single-page portfolio for Dung Chi Le (Data Science, Truman State University), used for internship applications.
The site is fully static: no API routes, database, or environment variables. It deploys on Vercel, with no `vercel.json` or CI config in the repo.

## Tech Stack
- Next.js 14.2.5 (App Router), React 18.3, TypeScript 5.9 (`strict`)
- Tailwind CSS 3.4, PostCSS, Autoprefixer
- Framer Motion 11, Lucide React 0.400
- ESLint 8 with `next/core-web-vitals`
- npm with `package-lock.json`; Node version is not pinned

## Key Directories
```text
src/app/                 Root layout, metadata, and the single page
src/components/layout/   Navbar
src/components/sections/ One file per section: Hero, About, Skills, Projects, Awards, Certifications, Contact
src/components/modals/   Certificate and competition pop-ups
src/components/ui/       Shared primitives: Section, Reveal
src/data/                Typed site content: site, education, experience, skills, projects, awards
src/styles/globals.css   Tailwind entry and base styles
src/types/               Ambient type declarations
public/images/           avatar.jpg, projects/, awards/, certifications/, logos/
public/documents/        Resume, certificates, pitch deck
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
- For UI changes, the affected section is checked in `npm run dev` at desktop and mobile widths.

## Coding Conventions
- **Content:** keep content in `src/data/` as typed data, not in components. `site.ts` is canonical for name, contact links, and resume path.
- **Components:** use TypeScript with explicit prop interfaces. Default to Server Components; add `"use client"` only when required.
- **Sections:** wrap non-hero sections in `ui/Section` (`id`, `title`, `lead`, `bg: ground | alt | ink`). Use `ui/Reveal` for entrance motion.
- **Navigation:** anchors are `#about`, `#skills`, `#projects`, `#awards`, `#certifications`, `#contact`. New sections go in `app/page.tsx` and `navLinks`.
- **Styling:** prefer Tailwind utilities over `@apply`. Use theme tokens: `ink`, `ink-secondary`, `line`, `ground`, `ground-alt`, `accent`, `accent-hover`.
- **Theme:** the site is light-only with an Apple-style minimalist look and a system font stack. There is no dark mode or `next/font`.
- **Images:** use `next/image`, with assets under `public/`.
- **Imports:** `@/*` resolves to `src/*`.
- **Language:** all text, comments, and documentation are in English.
- **Git:** work from `main` unless told otherwise. Use imperative commit subjects of at most 72 characters. Never force-push or rewrite history.

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
Rebuild the portfolio to match the 2027 resume on branch `redesign-2027`, using Direction A, "Annual Report". Spec: `docs/superpowers/specs/2026-11-23-portfolio-redesign-design.md`. Plan: `docs/superpowers/plans/2026-11-23-portfolio-redesign.md`. Part 1 above describes `main` until plan Task 10 updates it.

Owner decisions (2026-11-23):
- Publish the owner's `DungLe_Resume.pdf` unchanged at `/documents/dung-le-resume.pdf`. Site pages show no phone number.
- Site copy dates the Claude Code certificate March 2026 and says the SAT difference was not statistically significant.
- Keep Walmart under "More projects," President's List, and SyncShift as the TruHacks link. Hide the Gemini certificate without deleting its files.
- "Summer 2027" and "open to relocation" are correct. No graduation date was given, so omit it.

## Completed
- Plan Tasks 0 to 9: resume PDF, Next.js 16 and React 19 upgrade, design system, all page sections, SEO, accessibility, and performance.
- Independent branch review completed, with important findings fixed.

## Modified Files
Committed work is on `redesign-2027`; `main` is unchanged. Plan Task 10 is next.

## Known Issues
1. **Live site is still the old build.** `main` runs Next.js 14 with known advisories until this branch merges.
2. **Resume PDF and site differ on two points.** The PDF says March 2025 and "significantly stronger." The site uses March 2026 and "not statistically significant."
3. **Doubled skill path.** `.agents/skills/.agents/skills/web-design-guidelines/` likely belongs one level up.
4. **Local settings are tracked.** `.claude/settings.local.json` holds permissions only.
5. **Playwright MCP** loads only in a new Claude Code session. Headless Chrome is the fallback for screenshots.

## Immediate Next Steps
1. Owner: confirm the Task 10 deletion list and review the Vercel preview.
2. After confirmation, remove legacy code and Framer Motion, refresh Part 1 of this file, and verify.
3. Merge to `main` only after the owner approves the preview.

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
Claude Code (`claude-opus-5-5`), 2026-11-23

## Current Objective
Rebuild the portfolio to match the 2027 resume (`/Users/lcd/Downloads/Resume/Resume 2027/DungLe_Resume.tex`) on branch `redesign-2027`. Owner picked **Direction A, "Annual Report"** and approved `docs/superpowers/specs/2026-11-23-portfolio-redesign-design.md`. **Do not build site code until the owner approves `docs/superpowers/plans/2026-11-23-portfolio-redesign.md` and picks an execution method.**

Owner decisions (2026-11-23):
- Publish only a phone-free resume PDF, built from a copy of the `.tex`. Leave the original untouched.
- Show the Claude Code certificate as March 2026.
- SAT copy: keep every number, and say the public-school correlation was higher but the difference was not significant.
- Keep Walmart under "More projects," President's List, and SyncShift as the TruHacks link. Hide the Gemini certificate without deleting its files.
- "Summer 2027" and "open to relocation" are correct. No graduation date was given, so omit it.
- Upgrade to Next.js 16.4.6 and React 19. Replace Framer Motion with CSS.

## Completed
- Earlier: rewrote `AGENTS.md`, reduced `CLAUDE.md` to an import, removed the contact form, fixed `Codex.ai` references, staged `.agents/` and `.codex/`.
- Compared the site, deployed PDF, and new resume. Checked resume links and certificates.
- Created `redesign-2027`, installed Playwright and Context7 (project scope), and fixed both `git-committer` trailers.
- Built three throwaway design mockups outside the repo. Wrote the Direction A design doc.
- Created `DungLe_Resume_Public.tex` beside the original resume (phone removed, certificate date and SAT wording fixed). The owner reports compiling it, but `DungLe_Resume_Public.pdf` is **not on this Mac, so nothing is published yet**.
- Wrote the implementation plan.

## Modified Files
Nothing is committed or pushed.
- Staged: `.agents/`, `.codex/` (new; `.codex/agents/git-committer.toml` has a further unstaged edit)
- Unstaged: `.claude/agents/git-committer.md`, `CLAUDE.md`, `src/components/sections/Contact.tsx`
- Untracked: `.claude/settings.json`, `AGENTS.md`, `docs/`

## Known Issues
1. **Public resume update pending.** Run plan Task 0 when the owner's compiled PDF is available. Only publish a PDF built from `DungLe_Resume_Public.tex`.
2. **Vulnerable dependencies.** `next@14.2.35` still leaves 26 Next.js advisories. A test lockfile with `next@16.4.6` and React 19 audits clean.
3. **Resume conflicts.** The Claude Code certificate says March 25, 2026, but the resume says March 2025. "Significantly stronger" conflicts with interaction p=0.175. ~7.3 MW covers the top 10 buildings, not all 185.
4. **Local settings are tracked.** `.claude/settings.local.json` is committed. It holds permissions only, and a keyword scan found no secrets.
5. **CodePath image.** It is an admission graphic for "Applied AI Engineering", not a completion certificate. Label it accordingly.
6. **Playwright MCP** loads only in a new Claude Code session. Headless Chrome is the fallback for screenshots.

## Immediate Next Steps
1. Owner: save the compiled PDF as `/Users/lcd/Downloads/Resume/Resume 2027/DungLe_Resume_Public.pdf`. Then run plan Task 0.
2. Owner: approve the plan and pick subagent-driven or native execution.
3. Run plan Tasks 1 to 10 on `redesign-2027`. Merge to `main` only after preview review.

# Portfolio Redesign: Direction A, "Annual Report"

Status: awaiting owner approval. Date: 2026-11-23.

## Intent

Rebuild the portfolio so it matches the 2027 resume and helps Dung C. Le (a.k.a. Tony Le) win Data Analyst, Data Engineer, and Data Scientist internships for Summer 2027. The main readers are recruiters and hiring managers who spend about 30 seconds on the site. In that time, readers should learn who Dung is, see the strongest results, and find the resume or contact links.

## Goals

- Every fact, number, date, and link comes from the resume or an owner-confirmed item below.
- Role, availability, resume link, and proof of impact are visible almost immediately.
- Future resume updates touch one typed content file.
- The site looks deliberate at 375px, 768px, and 1440px in light and dark mode.
- Lighthouse scores 90+ in every category, with WCAG AA contrast and full keyboard use.

## Non-goals and anti-goals

- No blog, CMS, backend, analytics, or contact form.
- No progress bars, percentage skill meters, or decorative charts built from invented data.
- No phone number anywhere on the public site or in any published PDF.
- No overclaiming. The SAT result must never read as a significant difference.
- No file deletion without owner confirmation.

## Approaches considered

| Direction | Character | Trade-off |
| --- | --- | --- |
| **A. Annual Report (picked)** | Warm paper, oversized serif, financial-report highlights | Most memorable and editorial. Needs careful type work. |
| B. Instrument | White, centered, Apple-like | Clean and safe, but closest to a template. |
| C. Working Notebook | Graph paper and a data-style record | Strong data flavor, but busier and less minimalist. |

## Visual system

| Token | Light | Dark |
| --- | --- | --- |
| Background | `#f6f2e9` | `#171512` |
| Surface | `#efe9dc` | `#211e19` |
| Ink | `#1b1916` | `#f2ede3` |
| Muted text | `#5f5a50` | `#aaa395` |
| Rule | `#d5cdbc` | `#3a352d` |
| Accent | `#a92e17` | `#f0795c` |
| Text on accent | `#ffffff` | `#1b1208` |
| Secondary chart bar | `#8b8373` | `#766f62` |

- **Type:** Newsreader for display, Instrument Sans for body, IBM Plex Mono for numerals, self-hosted through `next/font`.
- **Layout:** left-aligned, asymmetric, and ruled like a printed report. Section headers use a heavy top rule with a small uppercase label.
- **Portrait:** warm monochrome treatment, so the blue photo background does not fight the palette.
- **Motion:** a short fade and slide on scroll, disabled by `prefers-reduced-motion`. Content must remain visible without JavaScript.
- **Theme:** follows the system by default, with a persistent toggle and no flash on load.

## Information architecture

1. **Hero:** name, a.k.a., "Data Science @ Truman State · Former Data Analyst Intern @ VinSmart Future (Vingroup)", Summer 2027 availability, open to relocation, and Resume, GitHub, LinkedIn, Email actions.
2. **Highlights:** 2,200+ recordings auto-labeled; 200+ calls benchmarked; 185 buildings analyzed, with "Top 10: ~7.3 MW of solar" as its qualifier; 40+ students tutored.
3. **Experience timeline:** VinSmart Future (3 bullets), CodePath x Anthropic, CS 180 Grader / TA, Mathematics Tutor.
4. **Projects:** case studies with problem, approach, results, stack, and links for RoofWatt and SAT & Graduation Rate. Walmart Sales Analytics sits under "More projects."
5. **Skills:** exactly the resume's Languages, Data & ML, Statistics & Modeling, and Tools & BI, shown as tags.
6. **Leadership:** Chair of Finance at CCE; Vice President / Risk Manager at Truman ASA.
7. **Honors & Certifications:** 3rd Place TruHacks x Boeing 2026 (linking SyncShift), President's List, Claude Code in Action with its verify link, and the CodePath image.
8. **Education and Contact:** degree, minor, GPA, dates, email, LinkedIn, and GitHub.

## Content rules and owner decisions

- The resume at `/Users/lcd/Downloads/Resume/Resume 2027/DungLe_Resume.tex` is the source of truth.
- Claude Code in Action is dated **March 2026**, matching the issued certificate.
- SAT copy keeps r=0.701, r=0.572, and interaction p=0.175, and states that the difference was not statistically significant.
- ~7.3 MW, ~$886K, and ~3,400 t CO2 always refer to the **top 10** buildings.
- The CodePath image is labeled as program admission, not a completion certificate.
- Owner-confirmed additions: Summer 2027, open to relocation, Walmart, President's List, SyncShift.
- The Google Gemini certificate is hidden, and its files stay in place.
- No graduation date or class year is shown, because neither is on the resume.
- Charts use only published values. The first is the SAT r comparison bar.

## Engineering

- **Stack:** Next.js 16.4.6 App Router, React 19, TypeScript, Tailwind CSS 3.4, deployed on Vercel.
- **Upgrade needs:** ESLint 9 with flat config, an `eslint .` lint script, and a React 19-compatible `lucide-react`.
- **Dependencies:** remove Framer Motion. Use CSS plus a small `IntersectionObserver` component, and native `<dialog>` for pop-ups.
- **Content:** all content lives in `src/content/resume.ts`, with explicit types.
- **Resume file:** keep the URL `/documents/dung-le-resume.pdf` so existing links work, and download it as `DungLe_Resume.pdf`.
- **SEO:** metadata, Open Graph image, favicon, `sitemap.ts`, and `robots.ts`, based on `https://dungleportfolio.vercel.app`.
- **Accessibility:** semantic landmarks, skip link, visible focus, alt text, focus-managed dialogs, and 44px touch targets.

## Delivery

- Build on `redesign-2027`, one section at a time, and commit and push each with `git-committer`.
- Review the Vercel preview before merging to `main`.
- After each section: type-check, lint, build, check the console, and screenshot mobile and desktop in both themes.
- Before merging: run Lighthouse and list obsolete files, such as `src/data/*` and old modals, for owner confirmation.

## Left to the builder

Exact spacing, breakpoints, reveal timing, icon choices, and the Open Graph layout, within the system above.

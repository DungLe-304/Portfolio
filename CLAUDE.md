# Portfolio Project

## Overview
Personal portfolio website built with Next.js 14 (App Router) + TypeScript + Tailwind CSS.
Purpose: internship applications.

## Tech Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS v3 for styling
- Framer Motion for animations
- Lucide React for icons
- Google Fonts (Inter) via next/font

## Project Structure
```
src/app/                  # Next.js App Router layout + page
src/components/layout/    # Navbar
src/components/sections/  # One file per page section (Hero, About, Skills, ...)
src/components/modals/    # Certificate / competition pop-ups
src/components/ui/        # Shared primitives (Section, Reveal)
src/data/                 # Static typed content arrays (site, education, experience, skills, projects, awards)
src/styles/globals.css    # Tailwind entry + base styles
src/types/                # Ambient type declarations
public/images/            # avatar.jpg, projects/, awards/, certifications/, logos/
public/documents/         # Resume (dung-le-resume.pdf), certificates, pitch deck PDFs
.claude/skills/           # Claude Code skills (not part of the site)
```

`@/*` resolves to `src/*`.

## Conventions
- All components use TypeScript with explicit prop interfaces
- Static content/data lives in data/ as typed TypeScript arrays — never hardcode content in components
- Tailwind utility classes preferred over @apply
- Images use next/image for performance
- Sections use id anchors for smooth scroll: #about, #skills, #projects, #awards, #certifications, #contact
- Dark mode supported via Tailwind `dark:` classes (toggled by adding `dark` class to <html>)
- All text, comments, and documentation must be in English

## Color Palette
- Primary: Blue (#3b82f6 / tailwind blue-500)
- Background light: white / gray-50
- Background dark: gray-900 / gray-950
- Text light: gray-900
- Text dark: gray-100

## Personal Info
- Name: Dung C. Le
- Role: Data Science Student
- University: Truman State University
- Email: lechidung204@gmail.com
- GitHub: https://github.com/DungLe-304
- LinkedIn: https://www.linkedin.com/in/dung-le430
- CV: /documents/dung-le-resume.pdf (referenced via `site.cvUrl` in src/data/site.ts)

## Running the Project
```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # run ESLint
```

## Coding Guidelines
@.claude/karpathy-guidelines.md

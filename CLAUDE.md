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
app/              # Next.js App Router pages and layout
components/       # React components (one file per section)
data/             # Static typed content arrays
public/images/    # Avatar, project screenshots
public/cv.pdf     # Downloadable resume
```

## Conventions
- All components use TypeScript with explicit prop interfaces
- Static content/data lives in data/ as typed TypeScript arrays — never hardcode content in components
- Tailwind utility classes preferred over @apply
- Images use next/image for performance
- Sections use id anchors for smooth scroll: #about, #skills, #projects, #awards, #contact
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
- LinkedIn: https://linkedin.com/in/dung-le-data304
- CV: /cv.pdf (DungLe'sResume.pdf copied to public/cv.pdf)

## Running the Project
```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # run ESLint
```

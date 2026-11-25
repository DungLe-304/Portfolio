# Portfolio Redesign: "Paper-first" (V2 of the Vercel × Anthropic blend)

Status: approved by the owner on 2026-11-24. Supersedes the visual system in `2026-11-23-portfolio-redesign-design.md`. That spec's content rules and owner decisions still apply.

## Why
The owner had three problems with the live "Annual Report" design:
1. The dark-by-default theme with a coral accent felt heavy, and the gray text read as low contrast.
2. Every section used the same rule + heading + text pattern.
3. There was almost no interaction.

This redesign changes the look and interaction only. Every fact, number, link, and section stays as it is in `src/content/resume.ts`.

## Approaches
| Variation | Character | Outcome |
| --- | --- | --- |
| V1 Grid-first (closer to Vercel) | Visible 1px grid everywhere, crosshair corners, serif only in the hero | Not picked |
| **V2 Paper-first (closer to Anthropic)** | Warm cream, grid only inside bento sections, serif statements and titles, soft radii, lift on hover | **Picked** |

The mockups are in `docs/superpowers/mockups/2026-11-24-blend-variations.html` (`?v=2`). The reference brief is in `2026-11-24-blend-reference-brief.md`.

## Tokens
### Colors
CSS variables hold RGB triplets in `src/styles/globals.css`, exposed through `tailwind.config.ts`.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `paper` | `#f3ede2` | `#201b17` | Page background |
| `surface` | `#fbf7f0` | `#2a241f` | Cells, cards, buttons |
| `ink` | `#1f1b17` | `#f3ece2` | Text, primary button |
| `muted` | `#5b5248` | `#bdb1a1` | Secondary text (≥6.5:1 on paper) |
| `rule` | `#ddd2c1` | `#3e352d` | Borders and grid lines |
| `accent` | `#a14b2a` | `#e69a70` | Links, emphasis, focus (≥5:1 on paper and surface) |
| `accent-soft` | `#f4e3d6` | `#43302a` | Highlight fills |
| `on-accent` | `#ffffff` | `#1d120a` | Text on accent |
| `chart` | `#c2b6a3` | `#645a4e` | Unit dots, decorative glyphs |
| `live` | `#2f8a52` | `#6cc893` | The "currently" status dot |

### Type, space, and shape
- **Typography:**
  - Newsreader 400 and italic, already self-hosted, for the hero statement, section titles, and project titles.
  - Geist for everything else.
  - Geist Mono, with tabular numerals, for labels, dates, stats, and tags.
  - Geist and Geist Mono are self-hosted through `next/font/google`.
- **Type scale:** `hero`, `title`, `card-title`, `stat`, and `label` are named Tailwind font sizes. Body text uses the Tailwind defaults (`sm` = 14px, `base` = 16px, `lg` = 18px).
- **Spacing:** the Tailwind 4px scale, plus `section` (96px), `section-sm` (64px), and `cell` (28px).
- **Radius and shadow:**
  - Radii: `tag` (4px), `control` (10px), `card` (14px), and full pills for buttons.
  - Shadow: `lift`, a soft ink shadow used when a card is hovered.
- **Motion:** 150–250ms with `ease-out-soft`. Cards lift and their border turns accent on hover, link underlines grow, tabs fade, and numbers count up once. Reduced motion turns all of it off.

## Theme
Light is the default. Dark mode applies only after the visitor toggles it, and the choice is saved in `localStorage`. The site no longer follows the OS setting, which reverses the 11-23 rule.

## Section design
1. **Navbar:** name with a small dot-mark, section links, a ⌘K "Jump to…" button, and the theme toggle.
2. **Hero:**
   - A status chip built from `availability`, then the name and a.k.a., then the serif statement built from `headline`.
   - Target roles and location, then a primary "Resume (PDF)" button and outlined GitHub, LinkedIn, and Email buttons.
   - A color portrait in a tilted frame.
3. **Highlights:**
   - A 6-column bento (3+3 / 4+2) that collapses to 1 column on mobile.
   - Stats count up.
   - Each glyph is either an exact unit count (185 dots with the top 10 in the accent color, 40 dots) or clearly decorative (a waveform, transcript lines). No made-up chart data.
4. **Experience:**
   - Native `<details>` rows showing title, org, and period, with the first bullet as the summary.
   - Opening a row reveals the rest. Print opens every row.
5. **Projects:**
   - A 2-column bento of feature cards with the cover image and a key-result line always visible.
   - Problem, Approach, and Results sit in ARIA tabs inside each card.
   - Every panel shows before hydration and in print, so nothing is hidden without JavaScript.
   - The SAT bar chart stays. Walmart stays under "More projects."
6. **Skills:** group cells. Hovering or focusing a skill highlights the project cards whose `stack` lists that exact skill.
7. **Closing band:** Leadership, Honors & Certifications, Education, and Contact as smaller cells. All anchors are kept.
8. **⌘K menu:** a native `<dialog>` that jumps to sections and opens the resume, GitHub, LinkedIn, or email.

## Constraints
- No phone number.
- No file deletion without asking.
- No new runtime dependencies.
- Content must stay readable without JavaScript and in print.
- WCAG AA, Lighthouse 90+, CLS ≈ 0.

## Owner items still open
- The portrait's bright blue background still clashes with the cream. A version with a neutral or removed background would help.

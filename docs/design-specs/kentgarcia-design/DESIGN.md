# kentgarcia DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 18 · Fonts: 2 · Components: 0
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![kentgarcia Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a cool, approachable feel. The light background emphasizes content clarity. Typography uses **MyFont** throughout — a technical, developer-focused choice that maintains consistency. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The palette is predominantly monochromatic with **#a78bfa** as the single accent color — used sparingly for interactive elements and emphasis. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| text-inverted | `#ffffff` | background | Page background, darkest surface |
| text-primary | `#f4f4f5` | surface | Card and panel backgrounds |
| text-primary | `#0a0a0a` | text-primary | Headings and body text |
| text-muted | `#a3a3a3` | text-muted | Captions, placeholders, secondary info |
| text-secondary | `#737373` | text-muted | Captions, placeholders, secondary info |
| text-muted | `#8a8a92` | text-muted | Captions, placeholders, secondary info |
| border-subtle | `#2a2a30` | border | Dividers, card borders, outlines |
| accent | `#a78bfa` | accent | CTAs, links, focus rings, active states |
| danger | `#fb923c` | danger | Error states, destructive actions |
| info | `#60a5fa` | info | Informational highlights |
| unknown | `#000000` | unknown | Palette color |
| border-subtle | `#e9e9e9` | unknown | Palette color |
| border-medium | `#d4d4d4` | unknown | Palette color |
| bg-secondary | `#18181b` | unknown | Palette color |
| border-medium | `#3a3a42` | unknown | Palette color |
| unknown | `#222222` | unknown | Palette color |
| unknown | `#2563eb` | unknown | Palette color |
| unknown | `#f472b6` | unknown | Palette color |

### CSS Variable Tokens

```css
--text-primary: #0a0a0a;
--text-secondary: #737373;
--text-muted: #a3a3a3;
--bg-primary: #ffffff;
--bg-secondary: #fafafa;
--border-subtle: #e9e9e9;
--border-medium: #d4d4d4;
--border-strong: rgba(10,10,10,.18);
--accent-primary: #0a0a0a;
--accent-primary-inverted: #ffffff;
--accent-secondary: rgba(10,10,10,.08);
--accent-muted: rgba(10,10,10,.04);
--shadow-card: 0 8px 22px rgba(0,0,0,.25);
--shadow-card-hover: 0 18px 36px rgba(0,0,0,.4);
--text-primary: #f4f4f5;
--text-secondary: #a0a0a8;
--text-muted: #8a8a92;
--bg-primary: #0c0c0f;
--bg-secondary: #18181b;
--border-subtle: #2a2a30;
```


---

## 3. Typography Rules

**Font Stack:**
- **MyFont** — Heading 1, Heading 2, Heading 3
- **Geist Mono** — Body, Caption, Code

**Font Sources:**

```css
@font-face {
  font-family: "MyFont";
  src: url("https://www.kentgarcia.me/fonts/MyFont.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "SamsungSharpSansBold";
  src: url("https://www.kentgarcia.me/fonts/samsungsharpsans-bold.otf") format("opentype");
  font-weight: 700;
}
@font-face {
  font-family: "Geist";
  src: url("https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4nQ.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Geist";
  src: url("https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4nQ.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Geist Mono";
  src: url("https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5T.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | MyFont | clamp(6rem,22vw,20rem) | 700 |
| Heading 2 | MyFont | 3rem | 700 |
| Heading 3 | MyFont | clamp(3rem,6.2vw,5.2rem) | 700 |
| Body | Geist Mono | 1rem | 400 |
| Caption | Geist Mono | .85rem | 400 |
| Code | Geist Mono | 14px | 400 |

**Typographic Rules:**
- Use **MyFont** for all text — do not mix font families
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

No components detected. Scan `src/components/` or `components/` to populate this section.

---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** 2px, 2.5px, 3px, 4px, 8px, 10px, 12px, 14px, 16px, 18px, 20px, 999px
- **Max content width:** 1023px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Raised — cards, buttons, interactive elements

- `var(--shadow-card)`
- `var(--shadow-gallery)`
- `var(--shadow-gallery-hover)`

### Floating — dropdowns, popovers, modals

- `0 3px 10px #00000040`

### Overlay — full-screen overlays, top-level dialogs

- `0 32px 80px #00000080`
- `0 16px 32px #0000001f`

### Z-Index Scale

`0, 1, 2, 3, 4, 5, 10, 11, 12, 20, 30, 40, 50, 140, 300`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes sidebar-orb-drift`
- `@keyframes github-pulse`
- `@keyframes featuredPopupIn`
- `@keyframes scrapbook-sparkle`
- `@keyframes footer-gradient-move`

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#a78bfa` for interactive elements (buttons, links, focus rings)
- Use `#ffffff` as the primary page background
- Use **MyFont** for all UI text
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 2px, 2.5px, 3px, 4px, 8px

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't mix font families — use MyFont consistently
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 480px | css |
| sm | 600px | css |
| sm | 640px | css |
| md | 720px | css |
| md | 721px | css |
| lg | 900px | css |
| lg | 1023px | css |
| lg | 1024px | css |
| xl | 1100px | css |
| 2xl | 1440px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f4f4f5
Border: 1px solid #2a2a30
Radius: 12px
Padding: 16px
Font: MyFont
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #a78bfa, text white
Ghost: bg transparent, border #2a2a30
Padding: 8px 16px
Radius: 12px
Hover: opacity 0.9 or lighter shade
Focus: ring with #a78bfa
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1023px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f4f4f5
Label: #a3a3a3 (muted, 12px, uppercase)
Value: #0a0a0a (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #2a2a30
Focus: border-color #a78bfa
Label: #a3a3a3 12px
Spacing: 16px between fields
Radius: 12px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: MyFont, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

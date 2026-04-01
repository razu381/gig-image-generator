# Wix-to-WordPress — Gig Image Design Guide

## Overview

Three Fiverr gig images for a website-to-WordPress migration service. All images share a unified dark tech aesthetic with neon green accents. Dimensions: **1280 x 769px**.

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#1e2525` | Card background — warm dark green-gray |
| Body bg | `#151a1a` | Page body behind card |
| Accent | `#00ea1c` | Primary green — headings, borders, icons, glow |
| Text primary | `#f2f2f2` | Main heading text |
| Text secondary | `#e8e8e8` | Body text, labels |
| Text muted | `#888` / `#666` | Subtitles, descriptions |
| Text dim | `#444` | Strikethrough/deemphasized text |
| Surface | `rgba(255,255,255,0.04)` | Card/box backgrounds |
| Border | `rgba(255,255,255,0.08)` | Subtle borders |
| Border hover | `rgba(255,255,255,0.15)` | Hover state borders |

### Platform Colors (left-border accents)

| Platform | Color |
|----------|-------|
| Wix | `#FADB00` |
| Squarespace | `#146EF5` |
| Lovable | `#FF5757` |
| Replit | `#FD5402` |
| Webflow | `#4353FF` |

---

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Main headings | Bebas Neue | 400 | 80–96px |
| Body/labels | Syne | 600–700 | 22–26px |
| Monospace/tech | JetBrains Mono | 400–500 | 11–16px |

**Google Fonts import:**
```
Bebas+Neue, Syne:wght@400;600;700;800, JetBrains+Mono:wght@400;500
```

---

## Visual Elements

### Grid Overlay
Applied via `.gig-card::before` — green-tinted 40px grid.
```css
background-image:
  linear-gradient(rgba(0,234,28,0.08) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,234,28,0.08) 1px, transparent 1px);
background-size: 40px 40px;
```

### Ambient Glows
Applied via `.gig-card::after` — soft green radial gradients at corners/edges for depth.

### Corner Accents
Four L-shaped corner brackets using 2px borders in `rgba(0,234,28,0.5)`, positioned 24px from edges.

### Dot Grid
4x6 grid of `#00ea1c` dots (5px, 50% border-radius) at top-right, opacity 0.2.

### Highlight Chip
Key words wrapped in a `#00ea1c` background pill with green glow:
```css
background: #00ea1c;
color: #1e2525;
border-radius: 8px;
box-shadow: 0 0 40px rgba(0,234,28,0.45), 0 0 80px rgba(0,234,28,0.15);
```

---

## Logos

SVG logos stored in `../images/logos/`. Referenced via `<img>` tags.

| Logo | File | Notes |
|------|------|-------|
| Wix | `wix-logo-1.svg` | Black fill — **needs white background** |
| Squarespace | `squarespace.svg` | Blue fill — **needs white background** |
| Lovable | `lovable-logo-icon.svg` | Colorful — transparent bg OK |
| Replit | `replit-color.svg` | Orange fill — transparent bg OK |
| Webflow | `webflow.svg` | Blue fill — transparent bg OK |
| WordPress | `wordpress-2.svg` | Used inline with fill set to `#1e2525` |

---

## Image Variants

### img-1 — Migration Overview (Funnel Layout)
- **Angle**: Service overview — "Your Site → WordPress"
- **Layout**: Horizontal 3-part — platform bars (left) → funnel SVG lines (center) → WordPress circle (right)
- **Unique elements**: SVG funnel lines converging to a point, pulsing WP circle with ring animations, "Full Ownership" badge
- **Bottom tags**: 100% Responsive / SEO Preserved / Fast Delivery

### img-2 — Freedom from Lock-in (Centered Stack)
- **Angle**: Financial/control — "Stop Paying Platform Lock-in"
- **Layout**: Vertically centered — lock icon → eyebrow → heading (with strikethrough + highlight) → subtitle → stat boxes → platform icon row → benefit tags
- **Unique elements**: Lock icon with pulse glow, red strikethrough text, stat boxes (5+ Years / 80+ Reviews / $0 Monthly Fees)
- **Key design choice**: Strike text uses `text-decoration-color: #ff4444` for emphasis

### img-3 — Clone & Launch (Two-Column)
- **Angle**: Process/quality — "Clone To WordPress"
- **Layout**: Centered heading above, then two columns — process steps (left) → feature cards grid (right)
- **Unique elements**: Numbered process steps (01–04) with connectors, 2x2 feature card grid with SVG icons, green top-border on feature cards
- **Bottom tags**: URL Redirects / Plugin Setup / Speed Optimized

---

## Design Decisions

1. **Dark theme over light** — stands out on Fiverr's white background, signals technical expertise
2. **Green accent (#00ea1c)** — evokes WordPress, growth, and "go live" energy
3. **Grid overlay** — adds technical/developer feel without being distracting
4. **Three distinct layouts** — each image uses a different arrangement (horizontal funnel, centered stack, two-column) to avoid visual repetition
5. **Three distinct angles** — each image sells a different benefit (migration overview, financial freedom, process quality)
6. **Platform color accents** — left borders use each platform's brand color for quick recognition
7. **White backgrounds on dark logos** — Wix and Squarespace logos are dark, so they get a white container to stay visible
8. **No emojis** — uses SVG icons and styled dots instead for a cleaner, more professional look
9. **Monospace for metadata** — JetBrains Mono for labels, tags, and descriptions gives a code/technical aesthetic

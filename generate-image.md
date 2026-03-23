# How to Create a New Gig Image Template

This guide explains how to add a new set of gig images for a different Fiverr gig
without touching any shared files.

---

## Folder structure to create

```
gig-images/
└── your-gig-name/               ← name it after your gig, use dashes
    ├── image-1-primary.html
    ├── image-2-stack.html
    └── image-3-before-after.html
```

Example folder names:
- `wordpress-elementor`
- `react-next-developer`
- `landing-page-design`

---

## Start every HTML file with this boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=1280" />
  <title>Image N — Description</title>
  <link rel="stylesheet" href="../base.css" />
  <style>
    /* your image-specific styles here */
  </style>
</head>
<body>
  <div class="canvas">
    <!-- your content here -->
  </div>
</body>
</html>
```

The `../base.css` import gives you all brand tokens, fonts, utilities,
and reusable component classes automatically.

---

## Canvas rules

- The `.canvas` div is always `1280 × 769px`, `overflow: hidden`
- Never add `margin` or `padding` to `<body>` — it's already zeroed in `base.css`
- Everything inside `.canvas` uses `position: absolute` or flexbox — no scroll

---

## Available utility classes from base.css

Use these directly in your HTML — no extra CSS needed.

| Class | What it does |
|---|---|
| `.bg-grid` | Subtle 48px CSS grid lines on background |
| `.bg-dots` | Subtle 32px dot grid on background |
| `.eyebrow` | Small label with green line prefix |
| `.pill` | Accent-bordered inline badge |
| `.pill__dot` | Green circle inside a pill |
| `.pill__text` | Text inside a pill |
| `.review-badge` | "70+ reviews" corner badge |
| `.review-badge__text` | Text inside review badge |
| `.chip` | Small footer tag (green border) |
| `.stat-block` | Green left-border stat card |
| `.stat-block__number` | Large green number |
| `.stat-block__label` | Small gray label below number |
| `.tech-badge` | Logo + name row badge |
| `.tech-badge__name` | Text inside tech badge |
| `.code-card` | Full code snippet card container |
| `.code-card__header` | Chrome bar with dots + filename |
| `.code-card__filename` | Filename text in header |
| `.code-card__body` | Code content area |
| `.chrome-dot` | Browser chrome circle |
| `.chrome-dot--red/yellow/green` | Colored variants |
| `.accent-line-bottom` | Green gradient line at bottom edge |

---

## Syntax token classes (for code snippets)

```html
<span class="tok-kw">export default function</span>
<span class="tok-type">MyComponent</span>
<span class="tok-str">"value"</span>
<span class="tok-prop">className</span>
<span class="tok-num">0.6</span>
<span class="tok-muted">{ /* punctuation / comments */ }</span>
<span class="tok-plain">identifier</span>
```

| Class | Color | Use for |
|---|---|---|
| `.tok-kw` | `#00ea1c` | Keywords: export, function, return, interface |
| `.tok-type` | `#61dafb` | Type names, component names |
| `.tok-str` | `#fbbf24` | String values |
| `.tok-prop` | `#e879f9` | JSX prop names |
| `.tok-num` | `#fb923c` | Numbers |
| `.tok-muted` | `#555555` | Punctuation, comments, brackets |
| `.tok-plain` | `#f0f0f0` | Default identifiers |

---

## Brand colors (quick reference for inline styles)

When Tailwind classes aren't enough, use these exact values:

```
Background:     #080808
Surface 1:      #0f0f0f   (cards, panels)
Surface 2:      #111111   (slightly elevated)
Surface 3:      #161616   (inputs, tags)
Accent:         #00ea1c   (green — use sparingly)
Accent border:  rgba(0, 234, 28, 0.20)
Accent glow:    rgba(0, 234, 28, 0.40)
Default border: rgba(255, 255, 255, 0.06)
Text primary:   #f0f0f0
Text muted:     #777777
Text subtle:    #555555
Text ghost:     #444444
```

---

## The 3 image types — what each one communicates

### image-1-primary.html — The thumbnail
This is what buyers see in Fiverr search results. It needs to answer
one question instantly: **what service is this?**

Must include:
- Large, bold service name (Syne 800, 70px+)
- One clear accent word in `#00ea1c`
- Tech logo badges (Figma, React, Next.js, etc.)
- Staggered browser mockup cards on the right side
- Review badge in top-right corner

### image-2-stack.html — The credibility proof
Buyers see this after clicking your gig. It answers: **can this person
actually do it?**

Must include:
- A strong headline (Pixel-Perfect / Your stack name)
- Tech badge grid with all 5–6 technologies
- 3 stat blocks: reviews, countries, years experience
- A code snippet card with real TypeScript/JSX code
- Footer chips listing key capabilities

### image-3-before-after.html — The transformation proof
Closes the sale. Answers: **what will I actually get?**

Must include:
- Left half: Figma design panel simulation (white frame, layer panel, annotations)
- Right half: Live browser mockup showing the polished result
- Green vertical divider with arrow circle at center
- Code snippet overlay on the right side
- Bottom bar: "Your Design. Shipped." with tech chips

---

## Typography rules

| Use case | Font | Weight | Size |
|---|---|---|---|
| Hero / service name | Syne | 800 | 70–88px |
| Section headings | Syne | 700 | 48–56px |
| Sub-labels | Syne | 600 | 20–28px |
| CTA button text | Syne | 700 | 12px |
| Body / descriptions | Inter | 400–500 | 14–16px |
| Eyebrow labels | Inter | 500 | 11–12px uppercase |
| Code, badges, tags | JetBrains Mono | 400–700 | 10–13px |
| Hero accent (one word) | Playfair Display | 700 italic | Hero only |

---

## Checklist before exporting

- [ ] `<link rel="stylesheet" href="../base.css" />` is in the `<head>`
- [ ] `.canvas` div is the root element
- [ ] No `margin` or `padding` on `<body>`
- [ ] All colors match the brand token values exactly
- [ ] Accent `#00ea1c` is used in maximum 2–3 places per image
- [ ] All SVG logos use official brand colors
- [ ] No external image URLs — all visuals are CSS-only divs or inline SVGs
- [ ] Text is readable at 1280×769 (nothing smaller than 10px)

---

## Export

```bash
node export.js your-gig-name
```

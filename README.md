# Gig Image Export System

Generate pixel-perfect Fiverr gig cover images from HTML/CSS files.

---

## Requirements

- Bun (or Node.js v18 or higher)
- Internet connection (Google Fonts load at export time)

---

## Setup

```bash
cd gig-images
bun install
```

Installs Puppeteer, Sharp, Tailwind CSS, and Vite. Takes 2–3 minutes on first run.

### Build Tailwind CSS

```bash
# Build CSS once
bun run build:css

# Watch for changes (development)
bun run watch:css
```

---

## Preview in browser

```bash
bun run dev
```

Opens Vite dev server at `http://localhost:3000`. Navigate to your gig folder to preview HTML files before exporting.

**Note:** Make sure to run `bun run build:css` first to generate the `output.css` file used by the HTML files.

---

## Export a gig

```bash
bun run export
```

The export command automatically builds the Tailwind CSS and then generates the images.

Replace `figma-to-react-next` in `export.js` with whatever gig folder you want to export.

---

## Output

Exported images land in `exports/` as lossless PNG files:

```
exports/
├── figma-to-react-next-image-1-primary.png
├── figma-to-react-next-image-2-stack.png
└── figma-to-react-next-image-3-before-after.png
```

Image size: **1280 × 769px** — rendered at 2× density then downscaled. Upload directly to Fiverr.

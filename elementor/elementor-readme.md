Here is the prompt:

---

## ELEMENTOR GIG IMAGE GENERATOR PROMPT

---

> You are generating a Fiverr gig cover image for a WordPress & Elementor developer named Razu. The image is a single self-contained HTML file. Canvas is exactly **1280×769px**, fixed, no scroll, no responsive behavior. All styles go inside a single `<style>` tag. No external CSS files.
>
> ---
>
> ## FONTS
>
> ```html
> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
> ```
>
> ---
>
> ## BRAND COLOR SYSTEM
>
> ```
> Elementor Magenta:     #ED01EE
> Elementor Deep Purple: #620856
> Elementor Pink Light:  #FFB8E5
> Elementor Pink Faint:  #FAE4FA
> Razu Accent Green:     #00ea1c
> Background:            #080808
> Surface:               #0f0f0f
> Text Primary:          #f0f0f0
> Text Muted:            #777777
> ```
>
> These two brands share the canvas — Elementor owns the atmosphere (backgrounds, glows, badge, branding) and green (`#00ea1c`) owns the data points (stat numbers, tag dots, accent line end).
>
> ---
>
> ## BACKGROUND LAYER SYSTEM
>
> Build the background using these exact stacked layers, all `position: absolute; inset: 0; z-index: 0` unless specified:
>
> **Layer 1 — Main sweep** (deep magenta from right):
> ```css
> background: radial-gradient(ellipse 60% 110% at 100% 50%,
>   #620856 0%, rgba(98,8,86,0.55) 35%, transparent 62%);
> ```
>
> **Layer 2 — Secondary sweep** (top-left corner warmth):
> ```css
> background: radial-gradient(ellipse 45% 55% at 0% 0%,
>   rgba(98,8,86,0.4) 0%, transparent 60%);
> ```
>
> **Layer 3 — Main bloom** (behind photo, z-index 1):
> ```css
> position: absolute; width: 520px; height: 520px; border-radius: 50%;
> background: radial-gradient(circle, rgba(237,1,238,0.26) 0%, transparent 68%);
> top: 50%; left: 67%; transform: translate(-50%,-50%);
> ```
>
> **Layer 4 — Upper-right glow** (z-index 1):
> ```css
> position: absolute; width: 320px; height: 320px; border-radius: 50%;
> background: radial-gradient(circle, rgba(255,184,229,0.12) 0%, transparent 70%);
> top: -60px; right: 60px;
> ```
>
> **Layer 5 — Lower-left flare** (z-index 1):
> ```css
> position: absolute; width: 260px; height: 260px; border-radius: 50%;
> background: radial-gradient(circle, rgba(237,1,238,0.14) 0%, transparent 70%);
> bottom: -40px; left: 120px;
> ```
>
> **Layer 6 — Horizontal band** (subtle mid stripe, z-index 1):
> ```css
> background: linear-gradient(180deg, transparent 30%, rgba(255,184,229,0.04) 50%, transparent 70%);
> ```
>
> **Layer 7 — Dot grid** (z-index 1):
> ```css
> background-image: radial-gradient(circle, rgba(237,1,238,0.09) 1px, transparent 1px);
> background-size: 30px 30px;
> ```
>
> **Layer 8 — Diagonal slash divider** (z-index 2):
> ```css
> position: absolute; top: 0; bottom: 0; left: 700px; width: 1.5px;
> background: linear-gradient(180deg,
>   transparent 0%, rgba(237,1,238,0.15) 20%,
>   rgba(237,1,238,0.55) 50%, rgba(237,1,238,0.15) 80%, transparent 100%);
> transform: skewX(-6deg);
> ```
>
> ---
>
> ## LAYOUT
>
> The canvas is `display: flex`. Two children: `.left-content` (width 700px) and `.photo-section` (flex: 1).
>
> ---
>
> ## LEFT CONTENT COLUMN
>
> ```css
> .left-content {
>   width: 700px; height: 769px;
>   padding: 46px 56px;
>   display: flex; flex-direction: column;
>   justify-content: center; gap: 22px;
>   position: relative; z-index: 5;
> }
> ```
>
> **Row 1 — Eyebrow row** (`display: flex; align-items: center; gap: 10px`):
> - Icon badge: `width 26px; height 26px; border-radius 5px; background #ED01EE; box-shadow 0 0 12px rgba(237,1,238,0.5)`. Inside: Elementor `E` logo SVG or a white `E` in Syne 700 14px.
> - Eyebrow text: JetBrains Mono 700, 11px, `#FFB8E5`, uppercase, letter-spacing 0.14em. Content: `"[SERVICE CATEGORY] Expert"`
>
> **Row 2 — Headline block:**
> ```css
> font-family: 'Syne'; font-weight: 800;
> text-transform: uppercase; line-height: 0.93; letter-spacing: -1.5px;
> ```
> - Small line: font-size 36px, color `#777777`, letter-spacing 0.08em, font-weight 700, display block, margin-bottom 6px. Content: `"PIXEL-PERFECT"`
> - Big line 1: font-size 76px, letter-spacing -2.5px, color `#ED01EE`. Content: the primary service name e.g. `"ELEMENTOR"`
> - Big line 2: font-size 76px, letter-spacing -2.5px, color `#f0f0f0`. Content: `"WEBSITES"`
>
> **Row 3 — Divider:**
> ```css
> width: 48px; height: 2.5px;
> background: linear-gradient(90deg, #ED01EE, transparent);
> border-radius: 2px;
> ```
>
> **Row 4 — Description paragraph:**
> Inter 500, 14px, `#777777`, line-height 1.6, max-width 460px.
> Content: one or two lines describing the service concisely.
>
> **Row 5 — Service tags** (`display: flex; flex-wrap: wrap; gap: 9px`):
> Each tag:
> ```css
> display: inline-flex; align-items: center; gap: 8px;
> padding: 8px 14px 8px 10px; border-radius: 6px;
> border: 1px solid rgba(237,1,238,0.28);
> background: rgba(15,15,15,0.9);
> position: relative; overflow: hidden;
> ```
> Left accent bar on each tag:
> ```css
> /* ::before or inner div */
> position: absolute; left: 0; top: 0; bottom: 0;
> width: 2px; background: #ED01EE; border-radius: 2px 0 0 2px;
> ```
> Inside each tag: a 6px green dot (`#00ea1c`, box-shadow `0 0 5px rgba(0,234,28,0.7)`) + text in JetBrains Mono 700 12px `#f0f0f0`.
> Use exactly the service tags relevant to the gig being generated.
>
> **Row 6 — Stat boxes** (`display: flex; gap: 12px`):
> Each stat box:
> ```css
> border: 1px solid rgba(98,8,86,0.85);
> border-top: 1px solid rgba(237,1,238,0.4);
> border-radius: 8px; padding: 15px 20px;
> background: #0f0f0f; min-width: 106px;
> ```
> - Number: Syne 800, 32px, `#00ea1c`, line-height 1
> - Label: JetBrains Mono 700, 10px, `rgba(255,184,229,0.65)`, uppercase, letter-spacing 0.12em, margin-top 6px
> Always use exactly: `"70+"` Reviews · `"19"` Countries · `"5 YRS"` Experience
>
> ---
>
> ## RIGHT PHOTO COLUMN
>
> ```css
> .photo-section {
>   flex: 1; height: 769px;
>   position: relative; z-index: 4;
> }
> .photo-section img {
>   width: 100%; height: 100%;
>   object-fit: cover; object-position: center top;
>   display: block;
>   -webkit-mask-image: linear-gradient(to right,
>     transparent 0%, rgba(0,0,0,0.25) 10%,
>     rgba(0,0,0,0.75) 25%, black 42%);
>   mask-image: linear-gradient(to right,
>     transparent 0%, rgba(0,0,0,0.25) 10%,
>     rgba(0,0,0,0.75) 25%, black 42%);
> }
> ```
> Photo src: `"../images/shohidul-i-razu.png"`
>
> Photo tint overlay (z-index 5, pointer-events none):
> ```css
> background: linear-gradient(160deg, rgba(98,8,86,0.12) 0%, transparent 55%);
> ```
>
> ---
>
> ## FIXED OVERLAY ELEMENTS
>
> **Review badge** (position absolute, top 22px, right 22px, z-index 10):
> ```css
> background: linear-gradient(135deg, #ED01EE 0%, #620856 100%);
> padding: 10px 18px; border-radius: 6px;
> box-shadow: 0 0 20px rgba(237,1,238,0.45);
> ```
> Text: JetBrains Mono 700, 12px, `#FAE4FA`, letter-spacing 0.04em. Content: `"★ 70+ Five-Star Reviews"`
>
> **Bottom accent line** (position absolute, bottom 0, left 0, right 0, height 2px, z-index 10):
> ```css
> background: linear-gradient(90deg,
>   transparent 0%, #620856 15%, #ED01EE 42%,
>   #00ea1c 58%, rgba(0,234,28,0.3) 80%, transparent 100%);
> ```
> This line is the visual handshake between Elementor magenta and Razu's green — always include it exactly as written.
>
> **Brand corner** (position absolute, bottom 18px, left 56px, z-index 6):
> ```css
> display: flex; align-items: center; gap: 12px;
> ```
> Contents: a 7px magenta pulse dot (`#ED01EE`, box-shadow `0 0 8px rgba(237,1,238,0.9)`) + Elementor logo image + WordPress logo image.
> Image paths: `"../images/Elementor-Pink-400x70.svg"` (height 28px) and `"../images/WordPress-logotype-standard-white.png"` (height 60px).
>
> ---
>
> ## SYSTEM RULES
>
> 1. Every element must sit inside the 1280×769px canvas — nothing overflows
> 2. Background layers always come first in the DOM, content on top
> 3. `#ED01EE` owns the atmosphere — backgrounds, borders, badges, eyebrow, divider
> 4. `#00ea1c` owns the data — stat numbers, tag dots, accent line right half only
> 5. Never use `#ED01EE` for stat numbers — always `#00ea1c`
> 6. Never use `#00ea1c` for backgrounds or glows — always `#ED01EE`
> 7. The diagonal slash at left 700px is always present — it is the visual boundary between content and photo
> 8. The bottom accent line gradient (magenta → green) is always present — it is the brand signature
> 9. Photo mask gradient is always applied — the photo must fade into the dark background on its left edge
> 10. All image assets live in `../images/` — do not change these paths
> 11. To generate a different gig variation: change the eyebrow text, big line 1 color/text, description, and service tags only — everything else stays identical

---

To generate a new variation paste this prompt and append at the end:

> **Generate this gig:** `[your gig name]`
> **Eyebrow text:** `[e.g. "WooCommerce & WordPress Expert"]`
> **Big line 1:** `[e.g. "WOOCOMMERCE"]` in `[color — use #ED01EE or white]`
> **Big line 2:** `[e.g. "STORES"]`
> **Description:** `[one line]`
> **Service tags:** `[list them]`
> **Output file:** `[e.g. wordpress-elementor-experiments/exp-woocommerce.html]`
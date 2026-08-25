# Theme

## Compact token summary

- Framework: Next.js + React; CSS Modules, no Tailwind.
- Canvas `--color-canvas: #f7f2e9`; surface `#fffdf7`; ink `#1e2923`; muted `#607065`; moss `#2f6e59`; dark moss `#245545`; terracotta `#e06446`; sun `#f3c56b`; line `rgba(30,41,35,.18)`.
- Display font: Instrument Serif; body: Space Grotesk; mono: system ui-monospace.
- Display type: `h1 clamp(4rem,12vw,10rem)`, `h2 clamp(2.6rem,6vw,5.3rem)`, `h3 clamp(1.65rem,3vw,2.5rem)`.
- Container: `min(100% - 2.5rem,82rem)`, widening to `min(100% - 5rem,88rem)` at 900px.
- Focus: 3px terracotta outline. Motion is disabled for `prefers-reduced-motion`.

## Raw `styles/globals.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&display=swap");
:root{--color-canvas:#f7f2e9;--color-surface:#fffdf7;--color-ink:#1e2923;--color-muted:#607065;--color-moss:#2f6e59;--color-moss-dark:#245545;--color-terracotta:#e06446;--color-sun:#f3c56b;--color-line:rgba(30,41,35,.18);--font-display:"Instrument Serif",Georgia,serif;--font-body:"Space Grotesk",Arial,sans-serif;--font-mono:ui-monospace,"SF Mono",Menlo,monospace;--shadow-soft:0 20px 55px rgb(30 41 35 / 14%)}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;min-width:320px;background:var(--color-canvas);color:var(--color-ink);font-family:var(--font-body);font-size:16px;line-height:1.6}img{display:block;max-width:100%}a{color:inherit;text-underline-offset:.16em}h1,h2,h3,h4,p{margin-top:0}h1,h2,h3{font-family:var(--font-display);font-weight:400;letter-spacing:-.055em;line-height:.9}h1{font-size:clamp(4rem,12vw,10rem)}h2{font-size:clamp(2.6rem,6vw,5.3rem)}h3{font-size:clamp(1.65rem,3vw,2.5rem)}p{max-width:68ch}ul{margin:0;padding:0;list-style:none}:focus-visible{outline:3px solid var(--color-terracotta);outline-offset:4px}.container{width:min(100% - 2.5rem,82rem);margin-inline:auto}.eyebrow{color:var(--color-terracotta);font-family:var(--font-mono);font-size:.65rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase}.skipLink{position:fixed;z-index:2000;top:1rem;left:1rem;padding:.75rem 1rem;background:var(--color-ink);color:var(--color-canvas);transform:translateY(-200%)}.skipLink:focus{transform:translateY(0)}@media(min-width:900px){.container{width:min(100% - 5rem,88rem)}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
```

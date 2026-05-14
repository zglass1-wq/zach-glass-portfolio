# Zach Glass — Portfolio Site

A single-page executive portfolio site built as a static HTML/CSS/JS site, deployed on Vercel via GitHub.

## Stack
- Plain HTML, CSS, JavaScript — no build step, no dependencies
- Deployed to Vercel (auto-deploys on every push to `main`)
- Preview locally with `npx serve .` on port 3456

## Structure
```
index.html   — All page content and sections
style.css    — All styles (variables, layout, responsive)
script.js    — Scroll animations, number counters, sticky nav
```

## Design System
- **Dark background:** `#0d0d0d`
- **Light background:** `#f7f4ef` (warm off-white)
- **Accent:** `#c9a96e` (warm gold)
- **Display font:** Playfair Display (serif, Google Fonts)
- **Body font:** Inter (sans-serif, Google Fonts)

## Page Sections (in order)
1. **Hero** — Headline, subtext, CTAs, current/previous roles
2. **Positioning** — Pull quote + headshot placeholder
3. **Superpowers** — 3 pillars: The Architect, The Transformer, The Orchestrator
4. **Impact Numbers** — Animated counters (172%, $266M, 301M, 130, $12M+, 15+)
5. **Brands Ticker** — Scrolling brand name marquee
6. **Work: Infinite Icon** — Case study with image placeholder
7. **Work: Playboy** — Case study with image placeholder (dark section)
8. **Work: Motorola RAZR** — Case study with image placeholder
9. **Career Timeline** — With promotion badges
10. **Awards** — Recognition wall
11. **Connect** — LinkedIn + email CTA footer

## Image Placeholders — What to Replace
Each placeholder `<div class="img-placeholder ...">` should be swapped with:
```html
<img src="your-image.jpg" alt="Description" style="width:100%;height:100%;object-fit:cover;">
```

| Placeholder | Recommended image |
|---|---|
| Headshot (positioning section) | Professional portrait, 3:4 ratio |
| Infinite Icon | Palladium show, NYFW event, or album artwork |
| Playboy | Brand editorial or campaign visual |
| Motorola RAZR | Pink RAZR gifting moment or Fashion Week event |

## Updating & Deploying
1. Edit files locally
2. `git add . && git commit -m "your message" && git push`
3. Vercel auto-deploys — live in ~30 seconds

## Key Links
- GitHub: https://github.com/zach912/zach-glass-portfolio
- LinkedIn: https://linkedin.com/in/zglass
- Email: zglass1@gmail.com

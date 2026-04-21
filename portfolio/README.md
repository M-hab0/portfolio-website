# Mahdi Habibi — Portfolio

A modern, dark-themed portfolio landing page for Mahdi Habibi, Frontend Developer.

👉 **Ready to deploy?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for the complete
step-by-step guide.

---

## ✨ Features

- 🎨 Dark + Neon aesthetic with animated gradient orbs
- 🖱️ Custom animated cursor follower
- 📜 Smooth parallax scroll effects
- 📱 Fully responsive (6 breakpoints from 380px to 1280px+)
- ⚡ Scroll progress bar
- 🎯 Animated counters, skill bars and reveal-on-scroll
- 🎭 3D tilted code card in About section
- 💬 Testimonials section for social proof
- 📄 Downloadable CV (PDF)
- 📬 Contact form → real emails via Formspree + WhatsApp fallback
- 🔗 Ionicons (SVG) throughout
- 🎨 Custom SVG favicon with MH monogram
- 🖼️ Open Graph image for social sharing
- 🚀 SEO-ready (meta tags, structured data, sitemap, robots.txt)
- ⚙️ Netlify config with security headers & caching
- 🖼️ WebP images for 70-88% smaller file sizes
- 💤 Lazy loading on all project images
- 🎨 Uses `rem` units everywhere (not `px`)

---

## 📁 Folder Structure

```
portfolio/
├── index.html                  # Main HTML (semantic & SEO-optimized)
├── README.md                   # You are here
├── DEPLOYMENT.md               # Complete deploy guide
├── netlify.toml                # Netlify build config + security headers
├── robots.txt                  # SEO crawler rules
├── sitemap.xml                 # Site map for search engines
├── assets/
│   ├── favicon.svg             # Custom SVG favicon (MH monogram)
│   ├── favicon-32.png          # PNG fallback 32×32
│   ├── favicon-192.png         # PWA icon 192×192
│   ├── apple-touch-icon.png    # iOS home screen icon 180×180
│   ├── og-image.png            # Social share image 1200×630
│   ├── og-image.svg            # Source SVG of OG image
│   ├── Mahdi-Habibi-CV.pdf     # Downloadable résumé
│   └── images/                 # Profile + 4 project thumbnails
│       ├── profile.jpeg / .webp
│       ├── project-salon.jpeg / .webp
│       ├── project-dental.jpeg / .webp
│       ├── project-shop.jpeg / .webp
│       └── project-restaurant.jpeg / .webp
├── css/
│   ├── reset.css               # CSS reset + base styles
│   ├── variables.css           # Design tokens (colors, fonts, spacing)
│   ├── style.css               # Main styles with BEM-style classes
│   └── responsive.css          # All media queries (6 breakpoints)
└── js/
    └── main.js                 # All interactivity, modular with comments
```

---

## 🎨 Customizing

All design tokens are in `css/variables.css` — colors, fonts, spacing,
shadows, breakpoints, and animation timings. Change them there and the
whole site updates.

### Key colors
```css
--color-accent:   #9dff2f;   /* primary neon green */
--color-accent-2: #00e5ff;   /* cyan */
--color-accent-3: #ff2bd6;   /* pink */
```

### Fonts
- Display: **Clash Display**
- Body:    **Satoshi**
- Mono:    **JetBrains Mono**

### Adding a new project

In `index.html`, find the `<!-- PROJECTS -->` section and duplicate a
`<article class="project-card">` block. Update:
- image src (add to `assets/images/`)
- title, description, tags
- project number (05 / 05, etc.)
- live demo URL

### Changing testimonials

In `index.html`, find the `<!-- TESTIMONIALS -->` section. Replace
placeholder quotes with real client feedback as you collect it.

---

## 🛠️ Local Development

```bash
# Using Python (built-in)
python3 -m http.server 8000
# → http://localhost:8000

# Using Node
npx serve .
```

Or just open `index.html` directly in your browser.

---

## 🚀 Deploy

See the full [DEPLOYMENT.md](./DEPLOYMENT.md) guide.

**Quick version:** drag & drop the `portfolio` folder into [Netlify](https://app.netlify.com).

---

## 📬 Before Deploying — Checklist

- [ ] Get a Formspree ID and replace `YOUR_FORMSPREE_ID` in `index.html`
- [ ] After buying domain, replace `https://mahdi-habibi.dev/` with your real domain in:
  - `index.html` (meta tags, canonical, JSON-LD)
  - `sitemap.xml`
  - `robots.txt`

---

## 📞 Contact

- Phone / WhatsApp: **+90 543 148 3171**
- Instagram: [@mehab0__786](https://www.instagram.com/mehab0__786/)
- LinkedIn: [mahdi-habibi786](https://www.linkedin.com/in/mahdi-habibi786)

---

Made with ☕ and clean code by **Mahdi Habibi**.

# Michelle Rodriguez — Data & Quality Engineer

This repository contains two portfolio/landing page concepts (HTML + CSS + minimal JS) showcasing skills and projects for a Fullstack Data & Quality Engineer. The designs are provided as standalone static HTML pages: `idea1.html` and `idea3.html`.

## Contents

- `idea1.html` — A bold, modern single-page portfolio focusing on technical capabilities, career timeline, testimonials, and a CTA for consulting. Uses in-file CSS and small JS for mobile menu and smooth scrolling.
- `idea3.html` — A polished personal portfolio for “Michelle Rodriguez” with sections for About, Skills, Projects, Experience, Contact, and responsive navigation. Includes in-file CSS and JS for mobile nav, contact form, and smooth scrolling.
- `public/` — assets such as logos and icons used by the site.
- `src/` — React starter files (if you decide to convert these HTML pages to a React app): `App.js`, `Home.js`, `index.js`, `index.css`.

## Purpose

These pages are design prototypes for a data engineering portfolio site. They are intended to be lightweight, easy to deploy (GitHub Pages, Netlify, Vercel), and simple to adapt into a React app or static site generator.

## How to preview locally

Quick options to view locally:

1) Open in browser
- Double-click `idea1.html` or `idea3.html` in your file manager or open with your browser: `file:///.../idea3.html`.

2) Serve with a simple HTTP server (recommended)

```sh
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000/idea3.html
```

or

```sh
# Node (if you have http-server installed)
npx http-server -c-1
```

3) Run as React app
- Install dependencies: `npm install`
- Start dev server: `npm start`
- Note: The `src/` directory contains basic React scaffolding if you want to port the HTML into components.

## Notes & suggested improvements

- Accessibility: add aria attributes for navigation, improve contrast where needed, and ensure form fields have associated labels (they already do in `idea3.html`).
- Image optimization: replace external Unsplash images with optimized local assets.
- Forms: replace alert-based contact form with a real submission endpoint or integrate with a service (Formspree, Netlify Forms).
- Split CSS into separate files and add a build step if converting to React.
- Fix small JS bugs in `idea1.html` (there is a broken selector near the smooth scroll code). See `AGENT-RULES.md` for maintainers notes.

## License

MIT — adapt and reuse freely.

---

If you want, I can:
- Convert either design into a React component structure in `src/`.
- Create a GitHub Pages deployment configuration.
- Fix the JS bug in `idea1.html` and improve responsiveness.

Tell me which you'd like next.
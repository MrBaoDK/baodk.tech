# Bao DK — Data & Quality Engineer

This repository contains a React + Vite + TypeScript portfolio/landing project with components and design prototypes. Legacy static prototypes are retained for reference but the primary source is the React app in `src/`.

## Contents

- `public/` — assets such as logos and icons used by the site.
- `src/` — React app and components (Vite + React + TypeScript + Tailwind). Key files live under `src/component/` and the app entry is `src/main.tsx`.

## Purpose

These pages are design prototypes for a data engineering portfolio site. They are intended to be lightweight, easy to deploy (GitHub Pages, Netlify, Vercel), and simple to adapt into a React app or static site generator.

## How to preview locally

Quick options to view locally:

1) Open in browser
- Open the app by starting the dev server and navigating to http://localhost:5173/. Legacy static prototypes are included for reference but are not the primary source.

2) Serve with a simple HTTP server (recommended)

```sh
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000/
```

or

```sh
# Node (if you have http-server installed)
npx http-server -c-1
```

3) Run as React app (Vite + TypeScript + Tailwind)
- Install dependencies: `pnpm install`
- Start dev server: `pnpm start`
- Build for production: `pnpm build`

Notes:
- This repo was migrated to Vite + React + TypeScript. If you run into type errors, make sure dev dependencies are installed (`@types/react`, `@types/react-dom`).

Tailwind CSS in this project reads CSS custom properties (CSS variables). Defaults are set in `src/index.css` (eg `--color-primary-500`, `--color-accent-500`, `--color-muted-500`, `--spacing-page`) — edit those to theme the site.

Troubleshooting notes (recorded fixes from local dev):
- package.json scripts: `start` should be `vite` and `build` should be `tsc && vite build`. Older/invalid flags (eg `-s` for `tsc` or `--silent` for `vite`) will cause build failures.
- If `pnpm build` fails due to an injected `--silent` flag, run `npx vite build` directly as a workaround.
- To type-check without emitting files: `npx tsc --noEmit`

Automated screenshot/testing (optional)
- Puppeteer is not preinstalled in this environment. To capture screenshots locally, install puppeteer and run a small script. Example:

```sh
# install
pnpm add -D puppeteer

# example script (scripts/screenshot.js)
const puppeteer = require('puppeteer');
(async ()=>{
  const b = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const p = await b.newPage();
  await p.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await p.setViewport({ width: 1280, height: 800 });
  await p.screenshot({ path: 'desktop.png', fullPage: true });
  await p.setViewport({ width: 375, height: 812 });
  await p.screenshot({ path: 'mobile.png', fullPage: true });
  await b.close();
})();
```

Manual interactive checks
- Start dev server: `pnpm start` and open http://localhost:5173/
- Mobile menu: toggle the hamburger, ensure menu animates open/close and closes when a link is clicked.
- Timeline: verify vertical line and dots are visible and events render as cards to the right.
- Smooth scroll: click nav links and confirm the page scrolls smoothly to sections.
- Responsive: test widths from 320px to 1280px.

If you'd like, I can add a small `scripts/screenshot.js` and a package.json script to automate screenshots after you approve adding puppeteer as a devDependency.

## Notes & suggested improvements

- Accessibility: add aria attributes for navigation, improve contrast where needed, and ensure form fields have associated labels.
- Image optimization: replace external Unsplash images with optimized local assets.
- Forms: replace alert-based contact form with a real submission endpoint or integrate with a service (Formspree, Netlify Forms).
- Split CSS into separate files and add a build step if converting to React.
- Fix small JS bugs in legacy prototypes if you plan to use them as reference. See `AGENT-RULES.md` for maintainers notes.

## License

MIT — adapt and reuse freely.

---

If you want, I can:
- Convert either design into a React component structure in `src/`.
- Create a GitHub Pages deployment configuration.
- Fix JS bugs in legacy prototypes if you plan to use them as references, or prefer editing React components under `src/` for production.

Tell me which you'd like next.
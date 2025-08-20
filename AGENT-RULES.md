AGENT-RULES for maintainers and contributors

Purpose
- Capture important implementation notes, known issues, and style rules for working with the `idea1.html` and `idea3.html` prototypes.

Quick start
- Preview either page by opening `idea1.html` or `idea3.html` in a browser, or serve the repo root with a simple HTTP server (see README.md).

Known issues
- idea1.html: a JavaScript selector in the smooth scroll code is broken. The line `document.querySelector(nav ul).classList.remove('show');` should be `document.querySelector('nav ul').classList.remove('show');`.
- idea1.html: mobile menu toggling may try to remove a class from an element that isn't present; guard checks are recommended.
- idea3.html: header scroll effect script is incomplete/truncated; ensure the scroll handler is fully implemented before production use.

Coding style
- CSS is currently inlined inside each HTML file for rapid prototyping. When converting to a production site:
  - Move CSS into `src/styles/` or `public/styles/`.
  - Use BEM-like class names for components to avoid global collisions.
  - Add a linting and style pipeline (stylelint, prettier).

Accessibility
- Add `aria-label` or `aria-expanded` to mobile nav toggles.
- Ensure images have meaningful `alt` attributes or are hidden from screen readers if decorative.
- Use semantic HTML5 elements (header, nav, main, section, footer) — both files already use many of these, but check order and landmarks.

Performance
- Replace external image links with optimized local assets and add responsive `srcset` where applicable.
- Defer non-critical JS and avoid blocking the main thread on page load.

Testing and deployment
- Automated unit tests are not included for static pages. If converted to React, add Jest + React Testing Library for components.
- Recommended deployment: GitHub Pages (branch: gh-pages), Netlify, or Vercel. Add a CI workflow to run linters and preview builds in pull requests.

Contribution guidelines
- Fork the repo, create feature branches, and open PRs with a short description of changes.
- Include screenshots for visual changes and link to a deployed preview when possible.

Contacts & ownership
- Repository owner: Michelle Rodriguez (placeholder). Update contact info in `idea3.html` and README.md when ready.

Change log
- v1.0 — Initial prototypes added (`idea1.html`, `idea3.html`) and documentation (README + AGENT-RULES).


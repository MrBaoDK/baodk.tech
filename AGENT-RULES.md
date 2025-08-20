AGENT-RULES for maintainers and contributors

Purpose
- Capture important implementation notes, known issues, and style rules for working with the `idea1.html` and `idea3.html` prototypes as well as the Vite + React + TypeScript migration.

Quick start
- Preview either static page by opening `idea1.html` or `idea3.html` in a browser, or serve the repo root with a simple HTTP server (see README.md).
- To run the React app locally (Vite): `pnpm install` then `pnpm start`.

Known issues
- idea1.html: a JavaScript selector in the smooth scroll code is broken. The line `document.querySelector(nav ul).classList.remove('show');` should be `document.querySelector('nav ul').classList.remove('show');`.
- idea1.html: mobile menu toggling may try to remove a class from an element that isn't present; guard checks are recommended.
- idea3.html: header scroll effect script is incomplete/truncated; ensure the scroll handler is fully implemented before production use.
- Migration note: several files were converted to TypeScript (`.tsx`). If you see JSX in a `.js` file, rename it to `.jsx` or `.tsx`.

Coding style
- Prefer modular CSS when migrating to React. Tailwind CSS is configured to read design tokens from CSS variables (see README for variable names).
- Use BEM-like class names for components to avoid global collisions when adding custom CSS.
- Add a linting and style pipeline (eslint, stylelint, prettier) before major refactors.

Accessibility
- Add `aria-label` or `aria-expanded` to mobile nav toggles.
- Ensure images have meaningful `alt` attributes or are hidden from screen readers if decorative.
- Use semantic HTML5 elements (header, nav, main, section, footer).

Performance
- Replace external image links with optimized local assets and add responsive `srcset` where applicable.
- Defer non-critical JS and avoid blocking the main thread on page load.

Build notes
- Vite + React + TypeScript is used. Common commands:
  - `pnpm start` — dev server
  - `pnpm build` — production build
  - `pnpm preview` — preview production build
- Tailwind integration: the Tailwind config maps several CSS variables to design tokens. Define these variables in global CSS (eg `:root { --color-primary-500: #... }`).

Contribution guidelines
- Fork the repo, create feature branches, and open PRs with a short description of changes.
- Include screenshots for visual changes and link to a deployed preview when possible.

Contacts & ownership
- Repository owner: Michelle Rodriguez (placeholder). Update contact info in `idea3.html` and README.md when ready.

Change log
- v1.0 — Initial prototypes added (`idea1.html`, `idea3.html`) and documentation (README + AGENT-RULES).



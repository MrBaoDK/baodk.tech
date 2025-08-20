AGENTS for maintainers and contributors

Purpose
- Capture important implementation notes, known issues, and style rules for working with the Vite + React + TypeScript migration and legacy prototypes.

Quick start
- Preview the React app by running the dev server (`pnpm start`). Legacy static prototypes are kept as archived references but are not recommended for production edits.
- To run the React app locally (Vite): `pnpm install` then `pnpm start`.

Known issues
- Legacy prototypes contain small JS issues (broken selectors, incomplete scroll handlers). They are maintained only as visual references; prefer editing the React components under `src/` for production changes.
- Migration note: several files were converted to TypeScript (`.tsx`). If you see JSX in a `.js` file, rename it to `.jsx` or `.tsx`.
- Repo update: a new `src/component/Home.tsx` was added. Tailwind uses CSS variables in `src/index.css` for colors and spacing; update those when theming.

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
- Repository owner: Michelle Rodriguez (placeholder). Update contact info in the source files and README when ready.

Change log
- v1.0 — Initial prototypes and documentation.



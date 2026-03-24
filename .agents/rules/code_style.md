# Code Style

## Absolute Alias Imports
- **DO**: Use `@baodk-site/` for all internal imports.
  - Example: `import { SOCIALS } from '@baodk-site/data/socials';`
- **AVOID**: Relative paths (e.g., `../../data/socials`) for anything outside the same directory.

## React & TypeScript (React 19)
- Use functional components with TypeScript interfaces for props.
- **NO `any` types**: Use proper types from `@baodk-site/types`.
- Use CSS variables (`var(--color-*)`) instead of hex values in JSX/TSX.

## Organization
- Group imports: React first, followed by external libraries, then `@baodk-site/` aliases.
- Use Prettier for consistent formatting.

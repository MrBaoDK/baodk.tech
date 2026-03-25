# Project Architecture

## Purpose
Simple rules for building a personal portfolio website with React + TypeScript.

## Project Structure (Required)
The project is a monorepo with the application located in the `site/` directory.

```
site/
├── src/
│   ├── components/     # All React components
│   ├── data/          # Content files
│   ├── styles/        # CSS files
│   └── types/         # TypeScript types
└── package.json       # Vite + Tailwind 4.0 configuration
```

## Build Tool
- **Vite**: Used for development and production builds.
- **pnpm**: Used for dependency management and workspace scripts.

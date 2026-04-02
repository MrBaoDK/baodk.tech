---
trigger: always_on
---

# Development Workflow

## Package Manager
- **Use `pnpm` exclusively.** Do not use `npm` or `yarn`.

## Commands
- **Install**: `pnpm install`
- **Start**: `pnpm dev` (from root) or `pnpm start` (from `site/`)
- **Build**: `pnpm build`
- **Deploy**: `pnpm run deploy` (deploys to `gh-pages` with `baodk.tech` CNAME)

## Simple Testing
- Test components manually in the browser.
- Check mobile responsiveness (responsive views).
- Verify all links and anchor tags work.

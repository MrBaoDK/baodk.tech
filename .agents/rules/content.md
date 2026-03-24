# Content Management

## External Data
- All content in separate files under `data/`
- Easy to update without touching components
- Type-safe with TypeScript interfaces

## Data Models
### Core Interfaces
```typescript
interface Skill {
  title: string;
  description: string;
  technologies: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
}

interface SocialItem {
  href: string;
  label: string;
  icon: string;
}

interface SocialData {
   [key: string]: SocialItem;
}
```

### Socials & Contact
- All social links, contact info (email, phone, address), and branding links should be maintained in `site/src/data/socials.ts`.
- Use the `SOCIALS` object to avoid hardcoding URLs in components.

### Implementation Pattern
- Define interfaces in `site/src/types/index.ts`.
- Export data from `site/src/data/*.ts`.
- Import within components (e.g., `import { SOCIALS } from '../data/socials'`).

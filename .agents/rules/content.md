# Content Management

## External Data
- All content in separate files under `data/`
- Easy to update without touching components
- Type-safe with TypeScript interfaces

## Simple Data Structure
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
```

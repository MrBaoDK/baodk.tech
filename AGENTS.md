# Development Rules & Guidelines

## Purpose
Simple rules for building a personal portfolio website with React + TypeScript.

## Project Structure (Required)
```
src/
├── components/     # All React components
├── data/          # Content files
├── styles/        # CSS files
└── types/         # TypeScript types
```

## Component Rules

### 1. TypeScript Only
- All components must be `.tsx` files
- Define interfaces for props and data
- No `any` types allowed

### 2. Simple Structure
- One component per file
- Keep components small and focused
- Use composition over complexity

### 3. Styling
- Use Tailwind CSS with CSS variables
- Define colors in `globals.css`:
  ```css
  :root {
    --color-primary: #1c1f3f;
    --color-accent: #ef7b3c;
    --color-text: #666666;
  }
  ```

## Content Management

### 4. External Data
- All content in separate files under `data/`
- Easy to update without touching components
- Type-safe with TypeScript interfaces

### 5. Simple Data Structure
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

## Quality Standards

### 6. Performance
- Keep bundle size reasonable
- Optimize images
- Use lazy loading for images

### 7. Accessibility
- Use semantic HTML
- Add alt text for images
- Ensure keyboard navigation works

### 8. Mobile First
- Design for mobile first
- Test on different screen sizes
- Use responsive breakpoints

## Development Workflow

### 9. Simple Testing
- Test components manually
- Check mobile responsiveness
- Verify all links work

### 10. Deployment
- Build with `pnpm build`
- Deploy to Vercel or Netlify
- Test live site after deployment

## Code Style

### 11. Clean Code
- Use descriptive variable names
- Keep functions small
- Add comments for complex logic

### 12. Consistent Formatting
- Use Prettier for formatting
- Follow React naming conventions
- Keep imports organized

This simplified approach focuses on getting a working portfolio online quickly while maintaining good practices.

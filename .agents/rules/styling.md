# Styling & Design System (Cyber Obsidian)

## Theme: Cyber Obsidian
- **Primary/Accent**: `#E94560` (Accent Crimson)
- **Background**: `#1A1A2E` (Deep Space Blue)
- **Navy/Card**: `#0F3460` (Midnight Navy)
- **White**: `#EEEEEE` (Text)
- **Silver**: `#C0C0C0` (Muted Text)

## Typography
- **Headings**: `Space Grotesk` (600, 700)
- **Body**: `Manrope` (400, 500)

## Icons
- Use **Material Symbols Outlined** via Google Fonts.

## Tailwind CSS 4.0
- Use CSS variables for colors:
  ```css
  :root {
    --color-primary: #E94560;
    --color-background: #1A1A2E;
    --color-navy: #0F3460;
    --color-white: #EEEEEE;
    --color-silver: #C0C0C0;
  }
  ```
- Use utility classes for responsive design.
- **NO hardcoded light backgrounds** (e.g., `bg-white` or `bg-gray-100`).

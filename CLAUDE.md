# Claude Code Commands

This file contains helpful commands for working with this project using Claude Code.

## Development Commands

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

### Type Check

```bash
npm run typecheck
```

## Project Structure

- `src/components/` - React components
  - `Hero.tsx` - Landing section with gradient background
  - `Instructions.tsx` - Challenge prompt and copy functionality
  - `Share.tsx` - Social sharing and completion flow
- `src/index.css` - Tailwind CSS with custom theme variables
- `index.html` - Main HTML file with Google Fonts

## Design System Notes

### Color Usage

- Use `text-neutral-*` for text colors
- Use `bg-teal-*` for primary actions
- Use `bg-neutral-*` for backgrounds

### Font Classes

- `font-display` - Figtree (headings)
- `font-text` - Instrument Sans (body text)
- `font-mono` - Martian Mono (code)

### Responsive Breakpoints

- Mobile first approach
- Use `md:` prefix for desktop styles

## Common Tasks

### Adding New Components

1. Create in `src/components/`
2. Import in `App.tsx`
3. Follow existing patterns for styling

### Updating Colors

1. Modify CSS variables in `src/index.css`
2. Use the `@theme` directive for new colors

### Testing Changes

1. Run `npm run dev` for live preview
2. Check responsive design on mobile
3. Test all interactive elements

## Deployment Notes

- Project is optimized for Netlify deployment
- All assets are properly configured for production
- Build output goes to `dist/` directory

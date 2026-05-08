# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Architecture

Single-page portfolio site for Wangyuhan (CS student, AI for Science focus). Deployed on Vercel — push to `main` triggers auto-deploy.

### Tech Stack
React 19 + Vite 6 + Tailwind CSS 3 + Framer Motion + Lucide React

### Data Flow
All personal content lives in `src/data/portfolio.js`. Components import from this file — to update site content, edit this single file. Exports: `personalInfo`, `about`, `skills`, `projects`, `educations`, `researches`, `publications`, `honors`, `contact`.

### Component Pattern
- `App.jsx` controls section order and manages the loading screen state
- Each section is a standalone component in `src/components/`
- `SectionHeading.jsx` is a shared component for section titles (title + gradient accent + subtitle)
- All scroll-triggered animations use Framer Motion's `whileInView` with `viewport={{ once: true, margin: '-80px' }}` — keep this margin consistent across components

### Tailwind Custom Theme
- `primary` (50-900): Indigo/violet palette, used for buttons, gradients, accents
- `accent` (50-900): Orange palette, used for hover highlights
- Font: Inter via Google Fonts

### Global Styles (`src/index.css`)
- Custom scrollbar, selection color, loading screen classes
- Body background is `bg-white` (sections alternate white/slate-50)

## Key Patterns

- **Loading screen**: Conditional render `{loading && ...}` with CSS spinner (not Framer Motion — avoids animation running after unmount)
- **Navbar scroll detection**: `useRef` for value comparison in `requestAnimationFrame` callback (avoids stale closure bug with React state)
- **Click-outside-to-close**: Separate `useEffect` with `[mobileOpen]` dependency, cleanup on unmount
- **Particles in Hero**: Deterministic values via `(i * 37 + 13) % 100` (not `Math.random()` — avoids hydration mismatch)

## Documentation
- `CHANGELOG.md` — modification history with git commit hashes
- `LEARN.md` — technical knowledge, problem solutions, and learning notes

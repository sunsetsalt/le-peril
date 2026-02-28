# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # TypeScript check + production build
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

There are no tests in this project.

## Architecture

This is a **promotional landing site for a French dystopian novel** ("Le Péril"). It is a Vite + React + TypeScript SPA using React Router, Framer Motion for animations, Tailwind CSS for styling, and Lucide React for icons.

### Routing (`src/App.tsx`)
Three pages wrapped in `LanguageProvider` and `BrowserRouter`:
- `/` → `Home` — hero section + synopsis with scroll-triggered paragraph reveals
- `/quiz` → `Quiz` — 5-question faction quiz (Loyal vs. Dissident)
- `/excerpt` → `Excerpt` — book excerpt, chapter one

### Internationalisation (`src/contexts/LanguageContext.tsx`)
**All user-visible text lives in `LanguageContext.tsx`** inside a flat `translations` object with `en` and `fr` keys. The default language is French (`'fr'`). Every component consumes text via the `useLanguage()` hook and calls `t('key')`. To add or edit copy, find the key in `LanguageContext.tsx` and update both language objects.

### Quiz logic (`src/utils/quiz.ts`)
- `getQuestions(t)` — returns 5 questions with answers shuffled per-render via Fisher-Yates, storing original indices (`originalIndices`) to allow accurate scoring.
- `calculateResult(answers, t)` — scores based on original answer index: index `0` = Loyal, index `2` = Dissident; whichever count is higher wins.

### Visual design conventions
- **Dark fire theme**: black background with red/orange gradients, sparkle particles in `App.tsx` (purely CSS/inline styles, no JS animation loop).
- **Fonts**: `Crimson Text` (serif, headings and body prose) and `Inter` (sans, UI). Loaded from Google Fonts in `src/index.css`.
- **Custom animations** (`animate-float-sparkle`, `animate-float-sparkle-slow`, etc.) are defined as `@keyframes` in `src/index.css` and referenced by Tailwind utility classes.
- The `.bolt/prompt` file states: use Lucide React for icons; do not install additional UI/icon packages.

### Book covers
Two locale-specific cover images (`src/assets/bookcover-fr.png`, `src/assets/bookcover-en.png`) are swapped based on `language` from `useLanguage()`.

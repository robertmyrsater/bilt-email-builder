# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

There are no tests. The `/api/send-email.js` endpoint requires a `RESEND_API_KEY` env var — copy `.env.example` to `.env` to configure it.

## Architecture

Single-page React app (Vite + Tailwind) for building and exporting HTML emails. The entire UI lives in `src/App.jsx` (~1,360 lines). There is no routing.

### Core Data Model

State is persisted to localStorage (`bilt-email-builder` key):

- **Design**: `{ id, name, blocks, theme, subject, preheader, fontUrl, fontFamily }`
- **Block**: `{ id, type, content }` — types: `header`, `heading`, `paragraph`, `cta`, `divider`, `image`, `video`, `footer`
- Multiple designs are supported; `activeDesignId` tracks which is open
- Undo/redo history (50 entries, 300ms debounce) is in-memory only

### Key Modules

| File | Purpose |
|------|---------|
| `src/App.jsx` | All UI, state management, drag-and-drop logic |
| `src/emailRenderer.js` | Generates production-ready HTML email output |
| `src/components.js` | Component type enums and default content per type |
| `src/templates.js` | Pre-built templates (blank, announcement, digest, onboarding) |
| `api/send-email.js` | Vercel serverless function — sends test emails via Resend |

### Drag-and-Drop

Uses `@dnd-kit`. Two drag sources:
- **Palette** (`source: 'palette'`) → dropping creates a new block on the canvas
- **Canvas** (`source: 'canvas'`) → dragging reorders existing blocks

Collision detection uses `closestCenter`.

### Email Rendering Pipeline

`renderEmailHTML()` in `emailRenderer.js` produces table-based, email-client-safe HTML with:
- Light/dark theme via CSS media queries
- GT America VF embedded as base64 `@font-face` at export time (falls back to Inter → system fonts)
- Social icon PNGs embedded as base64 data URIs at export time (self-contained, no hosted URL needed)
- Google Fonts also supported via `fontUrl` option
- MSO (Outlook) conditional comments where needed
- Max width 600px

Export paths: copy to clipboard, download `.html`, Braze export (injects `{{${unsubscribe_url}}}` Liquid syntax), or send test via `/api/send-email`.

### Deployment

Configured for Vercel (`vercel.json`). The `api/` directory is auto-deployed as serverless functions.

## Decision Log

All important decisions are recorded in `DECISIONS.md`. When making a significant technical or product decision — choosing an approach, changing a data model, adding a dependency, restructuring code — add an entry with:

- **Date**
- **Decision** — what was decided
- **Reason** — why this approach was chosen over alternatives
- **Scope** — what files or areas are affected

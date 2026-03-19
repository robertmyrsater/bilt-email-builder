# Decision Log

Record of important technical and product decisions made during development.

---

## 2026-03-19 — Rename project from wabi-email-builder to bilt-email-builder

**Decision:** Replaced all references to "wabi" / "Wabi" with "bilt" / "Bilt" across the entire codebase, including CSS class prefixes, function names, localStorage key, social URLs, download filenames, and the Vercel prod URL.

**Reason:** Project is rebranding from Wabi to Bilt.

**Scope:** `src/App.jsx`, `src/emailRenderer.js`, `src/components.js`, `src/templates.js`, `src/index.css`, `api/send-email.js`, `index.html`, `package.json`, `package-lock.json`. GitHub repo created at `robertmyrsater/bilt-email-builder`.

---

## 2026-03-19 — Self-contained export: base64 embed assets

**Decision:** All exported HTML is fully self-contained — social icon PNGs are fetched at export time and embedded as base64 data URIs, and the GT America VF font is embedded as a base64 `@font-face` declaration.

**Reason:** The app may not be deployed to a stable URL when emails are sent. Embedding assets avoids broken images and missing fonts in recipients' inboxes. The font is ~689KB base64 — acceptable tradeoff for reliable rendering in Apple Mail and webmail clients that support embedded fonts. Clients that don't support it fall back to Inter → system fonts.

**Scope:** `src/emailRenderer.js` (`fetchAsBase64`, `fetchIconsAsBase64`, `fetchGTAmericaFontFace`, `renderEmailHTML`), `src/App.jsx` (all export paths).

---

## 2026-03-19 — LinkedIn icon: inline SVG paths, not image file

**Decision:** LinkedIn icon in both canvas preview and exported HTML uses inline SVG paths for the "in" mark only (no background square), with a cropped `viewBox="4.95 4.98 13.88 13.85"` to match the visual size of the other social icons.

**Reason:** The provided `brand-linkedin.svg` has a black rounded-square background baked into a single evenodd path, making it invisible on the dark canvas and mismatched in the light email export. Extracting just the inner mark paths renders consistently with the PNG-based X/Instagram/TikTok icons.

**Scope:** `src/App.jsx` (canvas footer), `src/emailRenderer.js` (`renderFooter` — `linkedInInlineSvg`).

---

## 2026-03-19 — Export target: Braze (replaces Customer.io)

**Decision:** Renamed "Export for Customer.io" to "Export for Braze". The Braze export injects `{{${unsubscribe_url}}}` (Braze Liquid syntax) into the unsubscribe link. Standard HTML export keeps `href="#"` as a placeholder.

**Reason:** Bilt uses Braze to send emails, not Customer.io.

**Scope:** `src/emailRenderer.js` (`renderBrazeHTML`, `downloadBrazeHTML`), `src/App.jsx`.

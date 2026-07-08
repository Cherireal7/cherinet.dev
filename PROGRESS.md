# Portfolio — Progress Log

## 2026-07-05 — Finish pass

Closed out the three real gaps on the site.

- **Contact form wired to Formsubmit.co** (`src/pages/contact.astro`). Points at `cheridemeke7@gmail.com`. Added `_subject`, `_captcha=false`, `_template=table`, and a `_next` redirect target so no-JS submissions bounce back to `/contact?sent=1`. Rewrote the inline JS to hit the AJAX endpoint (`formsubmit.co/ajax/{email}`) and show the success banner both from the fetch response and from the `?sent=1` query. Dropped the mailto fallback — form action is always populated now.
  - **First-time activation required:** first real submission triggers a confirmation email from Formsubmit that has to be clicked before deliveries start.
- **First writing post published** (`src/content/posts/why-a-portfolio.mdx`, renamed from `hello.mdx`). Real ~500-word opening essay on why the site exists and what the notebook is for. `draft: false`. Route: `/writing/why-a-portfolio`. `/writing` index now shows a post instead of the empty state.
- **/now refreshed to July 5, 2026.** Updated the header date and swapped two of the three "Building" cards (Dr. Brug + Liturgical Data Engine → this site + LHF Ethiopia) so the snapshot reflects what's actually on the desk this week.

Build: `pnpm build` → 22 pages generated cleanly (was 21; added `/writing/why-a-portfolio/`). No errors.

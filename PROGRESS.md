# Portfolio — Progress Log

## 2026-07-08 — CaseStudyKeyArt dark-mode fix

`CaseStudyKeyArt.astro` plates had a hardcoded light gradient regardless of theme. Strokes use `var(--color-ink)` which flips to near-white in dark mode → white-on-white, art appeared blank on `/work/fida-website` (and every other case study) in dark mode.

- Removed the inline `style={background: ${plateBg}}` from the plate div in `src/components/CaseStudyKeyArt.astro`.
- Added `data-accent={accent}` + `class="key-art-plate"` so CSS can select.
- New rules in `src/styles/global.css` scoped to `.key-art-plate[data-accent="blue"|"ink"]` — light gradients for light theme, deep navy / deep zinc for `html.dark`. Strokes now legible on both themes without changing the SVG compositions.

Follow-up worth flagging: FIDA Website (and possibly KLA, Classic Noodle) now have real product / brand images in `public/projects/`. Case study detail pages currently render only the SVG key art below the hero. Swapping the SVG for a real screenshot on cases where we have one is a one-line change in `src/pages/work/[...slug].astro:99` — didn't do it unilaterally since the SVG signature is a deliberate design choice, not an oversight.

## 2026-07-08 — Brand + product galleries in case studies

Big content pass — the case studies now actually show the work.

- **New `mdx-grid-2` / `mdx-grid-3` / `figure` + `figcaption` styles** (`src/styles/global.css`). Small responsive grid utilities scoped to `.prose-case` so MDX bodies can render gallery rows without leaving the prose flow. Also styles `<figure>` and `<figcaption>` for captioned images.
- **FIDA case study got Brand + In-the-wild + Try-it sections** (`src/content/work/fida-delivery.mdx`, `public/projects/fida/`). Copied five more assets out of Telegram: `mark-white.png`, `telegram-mini-app.png`, `flyer-a5.png`, `amharic-promo.png`, and re-used the existing `logo.png` / `logo-red.png` / `feature.png` / `social.png` / `app-providers.png`. The "Try it" section links to the R2-hosted APK (`cdn.fidadelivery.et/apk_folder/fida-customer-production.apk`), fidadelivery.et, and the Telegram bot @fida_delivery_bot. The 60MB APK was *not* checked into the repo — hosted CDN URL is authoritative.
- **KLA case study got a Brand system section** (`src/content/work/kla-constructions.mdx`, `public/projects/kla/`). Copied `logo-primary.png`, `logo-secondary.png`, `wall-mockup.png`, and `founder-portrait.png` from `~/Documents/Github/kla_constructions_web_app/public/images/`. Marks + wall-context row, then a caption'd founder portrait for the human beat.
- **LHF case study got a Brand system section** (`src/content/work/lhf-ethiopia.mdx`, `public/projects/lhf/`). Added `mark.png` (Luther's Rose) and `podcast-logo.png` (LHFE ceremonial frame). Copy explains the inherited-mark constraint and the ceremonial companion frame we designed around it.
- **Classic Noodle got a Brand system section** (`src/content/work/classic-noodle.mdx`, `public/projects/classic-noodle/`). Added `wordmark-neon.png` (cursive wordmark) and `box-mockup.png` (takeaway packaging carrying the same identity). Ties visual continuity from online-order screen to physical takeaway box.

Build: `pnpm build` → 22 pages generated cleanly. No errors.

Follow-ups worth flagging:
- LHF MDX still describes the *aspirational* palette (blue + gold + green) while the live site ships crimson + navy + teal per README-vs-code audit. Don't unilaterally swap — asking Cherinet which palette is the keeper before rewriting that paragraph.
- Doxa and BizBridge case studies still have no Brand section. No obvious brand assets in Telegram / Downloads for either; would need Cherinet to point me at the files or export from Figma.
- FIDA Website case study has good on-site product screens already but no separate Brand section either — the FIDA mark is on the FIDA Delivery page and there's no need to duplicate.

## 2026-07-08 — Status refresh + FIDA mockup

- **`/now` Sivers link corrected** (`src/pages/now.astro`). Anchor now points to `https://sive.rs/nowff` (Sivers&rsquo; own explanation of the /now page pattern) instead of the community index at nownownow.com.
- **LHF Ethiopia promoted to Live** (`src/lib/projects.ts`, `src/content/work/lhf-ethiopia.mdx`). `liveStatus` flipped from `in-development` → `live`; MDX frontmatter now carries `live: "https://lhfethiopia.org"` so the case-study page renders a &ldquo;Visit live site&rdquo; button.
- **FIDA case study got its first real screen** (`public/projects/fida/app-providers.png`, `src/content/work/fida-delivery.mdx`). Pulled the &ldquo;All food providers&rdquo; mockup out of `~/Downloads/Telegram Desktop/` and embedded it under &ldquo;What ships today&rdquo; with real alt text. FIDA folder still has feature/social/logo/logo-red intact.
- **Repo pulse audited.** Recent commits on customer app (iOS build prep, v1.1.1), rider app (expo-updates + Crashlytics), fida-website (ISR + APK CDN), lhf-ethiopia (Formsubmit contact + newsletter). Status badges match reality now: FIDA Delivery `in-development`, FIDA Website `live`, LHF `live`, BizBridge `private-beta`, KLA / Classic Noodle / Doxa `live`, Dr. Brug `wip`.
- **Link audit.** Every internal `href` maps to a real route; every external URL is one of GitHub / LinkedIn / Vercel / Unsplash / Google Fonts / Formsubmit / real client domain. No dead pointers.

Build: `pnpm build` → 22 pages generated cleanly. No errors.

## 2026-07-08 — Review-response pass

Closed the punch list from the site review (missing sections + low/medium critical fixes).

- **Homepage contact CTA rewritten** (`src/pages/index.astro`). New copy: “Ready to discuss a role, a new project, or just have a question? Reach out directly via email.” Added a supporting line with the explicit `cheridemeke7@gmail.com` mailto so the address is visible without hovering. Section index renumbered — Endorsements is now 04, Get in touch is 05.
- **New Endorsements section** (`src/pages/index.astro`, `aria-labelledby="endorsements-heading"`). Six cards covering the co-founder teams (Doxa, FIDA) and the four client engagements (KLA, LHF, Classic Noodle, BizBridge) with concrete role context on each. No fabricated pull-quotes — the section closes with a “References available on request” link to `/contact`, so real quotes can be introduced later without lying now.
- **Quantifiable metrics filled in** (`src/lib/projects.ts`). Added `metric` fields on BizBridge (`519 sectors indexed`), FIDA Website (`Live · fidadelivery.et`), LHF (`6 Ethiopian languages`), and Dr. Brug (`Long-form scholarship archive`). Existing FIDA Delivery / Doxa / Classic Noodle / KLA metrics already had real numbers and stayed as-is. Numbers come from the case-study MDX bodies, not marketing invention.
- **“Shipped” status clarifier added** under the Selected Work heading (`src/pages/index.astro`). One-paragraph legend explaining that `Live`, `In development`, and `Private beta` badges reflect real deployment state, and that “2025 — present” dates are ongoing engagements, not projections.
- **Case-study links audited.** All five featured cards route to real MDX files in `src/content/work/` — `fida-delivery`, `bizbridge`, `fida-website`, `lhf-ethiopia`, `drbrug`. No dead “Read case study” links.
- **Mobile drawer accessibility upgrade** (`src/components/Nav.astro`). Added `role="dialog"`, `aria-modal="true"`, and `aria-label="Site menu"`. Focus now moves into the drawer (to the close button) on open, and returns to the hamburger trigger on close. Escape-to-close, skip link, and `:focus-visible` outline (`src/styles/global.css`) were already in place — verified during the pass.

Build: `pnpm build` → 22 pages generated cleanly. No errors.

## 2026-07-05 — Finish pass

Closed out the three real gaps on the site.

- **Contact form wired to Formsubmit.co** (`src/pages/contact.astro`). Points at `cheridemeke7@gmail.com`. Added `_subject`, `_captcha=false`, `_template=table`, and a `_next` redirect target so no-JS submissions bounce back to `/contact?sent=1`. Rewrote the inline JS to hit the AJAX endpoint (`formsubmit.co/ajax/{email}`) and show the success banner both from the fetch response and from the `?sent=1` query. Dropped the mailto fallback — form action is always populated now.
  - **First-time activation required:** first real submission triggers a confirmation email from Formsubmit that has to be clicked before deliveries start.
- **First writing post published** (`src/content/posts/why-a-portfolio.mdx`, renamed from `hello.mdx`). Real ~500-word opening essay on why the site exists and what the notebook is for. `draft: false`. Route: `/writing/why-a-portfolio`. `/writing` index now shows a post instead of the empty state.
- **/now refreshed to July 5, 2026.** Updated the header date and swapped two of the three "Building" cards (Dr. Brug + Liturgical Data Engine → this site + LHF Ethiopia) so the snapshot reflects what's actually on the desk this week.

Build: `pnpm build` → 22 pages generated cleanly (was 21; added `/writing/why-a-portfolio/`). No errors.

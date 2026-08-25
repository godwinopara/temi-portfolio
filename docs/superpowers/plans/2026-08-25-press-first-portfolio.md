# Press-first Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as a responsive, motion-led speaker site that converts press and event bookers into email enquiries.

**Architecture:** Preserve the Pages Router while moving portfolio records into a single content module and composing each route from reusable shell, stage, and poster-card components. Global CSS variables provide the sole runtime token source; CSS Modules own local layouts, marquee, reveal, and reduced-motion styles.

**Tech Stack:** Next.js 13.1, React 18, CSS Modules, `next/image`, `next/link`, `react-icons`.

**Spec:** `docs/superpowers/specs/2026-08-25-press-first-portfolio-design.md`

## Global Constraints

- Keep the Pages Router and do not add a CMS, backend, analytics, contact-form submission, or media-kit generation.
- Primary audience: press and event bookers; secondary audience: consulting clients.
- Primary conversion uses `mailto:techiegeeksinternational@gmail.com`.
- Use the approved poster-led stage palette: near-black, off-white, acidic lime, and restrained warm red.
- Use the existing Arise News and Lagos Startup Week posters as a hero collage until an on-stage portrait is provided.
- Keep revised design changes uncommitted until the user gives explicit final visual approval.
- Meet WCAG 2.2 AA and support `prefers-reduced-motion: reduce`.
- Use `next/image` for local images and preserve external URLs unless correcting a confirmed typo.

---

## File structure

| Path | Responsibility |
| --- | --- |
| `DESIGN.md` | Approved visual intent and mapping to CSS custom properties. |
| `content/portfolio.js` | Single source for navigation, email, projects, talks, articles, and selected home-page records. |
| `styles/globals.css` | Reset, global design tokens, typography, focus, scrollbar, reduced-motion, and shared utility classes. |
| `components/layout/Layout.js` | Semantic site shell with skip link, header, main, and footer. |
| `components/navbar/navbar.js` / `Navbar.module.css` | Responsive, keyboard-operable site navigation. |
| `components/footer/footer.js` / `Footer.module.css` | Shared press/contact CTA and footer navigation. |
| `components/Home/*` | Press-first home-page hero, speaking topics, and editorial content sections. |
| `components/project/*`, `components/talk/*`, `components/article/*` | Reusable cards and route-level archive grids fed from central content. |
| `components/contact/*` | Direct-email contact route with no inactive form UI. |
| `pages/*.js` | Accurate page-specific metadata and composed route content. |

## Task 1: Establish content, tokens, and metadata

**Files:**
- Create: `DESIGN.md`
- Create: `content/portfolio.js`
- Modify: `styles/globals.css`
- Modify: `pages/index.js`, `pages/about.js`, `pages/projects.js`, `pages/talks.js`, `pages/articles.js`, `pages/contact.js`

**Interfaces:**
- Produces: `site`, `projects`, `talks`, `articles`, `featuredProjectIds`, `featuredTalkIds`, and `featuredArticleId` exports.
- Consumes: existing images under `public/images/` and confirmed external project/talk/article URLs.

- [ ] **Step 1: Add failing content-integrity checks as a Node script**

Create `scripts/check-portfolio-content.mjs` that imports `content/portfolio.js` and exits non-zero unless the selected IDs resolve, the primary email is a valid `mailto:` address, every record has a non-empty title and image, and exactly two talks plus one article are selected. A record may use `link: null` only when the destination is unavailable and will render as non-interactive text.

```js
import { articles, featuredArticleId, featuredTalkIds, site, talks } from "../content/portfolio.js";

const selectedTalks = talks.filter(({ id }) => featuredTalkIds.includes(id));
const selectedArticle = articles.find(({ id }) => id === featuredArticleId);
const validEmail = /^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/.test(site.contactEmail);

if (!validEmail || selectedTalks.length !== 2 || !selectedArticle) process.exit(1);
```

- [ ] **Step 2: Run the content check and verify it fails before the content module exists**

Run: `node scripts/check-portfolio-content.mjs`

Expected: failure because `content/portfolio.js` does not exist.

- [ ] **Step 3: Create the data module and design context**

Export the contact address, route labels, and the existing project/talk/article records from `content/portfolio.js`. Select the current Arise News deepfake talk and Lagos Startup Week AI-opportunities talk as `featuredTalkIds`; select “ChatGPT Masterclass” as `featuredArticleId`.

Create `DESIGN.md` with the approved editorial-humanist rationale and this token mapping:

```css
:root {
  --color-canvas: #f6f2ea;
  --color-ink: #17201b;
  --color-muted: #657068;
  --color-moss: #2f6654;
  --color-terracotta: #c75c3d;
  --font-display: Georgia, "Times New Roman", serif;
  --font-body: "Manrope", Arial, sans-serif;
}
```

- [ ] **Step 4: Replace global styles and add shared accessibility primitives**

In `styles/globals.css`, define the documented custom properties, a fluid `.container`, typography with readable line lengths, a visible `:focus-visible` ring, a `.skipLink`, consistent scrollbars, and this reduced-motion guard:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
```

- [ ] **Step 5: Replace generic metadata**

Give each route an accurate title and description. For example, the homepage uses “Tèmítọ́pẹ́ Ọládòkun — AI Product Leader & Speaker” and “Speaking, product strategy, and practical artificial intelligence.”

- [ ] **Step 6: Run checks and commit**

Run: `node scripts/check-portfolio-content.mjs && npm run lint`

Expected: both commands exit 0.

Commit:

```bash
git add DESIGN.md content/portfolio.js scripts/check-portfolio-content.mjs styles/globals.css pages
git commit -m "feat: establish portfolio content and design tokens"
```

## Task 2: Build the accessible responsive shell

**Files:**
- Modify: `components/layout/Layout.js`
- Modify: `components/navbar/navbar.js`, `components/navbar/Navbar.module.css`
- Modify: `components/footer/footer.js`, `components/footer/Footer.module.css`

**Interfaces:**
- Consumes: `site` and `navigation` from `content/portfolio.js`.
- Produces: one semantic header, one labelled main landmark, a reusable direct-email CTA, and responsive navigation used on every route.

- [ ] **Step 1: Add a manual keyboard acceptance test before changing the shell**

Start the app with `npm run dev`, then record that the current hamburger is a clickable `div`, has no accessible name, and cannot close via Escape. This establishes the expected regression to remove.

- [ ] **Step 2: Implement semantic layout landmarks and skip link**

Update `Layout` so the page begins with `<a className="skipLink" href="#main-content">Skip to content</a>`, contains `header`, `main id="main-content" tabIndex="-1"`, and one footer. Remove the nested `.container` duplication around the shared header.

- [ ] **Step 3: Replace navigation controls with a keyboard-operable menu**

Use a `button` for the mobile trigger and manage `aria-expanded`, `aria-controls="site-navigation"`, and a `useEffect` keydown listener that calls `setNavIsOpen(false)` for Escape. Render the same route list from central content for desktop and mobile views. Use `IoClose` and `IoIosMenu` with visible text or an `aria-label`.

```jsx
<button
  type="button"
  className={styles.menuButton}
  aria-controls="site-navigation"
  aria-expanded={navIsOpen}
  aria-label={navIsOpen ? "Close navigation" : "Open navigation"}
  onClick={() => setNavIsOpen((open) => !open)}
>
  {navIsOpen ? <IoClose aria-hidden="true" /> : <IoIosMenu aria-hidden="true" />}
</button>
```

- [ ] **Step 4: Rebuild header and footer CSS from the shared tokens**

Use a 44px minimum interactive target, `position: fixed` only for the mobile overlay, and a desktop breakpoint around `900px`. Give navigation links a moss hover/focus underline. In the footer, replace “Contact Me” with a direct email anchor whose copy is “Email for speaking & press”.

- [ ] **Step 5: Verify shell behavior and commit**

Run: `npm run lint`

Manually verify: Tab reaches the skip link then every navigation item; Enter opens the menu; Escape closes it; focus is visible; the email CTA points to `mailto:techiegeeksinternational@gmail.com`.

Commit:

```bash
git add components/layout components/navbar components/footer
git commit -m "feat: add accessible editorial site shell"
```

## Task 3: Compose the press-first homepage

**Files:**
- Create: `components/Home/SpeakingTopics.js`
- Create: `components/Home/ContactCta.js`
- Modify: `components/Home/Hero.js`, `components/Home/SelectedProjects.js`, `components/Home/SelectedTalks.js`, `components/Home/SelectedArticles.js`, `components/Home/home.js`, `components/Home/Home.module.css`
- Modify: `components/project/ProjectCard.js`, `components/project/ProjectCard.module.css`
- Modify: `components/talk/TalkCard.js`, `components/talk/TalkCard.module.css`
- Modify: `components/article/ArticleCard.js`, `components/article/ArticleCard.module.css`

**Interfaces:**
- Consumes: central selected content IDs and `site.contactEmail`.
- Produces: homepage sections that render exactly two talk cards and one article card without duplicated arrays.

- [ ] **Step 1: Extend the content-integrity check for homepage composition**

Add assertions that central selectors return exactly two talk records, one article record, and at least two selected work records. Ensure the script reports each failed condition by name before exiting 1.

- [ ] **Step 2: Run the strengthened check before moving component data**

Run: `node scripts/check-portfolio-content.mjs`

Expected: pass after Task 1's central data module exists; the assertions protect the selected records while the components are migrated in the next steps.

- [ ] **Step 3: Implement the hero, speaking topics, and email CTA**

Give `Hero` one h1: “Building intelligence with humanity.” Include a press-oriented supporting paragraph and `<a href={site.contactEmail}>Email for speaking & press</a>`. Add `SpeakingTopics` as a semantic list of practical AI, product strategy, and responsible innovation. Add `ContactCta` as a reusable `section` with the same email link.

- [ ] **Step 4: Convert feature sections and cards to central data**

Filter central content with the selection IDs. Replace any anchor-wrapped button with one styled anchor. Give project images title-based alt text, talk images alt text that identifies the event, and article images alt text that identifies the article. Preserve `target="_blank" rel="noreferrer"` on external links.

- [ ] **Step 5: Build the editorial homepage layout**

Implement a narrow-first single column; upgrade at `900px` to an asymmetric hero and a two-column feature grid. Use `aspect-ratio` on media wrappers, section folio labels, light divider rules, and only transform/opacity transitions. Apply card hover lift only on hover-capable pointers.

```css
@media (hover: hover) {
  .cardLink:hover .card { transform: translateY(-5px); }
}
```

- [ ] **Step 6: Run checks, lint, and commit**

Run: `node scripts/check-portfolio-content.mjs && npm run lint`

Expected: both commands exit 0.

Commit:

```bash
git add components/Home components/project/ProjectCard.* components/talk/TalkCard.* components/article/ArticleCard.* scripts/check-portfolio-content.mjs
git commit -m "feat: build press-first portfolio homepage"
```

## Task 4: Restyle archive, about, and contact routes

**Files:**
- Modify: `components/about/AboutMe.jsx`, `components/about/About.module.css`
- Modify: `components/project/Project.js`, `components/project/ProjectPageCard.js`, `components/project/ProjectPageCard.module.css`
- Modify: `components/talk/Talk.jsx`, `components/talk/Talk.module.css`
- Modify: `components/article/Article.js`, `components/article/Article.module.css`
- Modify: `components/contact/ContactComponent.js`, `components/contact/ContactDetails.js`, `components/contact/contact.module.css`
- Delete: `components/contact/ContactForm.js`

**Interfaces:**
- Consumes: `projects`, `talks`, `articles`, and `site.contactEmail` from the content module.
- Produces: consistent editorial archive grids and a direct-email contact page with no inactive form.

- [ ] **Step 1: Add an archive content check**

Extend `scripts/check-portfolio-content.mjs` to fail if the full project, talk, or article archive contains duplicate IDs or an external record lacks an absolute `https://` URL.

- [ ] **Step 2: Run the archive check and correct invalid source records**

Run: `node scripts/check-portfolio-content.mjs`

Expected: any `#` or `http://` placeholder URL is identified. Mark an unavailable item as `link: null` and render it as non-interactive, or use its confirmed HTTPS destination.

- [ ] **Step 3: Make every archive route data-driven**

Remove the locally declared arrays from `Project.js`, `Talk.jsx`, and `Article.js`. Import central content. Use the item `id` for React keys. Render absent/unavailable links as non-clickable text rather than as a false button.

- [ ] **Step 4: Rebuild page layouts and contact route**

Use a consistent intro/folio/header pattern on interior pages. Convert archive media to stable `aspect-ratio` cards and responsive grids. Restyle the about page with the approved type scale. Remove `ContactForm` imports and delete the unused component; make the contact page a press invitation with a large email link and LinkedIn link.

- [ ] **Step 5: Run verification and commit**

Run: `node scripts/check-portfolio-content.mjs && npm run lint && npm run build`

Expected: all commands exit 0.

Commit:

```bash
git add components/about components/project components/talk components/article components/contact scripts/check-portfolio-content.mjs
git commit -m "feat: restyle portfolio archive and contact pages"
```

## Task 5: Audit production quality and responsive behavior

**Files:**
- Modify: only files with defects found during this task.

**Interfaces:**
- Consumes: all prior route and component work.
- Produces: verified production build evidence and no unresolved static accessibility violations in changed code.

- [ ] **Step 1: Run static, lint, and production checks**

Run:

```bash
node scripts/check-portfolio-content.mjs
npm run lint
npm run build
python /Users/godwinopara/.codex/plugins/cache/openai-curated-remote/frontend-design-premium/1.4.0/skills/frontend-design-premium/scripts/audit_project.py . --mode strict
```

Expected: content check, lint, and build exit 0; resolve every applicable blocking audit finding.

- [ ] **Step 2: Run the site and complete the responsive accessibility pass**

Run: `npm run dev`

Verify `/` and `/talks` at 375px and 1440px widths. Tab through navigation, open/close the mobile menu by keyboard, activate the skip link, inspect every direct email CTA, and enable reduced motion in browser settings to confirm content remains readable and no motion is required.

- [ ] **Step 3: Inspect performance-sensitive markup**

Confirm all `next/image` instances have stable dimensions or an aspect-ratio parent, no new remote images were added, no `<a><button>` or `<button><a>` nesting remains, and all external new-tab links include `rel="noreferrer"`.

- [ ] **Step 4: Commit audit fixes**

```bash
git add .
git commit -m "fix: polish portfolio accessibility and responsiveness"
```

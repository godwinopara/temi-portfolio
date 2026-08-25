# Press-first portfolio redesign

## Goal

Rebuild the existing Temitope Oladokun portfolio as an editorial, press-first marketing site that makes it easy for event bookers and journalists to understand the speaker's expertise, see proof of work, and start an email conversation.

## Audience and primary action

- Primary audience: press and event bookers.
- Secondary audience: prospective consulting clients.
- Primary conversion: an explicit `mailto:techiegeeksinternational@gmail.com` link labelled for speaking and press enquiries.
- No contact form or media-kit download is in scope.

## Visual direction

Use the approved **editorial humanist** direction:

- warm cream background, near-black reading text, moss-green interactive states, and a restrained terracotta accent;
- high-contrast serif for display headings paired with a legible sans-serif for navigation and body copy;
- subtle section folios, fine divider rules, asymmetrical desktop composition, and deliberate image crops;
- restrained CSS motion only, with equivalent static presentation when `prefers-reduced-motion: reduce` is set.

The result must feel assured, human, and contemporary. It must not use generic AI gradients, heavy glass effects, or animation that obscures content.

## Information architecture

### Homepage

1. Press-oriented hero with a direct email CTA.
2. Speaking-topic overview for booking context.
3. Two featured talks selected from existing talk content.
4. Selected work/projects.
5. One featured article selected from existing writing.
6. Compact biography and a repeated email CTA.
7. Footer with key links and contact information.

### Existing routes

Retain and restyle `/about`, `/projects`, `/talks`, `/articles`, and `/contact`. Each route uses the new global type, color, layout, interaction, and card conventions. The contact route exposes a mail link instead of relying on an unimplemented form.

## Technical architecture

- Add a central `content/portfolio.js` module for project, talk, article, navigation, and contact content.
- Replace repeated hard-coded home-page arrays with data-driven shared editorial card components.
- Introduce shared `SiteHeader`, `SiteFooter`, `SectionHeading`, `ContactCta`, and card primitives as appropriate to keep every route consistent.
- Preserve Next.js pages routing and use `next/image` for local media with dimensions or fill containers that reserve space.
- Use CSS variables in the global stylesheet as the sole runtime source for palette, spacing, shape, and motion tokens. Create a project-root `DESIGN.md` at implementation time that documents the approved durable visual system and maps to those CSS variables.

## Accessibility and responsive behavior

- Meet WCAG 2.2 AA for contrast, semantics, keyboard access, visible focus, and non-color status cues.
- Include a skip link and one `h1` per route.
- Use native anchors for navigation and direct email; use native buttons for the mobile-menu trigger.
- Close the mobile menu via its trigger and Escape; preserve its accessibility state with `aria-expanded` and `aria-controls`.
- Provide useful alt text and avoid text baked into image assets.
- Design from narrow screens upward; preserve readable line length, 44px minimum target areas, and stable image geometry.

## Performance and metadata

- Use responsive Next.js image sizing, avoid unnecessary client-side JavaScript, and reserve media space to prevent CLS.
- Prefer CSS-only micro-interactions and respect reduced-motion preferences.
- Replace generic route titles/descriptions with descriptive portfolio metadata.
- Keep external links safe with `target="_blank"` plus `rel="noreferrer"` where a new tab is required.

## Verification

- Run lint and production build.
- Exercise the redesigned homepage and an interior route at narrow mobile and desktop widths.
- Verify direct email CTAs, external links, menu keyboard behavior, focus visibility, and reduced-motion behavior.
- Run the frontend-design-premium static audit and resolve blocking findings that apply to this marketing site.

## Scope boundaries

- No CMS, backend, analytics, contact-form submission, or media-kit generation.
- Existing factual content and external links remain the source of truth unless a clear typo is encountered while moving it into central content data.

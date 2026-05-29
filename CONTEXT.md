# Context

Glossary of canonical terms for this codebase. No implementation details — just names and what they mean.

---

## Case Study

A documented piece of work Leo shipped professionally, stored under `content/work/`. Each one describes the problem, Leo's role, what was built, and the outcome. Distinct from side projects or open-source contributions. Referenced in navigation as "Work" (URL/UX convention), but always called a **Case Study** in prose and code logic.

## Post

A piece of writing under `content/blog/`. No constraints on length or formality — can be a short opinion or a long technical essay. Referenced in navigation as "Blog" (URL/UX convention), but always called a **Post** in prose and code logic.

## Resume

The structured data source (`public/data.json`) containing Leo's name, title, experience, skills, education, and languages. Consumed site-wide via `useResumeData()`. Distinct from the narrative prose on the About page — the Resume is the raw facts; the About page is the human story built on top of them.

## Reveal

A scroll-triggered entrance animation: an element fades and rises into view as the user scrolls past it. Coordinated via `useReveal()`. The base primitive for all scroll-driven motion on the site.

## Hero Entrance

The sequenced load animation that plays on first render — staggered word reveals, subtitle fade-in, scroll hint. Specific to page headers; distinct from a Reveal in that it fires immediately on mount, not on scroll.

## Curtain

The full-viewport accent-coloured panel that sweeps left-to-right across the screen on every route change, masking the transition between pages. Defined in `layouts/default.vue`.

## Featured

A manually curated flag (`featured: true` in frontmatter) that marks a Case Study for display on the homepage. Not based on recency or impact score — Leo picks the 2–3 that best represent him at any given time. The full set is always available at `/work`.

## Narrative

The first-person prose on the About page that tells the human story behind the Resume. Three paragraphs covering origin, bias, and working style. Editorially authored — not derived from `data.json`. Complements the Resume (facts) but is intentionally distinct from it.

## Token System

The six semantic colour and typography tokens that all component styles must use. Colour tokens: `ink` (text), `canvas` (background), `accent` (electric blue, `#0001dc`), `muted` (secondary text), `border`, `tertiary`. Typography tokens: `font-display` (Syne), `font-body` (Inter), `font-mono` (JetBrains Mono). Raw hex values and system font names must not appear directly in component code — always reference a token.


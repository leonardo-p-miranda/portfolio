# ADR 0001 — Resume data lives in `public/data.json`, not Nuxt Content

**Status:** Accepted

## Context

The site has two content systems: Nuxt Content (for Case Studies and Posts, which have markdown bodies) and a plain JSON file (`public/data.json`, consumed via `useResumeData()`) for the Resume. The question arose whether to unify everything under Nuxt Content for consistency.

## Decision

Keep the Resume in `public/data.json` as a directly-imported JS module.

## Reasons

- **Resume data is structured, not prose.** Nuxt Content is optimised for markdown with frontmatter. The Resume is nested arrays of typed objects (experience, skills, education) — JSON is the right format.
- **Synchronous access.** `useResumeData()` is a plain import, usable anywhere without `useAsyncData()` wrappers. The Resume is needed on multiple pages (About, Footer); async querying on each would add boilerplate for no benefit.
- **TypeScript inference.** A direct JSON import gives full type inference. Nuxt Content returns `ParsedContent`, which is loosely typed and would require manual type assertions.

## Consequences

Two content systems coexist intentionally: Nuxt Content for prose (Case Studies, Posts), `data.json` for structured data (Resume). A future AI or developer should not "fix" this by unifying them — the split is load-bearing.

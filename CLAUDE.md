# CLAUDE.md

Project context for Claude Code. Read this before touching anything.

---

## What this is

Leo Miranda's personal portfolio — a statically generated Nuxt 3 site with Nuxt Content for Case Studies and Posts, and a plain JSON Resume. Deployed manually to GitHub Pages via the `docs/` folder on `master`.

## Key commands

```bash
npm run dev        # local dev server
npm run deploy     # generate → copy to docs/
```

After `npm run deploy`, commit `docs/` as `chore(docs): rebuild static output` and push `master`. That's the full deploy.

## Content locations

| Type | Location | System |
|---|---|---|
| Case Studies | `content/work/*.md` | Nuxt Content |
| Posts | `content/blog/*.md` | Nuxt Content |
| Resume | `public/data.json` | Direct JSON import |

See `CONTEXT.md` for canonical term definitions. See `docs/adr/` for non-obvious architectural decisions.

---

## Rules

### Never edit `docs/` directly

`docs/` is generated output. Every file in it is wiped and replaced on the next deploy. Any manual edit will be silently destroyed.

### Don't reword portfolio copy

The hero tagline, Narrative paragraphs, and Case Study prose are Leo's voice. Fix typos if asked. Never reword for "clarity", "concision", or any other reason without an explicit instruction to do so.

### Don't simplify animation values

Durations, eases, and stagger increments in `useReveal.ts`, `plugins/lenis.client.ts`, and page `onMounted` blocks are deliberate. They are not magic numbers — see ADR 0003 for why GSAP is here. When touching nearby code, leave all animation parameters exactly as they are unless the task is specifically about animation.

### Commit style

Conventional commits: `feat(scope):`, `fix(scope):`, `chore(scope):`, `style(scope):`, `content(scope):`, `refactor(scope):`. Scope is optional but preferred. No `Co-Authored-By` lines. Build artifact commits (`chore(docs): rebuild static output`) are separate from source commits.

### Token system

All colours and fonts must reference a CSS token (`ink`, `canvas`, `accent`, `muted`, `border`, `tertiary`, `font-display`, `font-body`, `font-mono`). No raw hex values or font names in component code.

# ADR 0002 — Static output committed to `docs/` on `master`

**Status:** Accepted

## Context

GitHub Pages can be served from: a dedicated `gh-pages` branch, a `docs/` folder on `master`, or a CI/CD pipeline (Vercel, Netlify, GitHub Actions). The project needed a deployment strategy for a manually-deployed static portfolio with no automation pipeline.

## Decision

Generate the static output locally, copy it into `docs/`, commit `docs/` to `master`, and push. GitHub Pages is configured to serve from `docs/` on `master`.

## Reasons

- **No CI/CD.** There are no GitHub Actions workflows. All deploys are manual (`npm run deploy`) from the local machine. With no pipeline, there's no natural place for a branch-push step.
- **Single source of truth.** Source and built output live together on one branch. No orphan `gh-pages` branch to reason about or keep in sync.
- **Cost.** GitHub Pages on a personal repo is free with no build-minute limits. Vercel/Netlify free tiers require repo connections and have constraints that add no value for an infrequent-deploy personal site.

## Consequences

- `docs/` bloats every `git clone` and the commit history mixes source changes with build artifacts — this is an accepted trade-off.
- The `gh-pages` npm package in `dependencies` and the `gh-pages -d docs` call at the end of the deploy script are **vestigial** — they push to a `gh-pages` branch that GitHub Pages ignores. They can be removed without affecting the live site.
- A future AI or developer should not attempt to "fix" this by adding CI/CD or switching to a `gh-pages` branch — the current approach is intentional. To change deployment strategy, update the GitHub Pages source setting first.

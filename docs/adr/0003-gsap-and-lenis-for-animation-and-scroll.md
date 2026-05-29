# ADR 0003 — GSAP and Lenis for animation and scroll

**Status:** Accepted

## Context

The site has a choreographed motion system: a sequenced Hero Entrance on load, scroll-triggered Reveals on every section, a split-lag custom cursor, and a Curtain page transition. The question was whether CSS transitions and native scroll could cover these needs, avoiding ~309KB of runtime JS.

## Decision

Use GSAP for all animation and Lenis for smooth scroll, integrated via a shared RAF loop.

## Reasons

**Why not CSS transitions:**

1. **Timeline overlap.** The Hero Entrance chains label → title → subtitle → hint → badge with `-=0.2` / `-=0.3` offsets, so animations overlap mid-flight. CSS has no equivalent — you'd need manual `animation-delay` arithmetic with no overlap control.
2. **Split-lag cursor.** `quickTo(outer, 'x', { duration: 0.55 })` and `quickTo(dot, 'x', { duration: 0.1 })` give the outer ring and dot different inertia on every frame. CSS `transition` on a JS-set property degrades badly under fast movement; `quickTo` is built for per-frame position interpolation.
3. **ScrollTrigger positional control.** `start: 'top 82%'` is a spatial threshold, not a visibility toggle. IntersectionObserver + CSS class would approximate it but cannot express a fractional viewport offset without manual threshold math.

**Why not native scroll:**

Lenis ties its scroll position to the same RAF loop that ScrollTrigger reads. Native scroll fires events in browser-controlled chunks (especially macOS inertia scroll), causing ScrollTrigger's trigger calculations to stutter. Lenis normalises the position stream into a smooth per-frame value — that's the load-bearing reason, not the easing curve.

## Consequences

- GSAP adds ~309KB to the bundle (gzipped: ~116KB). This is accepted given the motion requirements above cannot be replicated with CSS alone.
- All animation must go through `useReveal()` or explicit GSAP calls — do not introduce CSS `transition`/`animation` for entrance effects, as they will conflict with GSAP's opacity/transform control.
- Lenis must remain in the RAF loop (`lenis.client.ts`) for ScrollTrigger to work correctly. Do not remove or replace it with native scroll without auditing every `scrollTrigger` usage.

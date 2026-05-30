---
title: How This Portfolio Was Built
slug: how-this-portfolio-was-built
date: 2026-05-29
summary: From a broken npm install to a full redesign in a single session. The decisions behind the stack, the design, and the content strategy for this site.
readingTime: 4 min
---

Most portfolio posts are tutorials. This one is a decisions log.

I recently rebuilt this site from scratch. The old version was a single-page scroll with a `data.json` driving everything, built with Nuxt 3 and Tailwind. It worked. It just didn't say anything interesting about me.

Here's how the new one came together.

## Starting with the right questions

Before writing a line of code, I spent time answering the hard questions: Who is this for? What does it need to do? What should it feel like?

The answers shaped everything:

The site has a dual job. It needs to convert hiring managers (scannable, credible, fast to the point) and build a presence for anyone who finds it organically. Those two goals can conflict. The resolution is to let the design and execution be the brand signal, while the information architecture stays recruiter-legible.

The aesthetic direction came from a reference-gathering pass before touching any code. The process was simple: collect 15-20 portfolios that made me stop scrolling, then identify what they had in common.

A few that stuck:

**[Bradley Ziffer](https://bradleyziffer.com)** for the editorial confidence. Clean white space, strong type hierarchy, nothing decorative for its own sake. The kind of site where the restraint is the statement.

**[Irakli Sadgobelashvili](https://www.iraklis.work)** (found via Framer's community showcase) for the motion language. Scroll-driven reveals that feel inevitable rather than flashy. The cursor, the page transitions, the way each section earns attention rather than demands it.

**[Paco Coursey](https://paco.me)** for typographic discipline. Design engineer at Linear, formerly Vercel. His site has essentially no decoration — the type does everything. A useful counterweight when you're tempted to add one more visual element.

**[Rauno Freiberg](https://rauno.me)** for interaction detail. Staff design engineer at Vercel. Every hover state and transition feels considered. His writing on interaction design ("Invisible Details of Interaction Design") is worth reading before you touch a single GSAP tween.

And yes, **[Bruno Simon](https://bruno-simon.com)** is always on the reference list. A portfolio where you drive a toy car through a 3D world to see the work. Genuinely one of the most memorable things on the web. I would have done the same, but I don't have the gamedev skills.

The pattern across the rest of them: light backgrounds, one strong accent used sparingly, large type with real weight, and animation that respects the reader's attention.

The result for this site: white background, Syne for display type, Inter for body, one accent color (`#0001dc`), and GSAP-driven reveals that earn attention rather than demand it.

## The stack

**Nuxt 3** was already there and there was no reason to change it. Good SSG support, `@nuxt/content` for markdown, file-based routing that maps cleanly to the page structure I wanted.

**GSAP + Lenis** handle all animation and scroll. Lenis gives the smooth scroll physics. GSAP drives the rest: staggered name reveal on the hero, strikethrough animation on the title, scroll-triggered section reveals, and the `#0001dc` curtain wipe between pages. The cursor is a lagging circle built with GSAP's `quickTo`.

**Tailwind** for styling. The constraint of utility classes forces decisions that scoped CSS lets you defer. Combined with CSS custom properties for design tokens, changing the accent color is a one-line edit.

**`@nuxt/content`** for blog posts and case studies. Markdown files in the repo, queried and rendered by Nuxt. No CMS dashboard, no external service. PostHog wrote a good piece on why GitHub makes a surprisingly good CMS. The short version: your content workflow is just git, which is a workflow you already know.

## The content structure

The hybrid page structure (home highlights + deep-dive pages) was a deliberate choice over a single long scroll. It means:

- The home page is a strong first impression, not a CV dump
- Case studies get real estate to tell a story
- The blog has a home that isn't buried

Structured data (experience, skills, education) lives in `data.json`. Long-form content (case studies, blog posts) lives in `content/` as markdown. The split made sense: tabular data is the right shape for JSON, documents are the right shape for markdown.

## What I'd do differently

The `@nuxt/content` query API has some rough edges around sorting. I ended up adding an explicit `order` field to frontmatter because alphabetical filename ordering isn't relevance ordering. Small thing, slightly annoying.

The full mobile parity decision (vs graceful degradation for animations) added build time. Worth it for the end result, but not a decision to make casually.

## The positioning question

The most important work wasn't technical. It was figuring out what the site should actually say.

The old site called me a "Senior Fullstack Developer." That's accurate but inert. The new site calls me a "Senior Product Engineer" and the hero animation fades that back to reveal "builder." The tagline is "I build things that work — and prove that they do." A word and a sentence, both actually true about how I work.

Getting that right took longer than the GSAP animations.

The code is on [GitHub](https://github.com/leonardo-p-miranda/portfolio) if you want to poke around.

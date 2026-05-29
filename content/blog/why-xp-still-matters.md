---
title: Why XP Still Matters (And Why Most Teams Get It Wrong)
slug: why-xp-still-matters
date: 2025-01-15
summary: Extreme Programming gets dismissed as a relic, but the teams I've worked with that actually practice it (really practice it) consistently ship better software. Here's what that actually looks like.
readingTime: 5 min
---

Extreme Programming has a branding problem.

The name sounds like something from a Mountain Dew ad circa 2001. When you tell people you practice XP, they either think you mean Windows XP or assume you're describing a watered-down version of Scrum with some pair programming bolted on.

The teams I've seen do XP badly outnumber the ones doing it well by a wide margin. But the ones doing it well (genuinely well) are some of the most effective engineering environments I've been part of.

Here's what actually separates the two.

## The mistake: treating XP as a checklist

Most teams that claim to do XP are actually doing a subset of the practices, divorced from the values that make them coherent. They do standups (communication ✓), they pair sometimes (pair programming ✓), they write tests after the fact (TDD ✓, sort of), and they call it done.

This misses the point entirely.

XP's practices are load-bearing against each other. TDD without pairing means the tests tell you one person's mental model of the code. Pairing without shared ownership means you're just watching each other write bad code. Continuous integration without small releases means you're integrating a big mess frequently.

The practices are a system. Pull one out and the rest weaken.

## What real XP actually looks like

The best XP team I worked with had a few things in common that I didn't fully appreciate until I'd been away from it for a while:

**The feedback loops were genuinely short.** Not "we ship every two weeks" short. More like "we know within an hour whether this was a good idea" short. Tests ran in under a minute. Pairs rotated frequently enough that no single person could bury something. Code review happened in real time, not asynchronously.

**Collective ownership was taken seriously.** Anyone could change any file. This sounds chaotic and initially feels that way. What it actually does is prevent the hoarding of context. Nobody becomes the sole owner of a module, which means nobody becomes the bottleneck for understanding it.

**The simplest thing that could possibly work was the goal.** Not the most elegant thing. Not the most future-proof thing. The simplest thing. Then they'd look at it together and ask if it was actually too simple. Usually it wasn't.

## Why it still matters

We live in an era of AI-assisted coding, enormous codebases, and distributed teams. The instinct is to reach for more tooling, more process, more documentation to deal with the complexity.

XP's answer is the opposite: reduce the surface area. Write less code, but know it better. Ship sooner, but test more. Own the whole codebase, but together.

That discipline (the refusal to let complexity accumulate) is harder than it sounds. It requires constant social negotiation, a shared commitment to quality that has to be actively maintained, and a willingness to slow down briefly in order to go faster for longer.

Most teams don't want to pay that cost. The ones that do tend to build things that last.

---

*I've worked with XP teams at O Novo Mercado and FIT. Both experiences shaped how I think about software quality and delivery speed. I'm happy to talk shop. [Reach out](/contact) if you want to compare notes.*

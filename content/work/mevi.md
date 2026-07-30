---
order: 0
title: Clinic Management SaaS
slug: mevi
company: Mevi
role: Founder & Principal Engineer
stack: ["Rails 8", "Vue 3", "Inertia.js", "PostgreSQL", "Kamal"]
duration: Aug 2025 – Present
demoUrl: https://mevi.pro/
featured: true
summary: A Brazilian SaaS for medical clinic management, built end to end. Scheduling, electronic medical records, care orchestration, patient self-booking and subscription billing, on a multi-tenant Rails 8 monolith with clinical data strictly scoped per organization.
---

## The Problem

Brazilian medical clinics run on a patchwork: one tool for the calendar, another for records, a spreadsheet for billing, WhatsApp for everything else. Nothing talks to anything. And clinical data carries LGPD obligations that most of that patchwork quietly ignores.

## My Role

Founder and Principal Engineer. Product, architecture, implementation, deploys. Every decision is mine, which means every decision has to be one I can still defend a year from now.

## What I Built

**Multi-tenant core**

A Rails 8 monolith with PostgreSQL Row-Level Security. Tenant scoping lives in the database, not in application code, so a forgotten `where` clause can't leak one clinic's patients into another's. An in-database transactional event bus keeps side effects consistent with the writes that triggered them.

**Server-driven SPA**

Inertia.js with Vue 3 and TypeScript. No separate API layer to keep in sync, no duplicated validation, but still a fully typed frontend on a shadcn-based design system. The stack most people reach for here would have been two codebases; this is one.

**The product surface**

Scheduling, electronic medical records, care orchestration, patient self-booking, subscription billing. All of it in one place because that's the entire point.

**Deploys**

Kamal, single command, database provisioning through zero-downtime container swap. Shipping should not be an event.

## Engineering Approach

Every non-obvious decision is written down as an ADR — 24 and counting — and the domain is backed by 170+ RSpec suites. Not for ceremony. A solo founder's codebase has no one to ask, so the codebase has to answer for itself. That turned out to matter twice over: it's what makes the project navigable for AI agents too.

## Outcome

In production and running clinics. Still the codebase I reach for when I want to show what I actually think good software looks like.

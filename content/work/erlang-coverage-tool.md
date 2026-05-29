---
order: 3
title: Branch Coverage for the Erlang VM
slug: erlang-coverage-tool
company: UFMG × Dashbit
role: Research Developer
stack: ["Elixir", "Erlang", "BEAM VM", "Compiler Engineering"]
duration: Feb 2022 – Feb 2023
demoUrl: https://dcc.ufmg.br/compiladores/
featured: true
cover: /assets/img/work/erlang-cover.jpg
summary: A year at the compiler level. Built branch coverage tooling for the Erlang VM in collaboration with José Valim (creator of Elixir) and the Dashbit team, extending ExCoveralls to track branch-level execution paths across Elixir production codebases worldwide.
---

## The Problem

Erlang and Elixir had line coverage tooling. They didn't have branch coverage: the ability to know *which conditional paths* in your code were actually exercised by tests. For safety-critical and high-reliability BEAM systems, that's a significant blind spot.

## My Role

Research Developer at UFMG's LAC, in a formal partnership with Dashbit, the company behind Elixir's commercial ecosystem, led by José Valim (Elixir's creator). I designed and implemented the coverage system, working directly with the Elixir core team throughout.

## What We Built

**Erlang Branch Coverage**

AST-level instrumentation using compile-time transforms. The system tracks which branches (if/case/receive clauses) are and aren't visited during test runs, reporting missed branches without meaningful runtime overhead.

**Elixir Extension**

Ported and adapted the approach to Elixir's macro system, which required understanding how Elixir expands to Erlang Core before compilation. Integrated with ExCoveralls and Mix, surfacing coverage gaps inline with existing test output.

**Production reach**

The tooling extended ExCoveralls, used across Elixir production codebases worldwide, to track branch-level execution paths rather than just line-level.

## Engineering Approach

This was compiler work. I spent significant time reading Erlang/OTP source, attending calls with the Elixir core team, and iterating on instrumentation approaches to avoid false negatives in complex pattern-matching branches. It required a level of care about correctness that I've carried into every codebase since.

## Outcome

Working branch coverage tooling for both Erlang and Elixir, integrated with the existing test ecosystem. Presented at UFMG and shared with the Elixir and Erlang communities. A small contribution to the reliability of production BEAM systems everywhere.

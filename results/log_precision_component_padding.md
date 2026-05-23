---
title: Log-Precision Component Padding
type: result
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 6, Lemmas 3-4
aliases:
  - Lemma 3
  - Lemma 4
assumptions:
  - transformer-classifier
  - log-precision
  - fixed-parameters
  - log-uniform-tc0
depends_on:
  - ../objects/log_uniform_tc0.md
---

# Log-Precision Component Padding

For a fixed-parameter log-precision transformer, there is a function $bsize(n)$ such that:

- $bsize(n)$ is a power of $2$,
- $bsize(n)$ is computable in $O(\log n)$ time,
- every component circuit has size at most $bsize(n)$.

If a log-uniform $\mathrm{TC}^0$ family has size at most $bsize(n)$, it can be padded to exactly $bsize(n)$ without changing the computed function.

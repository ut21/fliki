---
title: First-Order Logic with Majority
type: logic
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 2.2, Definitions 3-4
aliases:
  - FO(M)
  - first-order logic with majority quantifiers
related:
  - log_uniform_tc0.md
---

# First-Order Logic with Majority

FO(M) is first-order logic over string positions with majority quantifiers.

## Indices

Indices range over input positions $1,\ldots,n$ and include:

- $1$,
- $n$,
- variables such as $i,j,k$,
- sums and differences of indices.

## Atomic formulas

- $\sigma(i)$: position $i$ contains token $\sigma$.
- $\operatorname{bit}(i,j)$: the $j$-th bit of $i$ is $1$.
- $i=j$, $i\le j$, and $i<j$.

## Quantifiers

For formula $\varphi$:

- $\exists i.\varphi$,
- $\forall i.\varphi$,
- $Mi.\varphi$, true iff $\varphi$ holds for at least half of positions.

FO(M) can express counting and threshold quantifiers.

## Circuit characterization

FO(M) corresponds to log-uniform $\mathrm{TC}^0$.

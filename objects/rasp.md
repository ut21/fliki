---
title: RASP
type: object
paper: Weiss, Goldberg, and Yahav, "Thinking Like Transformers", ICML 2021
source: Section 2
aliases:
  - Restricted Access Sequence Processing
  - s-op
  - selector
related:
  - ../objects/self_attention.md
  - ../objects/feed_forward_network.md
---

# RASP

**RASP** (Restricted Access Sequence Processing) is a programming language whose primitives correspond to transformer operations. A RASP program computes a sequence-to-sequence function.

## Primitives

The input sequence of length $n$ is accessed via two built-in s-ops:

- `tokens`: the input symbols $x_1, \ldots, x_n$.
- `indices`: the positions $1, \ldots, n$.

## S-ops

An **s-op** is a sequence $f : [n] \to D$ for some domain $D$. S-ops are composed by:

- elementwise arithmetic and boolean operations,
- `length`: the constant sequence $n, \ldots, n$,
- `aggregate(sel, v, default)`: for each query position $i$, returns the average of $v_j$ over $j$ where $\mathrm{sel}[i,j] = 1$, or `default` if no $j$ selects.

## Selectors

A **selector** is a boolean matrix $S : [n] \times [n] \to \{0,1\}$ defined by a comparison between two s-ops:

$$
S[i,j] = (f(i) \;\mathtt{op}\; g(j))
$$

for $\mathtt{op} \in \{=, <, \leq, \neq, \ldots\}$. Selectors compose via boolean operations.

## Correspondence to transformers

Each `aggregate` corresponds to one attention head, and selector composition corresponds to score computation. A $d$-layer RASP program corresponds to a depth-$d$ transformer.

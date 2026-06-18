---
title: Parity via Hard Attention
type: result
paper: Chiang and Cholak, "Overcoming a Theoretical Limitation of Self-Attention", ACL 2022
source: Section 4, Theorem 1
aliases:
  - Theorem 1
  - parity by transformer
  - hard attention parity
assumptions:
  - hardmax-attention
depends_on:
  - ../objects/hardmax.md
  - ../results/hahn_sensitivity_bound.md
---

# Parity via Hard Attention

## Statement

There exists a transformer with hard (argmax) attention that recognizes

$$
\mathrm{Parity} = \{w \in \{0,1\}^* : \#_1(w) \equiv 0 \pmod{2}\}.
$$

## Significance

This directly refutes the applicability of the [Hahn sensitivity bound](hahn_sensitivity_bound.md) to hard-attention transformers: the bound requires softmax attention, and the construction here uses argmax.

## Construction sketch

Let $n$ be the input length. One head computes the prefix sum $s_i = \sum_{j \le i} x_j$ at each position $i$ by using hard attention to retrieve $s_{i-1}$ and adding $x_i$ in the feed-forward layer (inductively). The final state $s_n \bmod 2$ gives the parity bit.

Alternatively, a single head attending to the rightmost 1 and carrying a running parity suffices with $O(1)$ heads and layers.

## Model

The construction uses:

- Hard (argmax) attention with a consistent tie-breaking rule.
- $O(1)$ layers and heads.
- Parameters independent of input length $n$.

---
title: Quadratic Time Upper Bound
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 4, Theorem 3
aliases:
  - Theorem 3
  - time upper bound
  - CoT time simulation
depends_on:
  - ../objects/cot_decoding_class.md
  - ../objects/log_precision_transformer.md
---

# Quadratic Time Upper Bound

## Statement

For transformer decoders with $t(n)$ intermediate decoding steps,

$$
\operatorname{CoT}(t(n))
\subseteq
\widetilde{\operatorname{TIME}}(n^2+t(n)^2).
$$

Here

$$
\widetilde{\operatorname{TIME}}(g(n))
$$

denotes time $g(n)\operatorname{polylog}(n)$.

## Simulation

A multitape Turing machine simulates each transformer forward pass. For each position $i$, it loops over the $n+t(n)$ prior key-value pairs to compute attention.

There are

$$
n+t(n)
$$

forward passes and each pass scans at most

$$
n+t(n)
$$

key-value pairs, giving

$$
O(n^2+t(n)^2)
$$

inner loop calls.

With log precision, each arithmetic inner loop costs polylogarithmic time.

---
title: Finite Precision Attention Sparsity
type: result
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 3, Proposition 1
aliases:
  - Proposition 1
  - finite precision cannot attend universally
assumptions:
  - finite-precision
  - transformer-classifier
depends_on:
  - ../objects/finite_precision_transformer.md
  - ../objects/uniform_attention.md
---

# Finite Precision Attention Sparsity

Let $a\in\mathbb{R}^n$ satisfy

$$
\sum_{i=1}^n a_i=1,
$$

and let $\tilde a$ be its nearest $p$-precision float approximation.

Then $\tilde a$ has at most

$$
2^{2^p}
$$

nonzero entries.

## Uniform attention

If

$$
p < \log\log n
$$

and $a_i=1/n$, then

$$
\tilde a=\vec 0.
$$

Thus fixed-precision transformers cannot represent uniform attention over arbitrarily long contexts.

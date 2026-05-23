---
title: Uniform Attention
type: attention-pattern
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 3, Proposition 1
aliases:
  - universal attention
related:
  - self_attention.md
  - finite_precision_transformer.md
---

# Uniform Attention

Uniform attention assigns each of $n$ positions weight

$$
\frac{1}{n}.
$$

It is a broad-attention primitive used for counting, majority votes, and global aggregation.

Finite precision cannot represent uniform attention over arbitrarily long contexts.

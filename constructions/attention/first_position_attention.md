---
title: First-Position Attention
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.2"
depends_on:
  - uniform_average_attention.md
  - ../feedforward/comparator_ffns.md
---

# First-Position Attention

Given positional encoding $(-1)^i$, construct

$$
\operatorname{first}((-1)^1,
\ldots,(-1)^n)=(1,0,
\ldots,0).
$$

Use future-masked uniform attention with

$$
W^{(Q)}=0,
\qquad
W^{(K)}=0,
\qquad
W^{(V)}=-I.
$$

The first position outputs $1$. Positions $i>1$ output at most $1/3$. Apply a comparator thresholding at $1/3$ to obtain the indicator of $i=1$.

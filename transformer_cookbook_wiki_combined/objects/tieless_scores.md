---
title: Tieless Attention Scores
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 5.2"
depends_on:
  - hardmax.md
---

# Tieless Attention Scores

For $s\in\mathbb{R}^n$, let

$$
M=\max_i s_i.
$$

The vector $s$ is **tieless** if

$$
|\{i:s_i=M\}|=1.
$$

It has **gap** $\gamma>0$ if for all $i$ with $s_i\ne M$,

$$
s_i\le M-\gamma.
$$

For tieless scores,

$$
\operatorname{lhardmax}(s)
=
\operatorname{rhardmax}(s)
=
\operatorname{ahardmax}(s).
$$

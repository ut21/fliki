---
title: Error Analysis of Attention
type: result
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Proposition 7.3"
depends_on:
  - ../objects/self_attention.md
---

# Error Analysis of Attention

If

$$
\|x\|\le X,
\qquad
\|\hat x-x\|\le \delta\le 1,
$$

and $\operatorname{sa}$ is a self-attention layer, then there exists a constant $K$ such that for all positions $i$,

$$
\|[\operatorname{sa}(\hat x)]_i-[\operatorname{sa}(x)]_i\|
\le
K\delta.
$$

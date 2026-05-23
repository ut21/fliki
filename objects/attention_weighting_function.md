---
title: Attention Weighting Function
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5"
related:
  - hardmax.md
---

# Attention Weighting Function

An attention weighting function is a length-preserving map

$$
S:\mathbb{R}^+\xrightarrow{\mathrm{lp}}\mathbb{R}^+
$$

that maps attention scores $s_{i,*}$ to attention weights $\alpha_{i,*}$.

## Softmax

$$
[\operatorname{softmax}(s_1,
\ldots,s_n)]_j
=
\frac{e^{s_j}}{\sum_{k=1}^n e^{s_k}}.
$$

## Hard attention variants

See [Hardmax](hardmax.md).

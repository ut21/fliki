---
title: Error Analysis of Residual Connections
type: result
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Proposition 7.4"
depends_on:
  - ../objects/residual_stream.md
---

# Error Analysis of Residual Connections

If

$$
\|\hat x-x\|\le \delta,
$$

$$
f:\mathbb{R}^d\to\mathbb{R}^d,
\qquad
\|f(\hat x)-f(x)\|\le \epsilon,
$$

then

$$
\|f(\hat x)+\hat x-(f(x)+x)\|
\le
\epsilon+
\delta.
$$

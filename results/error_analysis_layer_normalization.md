---
title: Error Analysis of Layer Normalization
type: result
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Proposition 7.5"
assumptions:
  - standard-layer-normalization
  - epsilon-positive-layer-norm
depends_on:
  - ../objects/standard_layer_normalization.md
---

# Error Analysis of Layer Normalization

If

$$
\|x\|\le X,
\qquad
\|\hat x-x\|\le \delta\le 1,
$$

and $\operatorname{LN}$ is layer normalization with

$$
\epsilon>0,
$$

then there exists a constant $K$ such that

$$
\|\operatorname{LN}(\hat x)-\operatorname{LN}(x)\|
\le
K\delta.
$$

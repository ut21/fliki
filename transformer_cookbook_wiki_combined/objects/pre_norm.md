---
title: Pre-Norm
type: transformer-architecture
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Appendix A.1
aliases:
  - pre-layer-norm
  - pre-LN
related:
  - ../objects/layer_norm.md
  - ../objects/projected_pre_norm.md
---

# Pre-Norm

Let $h\in\mathbb{R}^m$ be a residual-stream vector and let

$$
F:\mathbb{R}^m\to\mathbb{R}^m
$$

be a transformer sublayer.

A pre-norm sublayer has the form

$$
h^+=h+F(\operatorname{LN}(h)).
$$

Thus layer norm is applied before the sublayer.

Standard pre-norm is the special case of [projected pre-norm](projected_pre_norm.md) with projection matrix

$$
M=I_m.
$$

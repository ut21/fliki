---
title: Serial Composition
type: result
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Lemma 8.2"
assumptions:
  - transformer-layer
depends_on:
  - ../objects/transformer_layer.md
---

# Serial Composition

Given two layers

$$
\operatorname{tl}_1,
\operatorname{tl}_2:\mathbb{R}^d\to\mathbb{R}^d,
$$

there is a stacked layer sequence computing

$$
\operatorname{tl}_2\circ\operatorname{tl}_1.
$$

Equivalently, on input $w$, the composition computes

$$
\operatorname{tl}_2(\operatorname{tl}_1(w)).
$$

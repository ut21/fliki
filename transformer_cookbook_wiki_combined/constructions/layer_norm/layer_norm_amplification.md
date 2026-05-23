---
title: Layer-Norm Amplification
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 6.4"
depends_on:
  - ../../objects/standard_layer_normalization.md
  - ../feedforward/cpwl_ffn.md
---

# Layer-Norm Amplification

Let $x\in\mathbb{R}^d$ have zero mean and satisfy

$$
|x_c|\ge \delta
\qquad
\text{for all } c\in[d].
$$

First clip every coordinate to $\{-\delta,+\delta\}$ using a CPWL FFN.

A scalar clipping map is

$$
\operatorname{clip}_\delta(t)=
\operatorname{ReLU}(t+\delta)-\operatorname{ReLU}(t-\delta)-\delta.
$$

Then apply layer normalization with

$$
\epsilon=0,
\qquad
\beta=0,
\qquad
\gamma=1.
$$

The result normalizes clipped coordinates to $\{-1,+1\}$, amplifying a sign signal of magnitude $\delta$ to unit magnitude.

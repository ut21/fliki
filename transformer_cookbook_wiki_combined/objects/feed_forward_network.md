---
title: Feed-Forward Network
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 2.5"
depends_on:
  - relu.md
---

# Feed-Forward Network

A two-layer ReLU feed-forward network is a map

$$
\operatorname{ff}:\mathbb{R}^d\to\mathbb{R}^d.
$$

It is defined by

$$
h=\operatorname{ReLU}(W_1x+b_1),
$$

$$
y=W_2h+b_2.
$$

Parameters:

$$
W_1\in\mathbb{R}^{d_{\mathrm{hid}}\times d},
\qquad
b_1\in\mathbb{R}^{d_{\mathrm{hid}}},
$$

$$
W_2\in\mathbb{R}^{d\times d_{\mathrm{hid}}},
\qquad
b_2\in\mathbb{R}^{d}.
$$

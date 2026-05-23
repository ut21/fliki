---
title: Transformer Layer
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 2.2"
depends_on:
  - self_attention.md
  - feed_forward_network.md
---

# Transformer Layer

A transformer layer is a length-preserving map

$$
\operatorname{tl}:(\mathbb{R}^d)^+\xrightarrow{\mathrm{lp}}(\mathbb{R}^d)^+.
$$

For input $(z_1,
\ldots,z_n)$, define

$$
(\bar c_1,
\ldots,\bar c_n)
=
\operatorname{tl.sa}(z_1,
\ldots,z_n)+(z_1,
\ldots,z_n),
$$

$$
z_i'=
\operatorname{tl.ff}(\bar c_i)+\bar c_i,
\qquad i\in[n].
$$

Thus a layer consists of a self-attention sublayer, a residual connection, a position-wise feed-forward network, and a residual connection.

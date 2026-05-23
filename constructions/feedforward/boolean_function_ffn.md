---
title: Arbitrary Boolean Function by One FFN
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 4.8"
depends_on:
  - ../../objects/boolean_representations.md
  - ../../objects/feed_forward_network.md
---

# Arbitrary Boolean Function by One FFN

For any Boolean function

$$
\varphi:\{0,1\}^m\to\{0,1\},
$$

there is a two-layer ReLU FFN computing $\varphi$ exactly on $\{0,1\}^m$.

Let

$$
\xi_0,
\ldots,
\xi_{2^m-1}\in\{0,1\}^m
$$

be all assignments. Define hidden units

$$
h_k(x)=
\operatorname{ReLU}\left((2\xi_k-1)^\top x-\mathbf{1}^\top\xi_k+1\right).
$$

For Boolean $x$,

$$
h_k(x)=\mathbf{1}[x=\xi_k].
$$

The output is

$$
\sum_{k=0}^{2^m-1}\varphi(\xi_k)h_k(x)=\varphi(x).
$$

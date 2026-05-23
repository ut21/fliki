---
title: Self-Attention Layer
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 2.3"
depends_on:
  - attention_weighting_function.md
---

# Self-Attention Layer

A self-attention layer is a length-preserving map

$$
\operatorname{sa}:(\mathbb{R}^d)^+\xrightarrow{\mathrm{lp}}(\mathbb{R}^d)^+.
$$

It has linear maps

$$
W^{(Q)},W^{(K)}:\mathbb{R}^d\to\mathbb{R}^{d_{\mathrm{key}}},
\qquad
W^{(V)}:\mathbb{R}^d\to\mathbb{R}^d,
$$

and a weighting function

$$
S:\mathbb{R}^+\xrightarrow{\mathrm{lp}}\mathbb{R}^+.
$$

For positions $i,j$,

$$
q_i=W^{(Q)}z_i,
\qquad
k_j=W^{(K)}z_j,
\qquad
v_j=W^{(V)}z_j,
$$

$$
s_{i,j}=\frac{q_i^\top k_j}{\sqrt{d_{\mathrm{key}}}},
\qquad
\alpha_{i,*}=S(s_{i,*}),
$$

$$
c_i=\sum_{j=1}^n \alpha_{i,j}v_j.
$$

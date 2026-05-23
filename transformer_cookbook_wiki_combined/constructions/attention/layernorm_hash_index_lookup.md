---
title: Layernorm-Hash Index Lookup
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.3.3"
depends_on:
  - index_lookup.md
  - ../../objects/layer_norm_hash.md
  - ../../objects/projected_pre_norm.md
---

# Layernorm-Hash Index Lookup

This page reuses the [Layer-Norm Hash](../../objects/layer_norm_hash.md) construction.

Let $\operatorname{lh}(x)$ denote the layernorm hash of an integer $x$. The target is

$$
\operatorname{lhLookup}:(\mathbb{R}^{9})^+\to\mathbb{R}^+,
$$

$$
\operatorname{lhLookup}\left(
\begin{bmatrix}\operatorname{lh}(q_1)\\\operatorname{lh}(1)\\v_1\end{bmatrix},
\ldots,
\begin{bmatrix}\operatorname{lh}(q_n)\\\operatorname{lh}(n)\\v_n\end{bmatrix}
\right)
=
(v_{q_1},
\ldots,v_{q_n}).
$$

Use projections

$$
W^{(Q)}=\begin{bmatrix}I_4&0&0\end{bmatrix},
\qquad
W^{(K)}=\begin{bmatrix}0&I_4&0\end{bmatrix},
\qquad
W^{(V)}=\begin{bmatrix}0&0&1\end{bmatrix}.
$$

The score

$$
s_{i,j}=\operatorname{lh}(q_i)^\top\operatorname{lh}(j)
$$

is uniquely maximized at $j=q_i$.

## Selective layer norm requirement

If the residual stream contains additional coordinates, standard pre-norm normalizes all coordinates. The construction therefore requires applying layer normalization only to selected coordinates, implemented by a pre-LN linear map

$$
y=\operatorname{sa}(\operatorname{LN}(W^{(N)}x))+x.
$$

This is a form of [Projected Pre-Norm](../../objects/projected_pre_norm.md).

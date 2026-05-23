---
title: Boolean Representations
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 3.1"
---

# Boolean Representations

Boolean values may be represented by subsets or points in $\mathbb{R}^d$. Common point encodings include

$$
\mathrm{false}=0,
\qquad
\mathrm{true}=1,
$$

$$
\mathrm{false}=-1,
\qquad
\mathrm{true}=+1,
$$

and the layer-normalization-compatible encoding

$$
\mathrm{false}=\begin{bmatrix}+1\\-1\end{bmatrix},
\qquad
\mathrm{true}=\begin{bmatrix}-1\\+1\end{bmatrix}.
$$

Desired properties include continuous Boolean operations, minimum gap, fixed mean, and fixed variance.

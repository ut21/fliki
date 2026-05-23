---
title: Continuous Piecewise-Linear Function
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 4.1"
aliases: ["CPWL"]
---

# Continuous Piecewise-Linear Function

Let $X\subseteq\mathbb{R}^d$. A function

$$
f:X\to\mathbb{R}
$$

is continuous piecewise-linear if there exist closed polyhedral sets

$$
X_1,
\ldots,X_n\subseteq X
$$

such that

$$
\bigcup_{i=1}^n X_i=X,
$$

and for every $i$, the restriction

$$
f|_{X_i}
$$

is affine.

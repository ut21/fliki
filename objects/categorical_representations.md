---
title: Categorical Representations
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 3.2"
---

# Categorical Representations

For a finite set $C$ with $|C|=k$, a categorical representation is an injective map

$$
\rho:C\to\mathbb{R}^d.
$$

A standard representation is one-hot:

$$
\rho(c_i)=e_i\in\mathbb{R}^k.
$$

This gives orthogonal category vectors:

$$
e_i^\top e_j=\mathbf{1}[i=j].
$$

Width requirement for exact one-hot categories:

$$
d\ge k.
$$

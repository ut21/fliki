---
title: Positive k-Homogeneity
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 6.3"
---

# Positive k-Homogeneity

A function $f$ is positively $k$-homogeneous if, for all $x$ and all $c\ge 0$,

$$
f(cx)=c^k f(x).
$$

A bias-free ReLU FFN is positively $1$-homogeneous.

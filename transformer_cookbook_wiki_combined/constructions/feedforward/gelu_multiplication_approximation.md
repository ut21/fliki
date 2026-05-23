---
title: GELU Multiplication Approximation
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 4.6"
depends_on:
  - ../../objects/gelu.md
---

# GELU Multiplication Approximation

Target map:

$$
\operatorname{mul}:\mathbb{R}^2\to\mathbb{R},
\qquad
\operatorname{mul}(x,y)\approx xy.
$$

Using the second-order expansion of GELU,

$$
\sqrt{\frac{\pi}{2}}
\left(
\operatorname{GELU}(x+y)-\operatorname{GELU}(x)-\operatorname{GELU}(y)
\right)
=
xy+\epsilon(x,y).
$$

The error satisfies

$$
|\epsilon(x,y)|\le \frac{1}{4}(|x|+|y|)^3.
$$

One FFN uses hidden inputs $x+y,x,y$ and output weights proportional to

$$
\sqrt{\frac{\pi}{2}}(1,-1,-1).
$$

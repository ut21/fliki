---
title: GELU
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 4.2"
---

# GELU

The Gaussian error linear unit is

$$
\operatorname{GELU}(x)=x\Phi(x),
$$

where $\Phi$ is the standard normal CDF.

Equivalent form:

$$
\operatorname{GELU}(x)
=
\frac{x}{2}\left(1+\operatorname{erf}\left(\frac{x}{\sqrt 2}\right)\right).
$$

Taylor expansion near zero:

$$
\operatorname{GELU}(z)
=
\frac{z}{2}+\frac{z^2}{\sqrt{2\pi}}+R(z),
\qquad
|R(z)|\le \frac{|z|^3}{6}.
$$

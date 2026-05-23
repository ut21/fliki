---
title: Identity FFN
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 4.3"
depends_on:
  - ../../objects/feed_forward_network.md
---

# Identity FFN

The target map is

$$
\operatorname{id}:\mathbb{R}^d\to\mathbb{R}^d,
\qquad
\operatorname{id}(x)=x.
$$

With a residual connection, the zero FFN realizes identity:

$$
x+0=x.
$$

Without residual connection, for scalar input,

$$
W_1=\begin{bmatrix}1\\-1\end{bmatrix},
\qquad
b_1=0,
\qquad
W_2=\begin{bmatrix}1&-1\end{bmatrix},
\qquad
b_2=0.
$$

Then

$$
\operatorname{ReLU}(x)-\operatorname{ReLU}(-x)=x.
$$

For vector input, apply the scalar construction coordinatewise.

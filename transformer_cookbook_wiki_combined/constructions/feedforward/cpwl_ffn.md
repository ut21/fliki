---
title: CPWL Function by ReLU FFN
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 4.1"
depends_on:
  - ../../objects/continuous_piecewise_linear_function.md
  - ../../objects/feed_forward_network.md
---

# CPWL Function by ReLU FFN

For univariate knots $(x_1,y_1),
\ldots,(x_n,y_n)$, let

$$
m_k=\frac{y_{k+1}-y_k}{x_{k+1}-x_k}.
$$

The continuous piecewise-linear function can be written as

$$
f(x)=y_1+m_1(x-x_1)+\sum_{k=2}^{n}(m_k-m_{k-1})\operatorname{ReLU}(x-x_k).
$$

Thus a two-layer ReLU FFN of hidden dimension $n+1$ computes $f$ exactly.

For multivariate $f:\mathbb{R}^d\to\mathbb{R}$ with $k$ pieces, a ReLU FFN with $O(\log k)$ layers computes $f$ exactly.

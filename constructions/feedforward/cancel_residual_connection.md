---
title: Canceling a Residual Connection
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 4.2"
depends_on:
  - ../../objects/feed_forward_network.md
---

# Canceling a Residual Connection

Given an FFN

$$
f:\mathbb{R}^d\to\mathbb{R}^d,
$$

there exists an FFN $f'$ such that

$$
f'(x)+x=f(x).
$$

If

$$
f(x)=W_2\operatorname{ReLU}(W_1x+b_1)+b_2,
$$

one construction is

$$
f'.W_1=\begin{bmatrix}f.W_1\\ I\\ -I\end{bmatrix},
\qquad
f'.b_1=\begin{bmatrix}f.b_1\\0\\0\end{bmatrix},
$$

$$
f'.W_2=\begin{bmatrix}f.W_2 & -I & I\end{bmatrix},
\qquad
f'.b_2=f.b_2.
$$

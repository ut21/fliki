---
title: Conditional FFN
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 4.9"
depends_on:
  - ../../objects/feed_forward_network.md
  - ../../objects/boolean_representations.md
---

# Conditional FFN

Target map:

$$
\operatorname{if}(p,x,y)=
\begin{cases}
x, & p=1,\\
y, & p=0.
\end{cases}
$$

For $x,y\in[0,1]$ and $p\in\{0,1\}$, one ReLU FFN uses

$$
W_1=\begin{bmatrix}1&1&0\\-1&0&1\end{bmatrix},
\qquad
b_1=\begin{bmatrix}-1\\0\end{bmatrix},
$$

$$
W_2=\begin{bmatrix}1&1\end{bmatrix},
\qquad
b_2=0.
$$

Then

$$
\operatorname{if}(1,x,y)=\operatorname{ReLU}(x)+\operatorname{ReLU}(y-1)=x,
$$

$$
\operatorname{if}(0,x,y)=\operatorname{ReLU}(x-1)+\operatorname{ReLU}(y)=y.
$$

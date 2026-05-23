---
title: Addition and Subtraction FFNs
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 4.5"
depends_on:
  - identity_ffn.md
---

# Addition and Subtraction FFNs

Target maps:

$$
\operatorname{add}:\mathbb{R}^2\to\mathbb{R},
\qquad
\operatorname{add}(x,y)=x+y,
$$

$$
\operatorname{sub}:\mathbb{R}^2\to\mathbb{R},
\qquad
\operatorname{sub}(x,y)=x-y.
$$

For addition,

$$
x+y=
\operatorname{ReLU}(x)-\operatorname{ReLU}(-x)
+
\operatorname{ReLU}(y)-\operatorname{ReLU}(-y).
$$

Subtraction follows by routing the coefficient of $y$ with sign $-1$.

---
title: Comparator FFNs
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 4.7"
depends_on:
  - ../../objects/feed_forward_network.md
  - ../layer_norm/rounding_by_fixed_precision.md
---

# Comparator FFNs

Exact discontinuous comparisons are not continuous piecewise-linear. The cookbook gives ReLU FFNs that approximate threshold predicates with tolerance $\epsilon>0$.

## Fixed-tolerance greater-than-zero

$$
\operatorname{GTZero}_\epsilon(x)=
\begin{cases}
0, & x\le 0,\\
x/\epsilon, & 0<x<\epsilon,\\
1, & \epsilon\le x.
\end{cases}
$$

## Fixed-tolerance greater-or-equal-zero

$$
\operatorname{GEZero}_\epsilon(x)=
\begin{cases}
0, & x\le -\epsilon,\\
1+x/\epsilon, & -\epsilon<x<0,\\
1, & 0\le x.
\end{cases}
$$

## Fixed-tolerance equality-to-zero

$$
\operatorname{EqZero}_\epsilon(x)=
\begin{cases}
0, & |x|\ge \epsilon,\\
1-|x|/\epsilon, & 0<|x|<\epsilon,\\
1, & x=0.
\end{cases}
$$

The constructions are exact away from the gray-zone intervals.

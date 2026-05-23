---
title: Multi-Pre-Norm
type: transformer-architecture
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Appendix A.1, Definition 5
aliases:
  - multi layer norm
  - multiLN
related:
  - ../objects/layer_norm.md
  - ../objects/projected_pre_norm.md
---

# Multi-Pre-Norm

Let $m$ be divisible by $k$. For each $1\le r\le k$, let

$$
M_r:\mathbb{R}^m\to\mathbb{R}^{m/k}
$$

be a projection matrix.

For $v\in\mathbb{R}^m$, define

$$
\operatorname{multiLN}(v;M_1,\ldots,M_k)
=
\left\langle
\operatorname{projLN}(v;M_r)
\right\rangle_{r=1}^k.
$$

Equivalently,

$$
\operatorname{multiLN}(v;M_1,\ldots,M_k)
=
\left\langle
\operatorname{LN}(M_1v),\ldots,\operatorname{LN}(M_kv)
\right\rangle.
$$

Each term lies in $\mathbb{R}^{m/k}$, so the concatenation lies in $\mathbb{R}^m$.

## Result

- [Multi-Pre-Norm Simulation by Projected Pre-Norm](../results/multi_pre_norm_simulation_by_projected_pre_norm.md)

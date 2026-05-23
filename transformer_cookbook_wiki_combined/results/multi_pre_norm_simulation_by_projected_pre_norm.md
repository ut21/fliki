---
title: Multi-Pre-Norm Simulation by Projected Pre-Norm
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Appendix A.1, Proposition 1
attribution: Chiang, 2024
aliases:
  - projected pre-norm simulates multi-pre-norm
  - multi-pre-norm elimination
  - Proposition 1
depends_on:
  - ../objects/layer_norm.md
  - ../objects/pre_norm.md
  - ../objects/projected_pre_norm.md
  - ../objects/multi_pre_norm.md
---

# Multi-Pre-Norm Simulation by Projected Pre-Norm

## Statement

[Multi-pre-norm](../objects/multi_pre_norm.md) with $k$ norms can be simulated by $k+1$ [projected pre-norm](../objects/projected_pre_norm.md) layers.

## Construction

Let the multi-pre-norm layer require input

$$
\left\langle
\operatorname{LN}(M_1v),\ldots,\operatorname{LN}(M_kv)
\right\rangle.
$$

Use $k$ projected pre-norm layers. Layer $r$ receives

$$
\operatorname{projLN}(v;M_r)=\operatorname{LN}(M_rv)
$$

and writes this vector into a disjoint residual-stream block.

After $k$ layers, the residual stream contains

$$
u=
\left\langle
\operatorname{LN}(M_1v),\ldots,\operatorname{LN}(M_kv)
\right\rangle.
$$

A final projected pre-norm layer reads

$$
\operatorname{LN}(u)
=
\frac{1}{\sqrt{k}}
\left\langle
\operatorname{LN}(M_1v),\ldots,\operatorname{LN}(M_kv)
\right\rangle,
$$

since each concatenated block has unit norm.

If the original multi-pre-norm layer applies $W$, use

$$
W'=\sqrt{k}W
$$

in the final projected pre-norm layer.

Padding can make $k$ a perfect square so that $\sqrt{k}$ is exactly representable.

---
title: Projected Pre-Norm
type: transformer-architecture
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Appendix A.1, Definition 4
aliases:
  - projected layer norm
  - proj layer norm
  - projLN
related:
  - ../objects/layer_norm.md
  - ../objects/pre_norm.md
  - ../objects/multi_pre_norm.md
---

# Projected Pre-Norm

Let

$$
M:\mathbb{R}^m\to\mathbb{R}^m
$$

be a parameter matrix.

For $v\in\mathbb{R}^m$, define

$$
\operatorname{projLN}(v;M)
=
\operatorname{LN}(Mv).
$$

A projected pre-norm sublayer may apply layer norm to a linear projection of the residual stream rather than to the full residual stream.

If $M=I_m$, then

$$
\operatorname{projLN}(v;I_m)=\operatorname{LN}(v),
$$

which recovers standard [pre-norm](pre_norm.md).

## Used by

- [Multi-Pre-Norm](multi_pre_norm.md)
- [Multi-Pre-Norm Simulation by Projected Pre-Norm](../results/multi_pre_norm_simulation_by_projected_pre_norm.md)
- [Regular Language Recognition with Linear Decoding](../results/regular_language_recognition_with_linear_decoding.md)
- [Turing Machine Simulation](../results/turing_machine_simulation.md)

---
title: Layer Norm
type: normalization
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 3.1
aliases:
  - layer normalization
  - LN
---

# Layer Norm

Let $x\in\mathbb{R}^m$ and

$$
\bar{x}=\frac{1}{m}\sum_{r=1}^m x_r.
$$

Define

$$
x'=x-\bar{x}\mathbf{1}.
$$

The paper uses

$$
\operatorname{LN}(x)
=
\frac{x'}{\|x'\|}
=
\frac{x-\bar{x}\mathbf{1}}{\|x-\bar{x}\mathbf{1}\|}.
$$

This is defined when $x'\ne0$.

For $\alpha>0$,

$$
\operatorname{LN}(\alpha x)=\operatorname{LN}(x).
$$

## Used by

- [Projected Pre-Norm](projected_pre_norm.md)
- [Multi-Pre-Norm](multi_pre_norm.md)
- [Layer-Norm Hash](layer_norm_hash.md)

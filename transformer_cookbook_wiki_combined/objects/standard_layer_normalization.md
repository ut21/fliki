---
title: Standard Layer Normalization
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 6.1"
aliases: ["layernorm", "Ba et al. layer norm"]
related:
  - layer_norm.md
---

# Standard Layer Normalization

Layer normalization is a map

$$
\operatorname{LN}:\mathbb{R}^d\to\mathbb{R}^d
$$

defined coordinatewise by

$$
\operatorname{LN}(x)
=
\frac{x_i-\mu}{\sqrt{\sigma^2+\epsilon}}\odot \gamma + \beta,
$$

where

$$
\mu=\frac{1}{d}\sum_{i=1}^d x_i,
\qquad
\sigma^2=\frac{1}{d}\sum_{i=1}^d (x_i-\mu)^2.
$$

Parameters:

$$
\gamma,\beta\in\mathbb{R}^d,
\qquad
\epsilon>0.
$$

## Relation to existing layer-norm entry

The prior [Layer Norm](layer_norm.md) entry uses the simplified mean-centering and norm-rescaling convention used for the layer-norm hash. This page records the parameterized Ba et al. convention used in the cookbook.

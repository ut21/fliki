---
title: Min and Max FFNs
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 4.4"
depends_on:
  - ../../objects/feed_forward_network.md
  - cpwl_ffn.md
---

# Min and Max FFNs

Target maps:

$$
\min,\max:\mathbb{R}^2\to\mathbb{R}.
$$

They are continuous piecewise-linear and are computed exactly by ReLU FFNs.

Useful identities:

$$
\min(x,y)=x-\operatorname{ReLU}(x-y),
$$

$$
\max(x,y)=x+\operatorname{ReLU}(y-x).
$$

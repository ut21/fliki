---
title: Error Analysis of ReLU FFNs
type: result
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Proposition 7.2"
depends_on:
  - ../objects/feed_forward_network.md
---

# Error Analysis of ReLU FFNs

If

$$
\|\hat x-x\|\le \delta
$$

and $\operatorname{ff}$ is a ReLU FFN, then there is a constant $K$ such that

$$
\|\operatorname{ff}(\hat x)-\operatorname{ff}(x)\|
\le
K\delta.
$$

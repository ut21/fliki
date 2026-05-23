---
title: Rounding by Fixed Precision
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 7.1"
depends_on:
  - ../feedforward/comparator_ffns.md
---

# Rounding by Fixed Precision

Comparator FFNs approximate step functions up to tolerance $\epsilon$.

If values with magnitude below $\epsilon$ are rounded to zero, then the approximate comparator can implement a discrete comparison exactly after rounding.

For example, an approximate threshold map

$$
\operatorname{GTZero}_\epsilon
$$

can be composed with fixed-precision rounding to simulate

$$
\mathbf{1}[x>0].
$$

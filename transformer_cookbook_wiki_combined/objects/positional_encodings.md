---
title: Positional Encodings
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 3.5"
---

# Positional Encodings

A positional encoding is a map

$$
\operatorname{pen}:\mathbb{N}\to\mathbb{R}^d.
$$

Common encodings in the cookbook include:

$$
\frac{1}{i},
\qquad
\frac{i}{n},
\qquad
 i,
\qquad
 i^2.
$$

The features $i$ and $i^2$ are used in [Quadratic-Maximization Index Lookup](../constructions/attention/quadratic_maximization_index_lookup.md).

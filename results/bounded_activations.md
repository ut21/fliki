---
title: Bounded Activations
type: result
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Proposition 7.1"
assumptions:
  - transformer
  - bounded-positional-encodings
  - standard-layer-normalization
depends_on:
  - ../objects/transformer.md
  - ../objects/standard_layer_normalization.md
---

# Bounded Activations

Let $\operatorname{tf}$ be a transformer with bounded positional encodings:

$$
\|\operatorname{tf.pen}(i)\|\le P
\qquad
\text{for all } n, i\in[n].
$$

Even if $\operatorname{tf}$ contains layer normalization with $\epsilon=0$, there exists $X$ such that for all layers $\ell$ and positions $i$,

$$
\|z_i^{(\ell)}\|\le X.
$$

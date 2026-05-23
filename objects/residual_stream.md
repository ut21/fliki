---
title: Residual Stream
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 8.1"
depends_on:
  - transformer_layer.md
---

# Residual Stream

The residual stream is the sequence of intermediate vectors maintained across transformer layers and residual connections.

For a layer $\ell$,

$$
(\bar c_1^{(\ell)},\ldots,\bar c_n^{(\ell)})
=
\operatorname{tf.tl}^{(\ell)}.\operatorname{sa}(z_1^{(\ell-1)},\ldots,z_n^{(\ell-1)})
+
(z_1^{(\ell-1)},\ldots,z_n^{(\ell-1)}),
$$

$$
(z_1^{(\ell)},\ldots,z_n^{(\ell)})
=
\operatorname{tf.tl}^{(\ell)}.\operatorname{ff}(\bar c_1^{(\ell)},\ldots,\bar c_n^{(\ell)})
+
(\bar c_1^{(\ell)},\ldots,\bar c_n^{(\ell)}).
$$

In many constructions, components are treated as write-once workspace coordinates.

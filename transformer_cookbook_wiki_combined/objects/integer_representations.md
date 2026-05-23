---
title: Integer Representations
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 3.3"
related:
  - ../constructions/attention/layernorm_hash_index_lookup.md
  - ../objects/layer_norm_hash.md
---

# Integer Representations

An integer $C$ may be represented directly as

$$
C.
$$

Bounded alternatives include length-normalized and position-normalized forms:

$$
\frac{C}{n},
\qquad
\frac{C}{i}.
$$

These arise naturally from unmasked and future-masked uniform averaging respectively.

A scale-invariant representation can be obtained through the [Layer-Norm Hash](layer_norm_hash.md).

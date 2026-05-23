---
title: Transformer
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 2.1"
depends_on:
  - length_preserving_map.md
  - transformer_layer.md
---

# Transformer

A transformer is a length-preserving function

$$
\operatorname{tf} : \Sigma^+ \xrightarrow{\mathrm{lp}} Y^+.
$$

For $x=x_1\cdots x_n$, define

$$
z_i^{(0)} = \operatorname{tf.we}(x_i)+\operatorname{tf.pen}(i),
\qquad i\in[n].
$$

For layers $\ell=1,\ldots,L$,

$$
(z_1^{(\ell)},\ldots,z_n^{(\ell)})
=
\operatorname{tf.tl}^{(\ell)}(z_1^{(\ell-1)},\ldots,z_n^{(\ell-1)}).
$$

The output sequence is

$$
y_i = \operatorname{tf.out}(z_i^{(L)}),
\qquad i\in[n].
$$

## Components

- word embedding: $\operatorname{tf.we}:\Sigma\to\mathbb{R}^d$
- positional encoding: $\operatorname{tf.pen}:\mathbb{N}\to\mathbb{R}^d$
- transformer layers: $\operatorname{tf.tl}^{(1)},\ldots,\operatorname{tf.tl}^{(L)}$
- unembedding: $\operatorname{tf.out}:\mathbb{R}^d\to Y$

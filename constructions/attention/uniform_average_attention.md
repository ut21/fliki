---
title: Uniform Average Attention
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.1.2"
depends_on:
  - ../../objects/self_attention.md
---

# Uniform Average Attention

Target maps:

$$
\operatorname{Avg}:(\mathbb{R}^d)^+\to(\mathbb{R}^d)^+,
\qquad
[\operatorname{Avg}(x_1,
\ldots,x_n)]_i=
\frac{1}{n}\sum_{k=1}^n x_k.
$$

With future masking:

$$
[\operatorname{Avg}^{\leftarrow}(x_1,
\ldots,x_n)]_i
=
\frac{1}{i}\sum_{k=1}^i x_k.
$$

Construction:

$$
W^{(Q)}=0,
\qquad
W^{(K)}=0,
\qquad
W^{(V)}=I.
$$

Works with softmax and average-hard attention.

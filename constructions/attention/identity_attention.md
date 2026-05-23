---
title: Identity Attention
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.1.1"
depends_on:
  - ../../objects/self_attention.md
---

# Identity Attention

Target map:

$$
\operatorname{id}:(\mathbb{R}^d)^+\to(\mathbb{R}^d)^+,
\qquad
\operatorname{id}(x)=x.
$$

With a residual connection, set

$$
W^{(Q)}=W^{(K)}=W^{(V)}=0.
$$

Then

$$
\operatorname{att}_{0}(x)+x=x.
$$

Works with softmax, average-hard, and unique-hard attention.

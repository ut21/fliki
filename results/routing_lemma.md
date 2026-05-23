---
title: Routing Lemma
type: result
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Lemma 8.1"
assumptions:
  - relu-ffn
  - self-attention
  - linear-coordinate-maps
depends_on:
  - ../objects/feed_forward_network.md
  - ../objects/self_attention.md
---

# Routing Lemma

Let

$$
\operatorname{ff}:\mathbb{R}^d\to\mathbb{R}^d
$$

be an FFN and let

$$
L,R:\mathbb{R}^d\to\mathbb{R}^d
$$

be linear transformations. Then

$$
L\circ \operatorname{ff},
\qquad
\operatorname{ff}\circ R,
\qquad
L\circ\operatorname{ff}\circ R
$$

are also FFNs.

Similarly, for self-attention

$$
\operatorname{sa}:(\mathbb{R}^d)^+\to(\mathbb{R}^d)^+
$$

and linear $L,R$, the maps

$$
L\circ\operatorname{sa},
\qquad
\operatorname{sa}\circ R,
\qquad
L\circ\operatorname{sa}\circ R
$$

are also self-attention layers.

## Use

The lemma permits implicit coordinate reordering, duplication, projection, padding, and zeroing in transformer constructions.

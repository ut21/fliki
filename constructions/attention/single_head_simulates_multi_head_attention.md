---
title: Single-Head Simulation of Multi-Head Attention
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.5"
depends_on:
  - ../../objects/self_attention.md
  - ../feedforward/addition_subtraction_ffn.md
---

# Single-Head Simulation of Multi-Head Attention

A multi-head attention layer with $H$ heads outputs the concatenation of $H$ attention-head outputs.

It can be simulated by $H$ single-headed attention layers, one per head, followed by addition/routing to collect the outputs.

If the original heads compute

$$
h_1(x),
\ldots,h_H(x),
$$

the simulation computes

$$
\langle h_1(x),
\ldots,h_H(x)\rangle.
$$

Works with softmax, average-hard, and unique-hard attention.

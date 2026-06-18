---
title: Encoder-Only Transformer
type: model-definition
paper: Pérez, Marinković, and Barceló, "Attention is Turing Complete", JMLR 2021
source: Section 2, Definition 1
aliases:
  - bidirectional transformer
  - full-context transformer
related:
  - ../objects/decoder_only_transformer.md
  - ../objects/self_attention.md
---

# Encoder-Only Transformer

An encoder-only transformer computes a sequence-to-sequence function

$$
f : \Sigma^* \to \Gamma^*
$$

where each output position can attend to all input positions (no causal masking).

For an input $x_1, \ldots, x_n$, each layer $\ell$ computes at each position $i$:

$$
h_i^0 = e(x_i, i),
$$

$$
a_{i,k}^\ell = \sum_{j=1}^{n} \alpha_{i,j,k}^\ell \cdot v_k^\ell(h_j^{\ell-1}),
$$

$$
h_i^\ell = f^\ell(a_{i,1}^\ell, \ldots, a_{i,h}^\ell, h_i^{\ell-1}),
$$

where the attention window is $\{1, \ldots, n\}$ for all $i$ (full context).

The output at position $i$ is $\gamma(h_i^d)$.

## Contrast with decoder-only

A [decoder-only transformer](decoder_only_transformer.md) uses causal masking so position $i$ attends only to positions $j \le i$ (or $j < i$ for strict causal attention). An encoder-only model has no such restriction.

## Used by

- [Turing Completeness of Hard Attention](../results/turing_completeness_hard_attention.md)

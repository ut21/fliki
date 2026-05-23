---
title: Decoder-Only Transformer
type: model-definition
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 2.1, Definitions 1-2
aliases:
  - p-precision decoder-only transformer
related:
  - ../objects/cot_decoding_class.md
  - ../objects/strict_causal_attention.md
  - ../objects/saturated_attention.md
---

# Decoder-Only Transformer

A $p$-precision decoder-only transformer parameterizes a function

$$
f:\Sigma^*\to\Sigma.
$$

It has $h$ heads, $d$ layers, model dimension $m$ with $h\mid m$, and feedforward width $w$.

The model consists of:

$$
e:\Sigma\times\mathbb{N}\to D_p^m,
$$

attention-head similarity functions

$$
s_k^\ell:D_p^m\times D_p^m\to D_p,
$$

attention-head value functions

$$
v_k^\ell:D_p^m\to D_p^{m/h},
$$

activation blocks

$$
f^\ell:(D_p^{m/h})^h\times D_p^m\to D_p^m,
$$

and an output map

$$
\gamma:D_p^m\to\Sigma.
$$

For input $x_1,\ldots,x_n$, embeddings are

$$
h_i^0=e(x_i,i).
$$

At layer $\ell$, head $k$ computes

$$
a_{i,k}^\ell
=
\sum_{j=1}^{c(i)}
\frac{s_k^\ell(h_i^{\ell-1},h_j^{\ell-1})}{Z_{i,k}^\ell}
\cdot
v_k^\ell(h_j^{\ell-1}),
$$

where

$$
Z_{i,k}^\ell
=
\sum_{j=1}^{c(i)}s_k^\ell(h_i^{\ell-1},h_j^{\ell-1}).
$$

The masking function is

$$
c(i)=i
$$

for standard causal attention and

$$
c(i)=i-1
$$

for [strict causal attention](strict_causal_attention.md).

The layer update is

$$
h_i^\ell
=
f^\ell(a_{i,1}^\ell,\ldots,a_{i,h}^\ell,h_i^{\ell-1}).
$$

The output token is

$$
\gamma(h_n^d).
$$

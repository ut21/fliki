---
title: Parallel Composition
type: result
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Lemma 8.3"
assumptions:
  - transformer
  - no-layer-normalization
  - length-preserving
depends_on:
  - ../objects/transformer.md
  - routing_lemma.md
---

# Parallel Composition

Given transformers without layer normalization

$$
\operatorname{tf}_1:\Sigma^*\xrightarrow{\mathrm{lp}}(\mathbb{R}^{d_1})^*,
$$

$$
\operatorname{tf}_2:\Sigma^*\xrightarrow{\mathrm{lp}}(\mathbb{R}^{d_2})^*,
$$

there exists a transformer

$$
\operatorname{tf}_1\oplus\operatorname{tf}_2:
\Sigma^*\xrightarrow{\mathrm{lp}}(\mathbb{R}^{d_1+d_2})^*
$$

such that for every string $w=w_1\cdots w_n$,

$$
(\operatorname{tf}_1\oplus\operatorname{tf}_2)(w)
=
\left(
\begin{bmatrix}\operatorname{tf}_1(w)_1\\\operatorname{tf}_2(w)_1\end{bmatrix},
\ldots,
\begin{bmatrix}\operatorname{tf}_1(w)_n\\\operatorname{tf}_2(w)_n\end{bmatrix}
\right).
$$

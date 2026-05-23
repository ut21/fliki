---
title: Hardmax--Softmax Gap Bound
type: result
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Lemma 5.3"
assumptions:
  - tieless-score-gap
  - hardmax-attention
  - softmax-attention
depends_on:
  - ../objects/tieless_scores.md
---

# Hardmax--Softmax Gap Bound

Let $s=(s_1,
\ldots,s_n)$ be attention scores. Suppose $j^*\in[n]$ and $\gamma>0$ satisfy

$$
s_j<s_{j^*}-\gamma
\qquad
\text{for all } j\ne j^*.
$$

Then

$$
\|\operatorname{hardmax}(s)-\operatorname{softmax}(s)\|_1
\le
2ne^{-\gamma}.
$$

This bound controls the error of approximating hard attention by soft attention.

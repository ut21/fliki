---
title: Hardmax Attention Weighting
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Definition 5.1"
aliases: ["left-hardmax", "right-hardmax", "average-hardmax", "UHAT", "AHAT"]
---

# Hardmax Attention Weighting

For scores $s=(s_1,
\ldots,s_n)$, define the set of maximal indices

$$
I(s)=\{i\in[n] : s_i=\max_j s_j\}.
$$

## Leftmost hardmax

$$
[\operatorname{lhardmax}(s)]_i
=
\mathbf{1}[i=\min I(s)].
$$

## Rightmost hardmax

$$
[\operatorname{rhardmax}(s)]_i
=
\mathbf{1}[i=\max I(s)].
$$

## Average hardmax

$$
[\operatorname{ahardmax}(s)]_i
=
\frac{1}{|I(s)|}\mathbf{1}[i\in I(s)].
$$

When $|I(s)|=1$, the three definitions coincide.

---
title: Predecessor Attention
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.4"
depends_on:
  - index_lookup.md
  - quadratic_maximization_index_lookup.md
  - ../../objects/attention_masking.md
---

# Predecessor Attention

The predecessor function is the lookup special case

$$
\operatorname{pred}(v_1,
\ldots,v_n)=(0,v_1,
\ldots,v_{n-1}).
$$

It can be obtained by index lookup with

$$
q_i=i-1.
$$

Using quadratic maximization, set scores proportional to

$$
s_{i,j}=2(i-1)j-j^2.
$$

Then $s_{i,j}$ is maximized at $j=i-1$.

With strict future masking and positional encoding $i/n$, unique-hard attention can select the largest available earlier position, hence $i-1$.

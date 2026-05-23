---
title: Soft Attention Approximation of Average-Hard Attention
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.7"
depends_on:
  - ../../objects/tieless_scores.md
  - ../../results/hardmax_softmax_gap_bound.md
---

# Soft Attention Approximation of Average-Hard Attention

For tieless scores with gap $\gamma$, rescale query vectors by

$$
W^{(Q)}_{\mathrm{new}}=\frac{1}{\tau}W^{(Q)}.
$$

Then the score gap becomes $\gamma/\tau$.

For maximum length $N$, choose

$$
\tau=\frac{\gamma}{\log(8N)}.
$$

Then the total non-target softmax mass is small enough that Boolean values $v_i\in\{0,1\}$ can be rounded correctly:

$$
|c_i-v_{q_i}|\le \frac{1}{4}.
$$

A comparator such as $\operatorname{GTZero}_{1/2}(c_i-1/4)$ recovers the target bit.

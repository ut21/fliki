---
title: Transformer Computation Reduces to Division and Dyck
type: result
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 4, Corollary 2.1
aliases:
  - Corollary 2.1
  - division and k-Dyck reductions
assumptions:
  - transformer-classifier
  - log-precision
  - fixed-parameters
  - fom
depends_on:
  - ../results/log_precision_transformers_in_fom.md
  - ../examples/dyck_k_d_iterative_matching.md
---

# Transformer Computation Reduces to Division and Dyck

Let $T$ satisfy [Log-Precision Transformers in FO(M)](log_precision_transformers_in_fom.md).

For each input $x$, there are first-order definable integers $a,b,i$ such that

$$
T(x)
$$

equals the $i$-th bit of

$$
\left\lfloor \frac{a}{b} \right\rfloor.
$$

Also, for each $x$, there are first-order definable strings

$$
w_1,\ldots,w_m
$$

such that $T(x)$ is first-order definable from membership of the $w_i$ in $k$-Dyck.

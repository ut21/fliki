---
title: Threshold Circuit
type: object
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 5.1
aliases:
  - threshold gate circuit
related:
  - log_uniform_tc0.md
---

# Threshold Circuit

A threshold circuit is a computation graph over $\{0,1\}$ with threshold gates.

For Boolean input $x$, threshold gates test sums:

$$
\theta_{\le q}(x)=1
\quad\text{iff}\quad
\sum_i x_i\le q,
$$

and analogously for lower-bound thresholds.

AND, OR, NOT, and IDENTITY gates are special cases.

---
title: CoT Sandwich Theorem
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 1.1, Equation (1)
aliases:
  - main complexity sandwich
  - Equation 1
  - main result
depends_on:
  - ../objects/cot_decoding_class.md
  - ../results/time_lower_bound.md
  - ../results/space_upper_bound.md
  - ../results/quadratic_time_upper_bound.md
---

# CoT Sandwich Theorem

## Statement

For $t(n)$ intermediate decoding steps,

$$
\operatorname{TIME}(t(n))
\subseteq \operatorname{CoT}(t(n))
\begin{aligned}
&\subseteq \operatorname{SPACE}(t(n)+\log n) \\
&\subseteq \widetilde{\operatorname{TIME}}(t(n)^2+n^2).
\end{aligned}
$$

## Components

The lower bound is [Time Lower Bound](time_lower_bound.md).

The middle upper bound is [Space Upper Bound](space_upper_bound.md).

The time upper bound is [Quadratic Time Upper Bound](quadratic_time_upper_bound.md).

## Assumptions

The lower bound uses strict causal saturated attention and projected pre-norm.

The upper bounds hold without these lower-bound architectural assumptions.

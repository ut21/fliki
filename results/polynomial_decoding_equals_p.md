---
title: Polynomial Decoding Equals P
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 1.1, polynomial-steps implication
depends_on:
  - ../results/time_lower_bound.md
  - ../results/quadratic_time_upper_bound.md
  - ../results/cot_sandwich_theorem.md
---

# Polynomial Decoding Equals P

Define

$$
\operatorname{CoT}(\mathrm{poly})
=
\bigcup_{c\ge1}\operatorname{CoT}(n^c).
$$

Then

$$
\operatorname{CoT}(\mathrm{poly})=
\mathbf{P}.
$$

## Lower bound

By [Time Lower Bound](time_lower_bound.md), for every polynomial $t(n)$,

$$
\operatorname{TIME}(t(n))
\subseteq
\operatorname{CoT}(t(n)).
$$

Thus

$$
\mathbf{P}
\subseteq
\operatorname{CoT}(\mathrm{poly}).
$$

## Upper bound

By [Quadratic Time Upper Bound](quadratic_time_upper_bound.md), if $t(n)=n^c$, then

$$
\operatorname{CoT}(n^c)
\subseteq
\widetilde{\operatorname{TIME}}(n^2+n^{2c})
\subseteq
\mathbf{P}.
$$

Therefore

$$
\operatorname{CoT}(\mathrm{poly})
\subseteq
\mathbf{P}.
$$

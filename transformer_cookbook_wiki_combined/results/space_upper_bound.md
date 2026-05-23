---
title: Space Upper Bound
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 4, Theorem 4
aliases:
  - Theorem 4
  - CoT space upper bound
depends_on:
  - ../objects/cot_decoding_class.md
  - ../objects/log_precision_transformer.md
---

# Space Upper Bound

## Statement

For transformer decoders with $t(n)$ intermediate decoding steps,

$$
\operatorname{CoT}(t(n))
\subseteq
\operatorname{SPACE}(t(n)+\log n).
$$

## Simulation

Store a buffer of the at most $t(n)$ generated intermediate tokens.

To compute the next token, call the underlying no-intermediate-step transformer on an input of size

$$
O(n+t(n)).
$$

Log-precision transformers without intermediate steps are simulable in log space, so each call uses

$$
O(\log(n+t(n)))
$$

additional space.

Thus

$$
\operatorname{CoT}(t(n))
\subseteq
\operatorname{SPACE}(t(n)+\log(n+t(n)))
\subseteq
\operatorname{SPACE}(t(n)+\log n).
$$

For $t(n)\ge\Omega(\log n)$, this simplifies to

$$
\operatorname{CoT}(t(n))\subseteq\operatorname{SPACE}(t(n)).
$$

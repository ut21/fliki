---
title: Linear Decoding Step Bounds
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Sections 1.1, 3.2, and 4
depends_on:
  - ../results/regular_language_recognition_with_linear_decoding.md
  - ../results/time_lower_bound.md
  - ../results/space_upper_bound.md
  - ../results/quadratic_time_upper_bound.md
---

# Linear Decoding Step Bounds

## Lower bound

For $t(n)=\Theta(n)$,

$$
\operatorname{TIME}(n)
\subseteq
\operatorname{CoT}(n).
$$

In particular, by [Regular Language Recognition with Linear Decoding](regular_language_recognition_with_linear_decoding.md), transformer decoders with linear intermediate generation can recognize every regular language.

## Upper bounds

For $t(n)=O(n)$,

$$
\operatorname{CoT}(n)
\subseteq
\operatorname{SPACE}(n)
$$

and

$$
\operatorname{CoT}(n)
\subseteq
\widetilde{\operatorname{TIME}}(n^2).
$$

Since

$$
\operatorname{SPACE}(n)
$$

is contained in the context-sensitive languages, linear-step transformer decoders recognize at most context-sensitive languages.

## Chomsky-hierarchy placement

The paper places linear-step transformer decoders between regular languages and context-sensitive languages:

$$
\mathrm{REG}
\subseteq
\operatorname{CoT}(n)
\subseteq
\mathrm{CSL}.
$$

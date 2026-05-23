---
title: Logarithmic Decoding Step Bound
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Sections 1.1 and 4
depends_on:
  - ../objects/cot_decoding_class.md
  - ../results/space_upper_bound.md
related:
  - ../results/cot_sandwich_theorem.md
---

# Logarithmic Decoding Step Bound

## Statement

If

$$
t(n)=O(\log n),
$$

then

$$
\operatorname{CoT}(t(n))
\subseteq
\operatorname{SPACE}(\log n)
=
\mathbf{L}.
$$

## Consequence

With only logarithmically many intermediate decoding steps, transformer decoders remain within deterministic log-space.

Under standard assumptions,

$$
\mathbf{NL}\not\subseteq\mathbf{L}
$$

and

$$
\mathbf{P}\not\subseteq\mathbf{L},
$$

so this regime cannot solve arbitrary $\mathbf{NL}$-complete or $\mathbf{P}$-complete problems.

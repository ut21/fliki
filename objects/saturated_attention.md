---
title: Saturated Attention
type: attention-assumption
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 2.1, Lower-bound assumptions
aliases:
  - averaging hard attention
  - saturated transformer attention
related:
  - ../objects/decoder_only_transformer.md
---

# Saturated Attention

A saturated attention head is an idealized attention head whose normalized attention weights satisfy

$$
\alpha_{i,j}\in\left\{0,\frac{1}{v_i}\right\}
$$

for some positive integer $v_i$ depending on query position $i$.

Equivalently, for each query position $i$, there is a selected set

$$
M_i\subseteq\{1,\ldots,c(i)\}
$$

such that

$$
\alpha_{i,j}
=
\begin{cases}
1/|M_i|, & j\in M_i,\\
0, & j\notin M_i.
\end{cases}
$$

Uniform attention and hard attention are special cases.

## Used by

- [Regular Language Recognition with Linear Decoding](../results/regular_language_recognition_with_linear_decoding.md)
- [Turing Machine Simulation](../results/turing_machine_simulation.md)

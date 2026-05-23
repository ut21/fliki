---
title: Time Lower Bound
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 3.3, Corollary 2.1
aliases:
  - Corollary 2.1
  - TIME lower bound
  - TIME(t(n)) subset CoT(t(n))
depends_on:
  - ../objects/cot_decoding_class.md
  - ../results/turing_machine_simulation.md
---

# Time Lower Bound

## Statement

For $t(n)$ at most polynomial,

$$
\operatorname{TIME}(t(n))
\subseteq
\operatorname{CoT}(t(n)).
$$

## Architectural assumptions

This lower bound is obtained via [Turing Machine Simulation](turing_machine_simulation.md) and assumes the transformer model used there:

- decoder-only transformer,
- [projected pre-norm](../objects/projected_pre_norm.md),
- [strict causal attention](../objects/strict_causal_attention.md),
- [saturated attention](../objects/saturated_attention.md),
- log precision.

## Immediate implications

For $t(n)=\Theta(n)$, transformer decoders can simulate real-time computation models.

For polynomial $t(n)$, the lower bound covers all polynomial-time languages.

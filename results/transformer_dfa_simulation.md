---
title: Transformer DFA Simulation
type: result
paper: Bhattamishra, Ahuja, and Goyal, "On the Ability and Limitations of Transformers to Recognize Formal Languages", EMNLP 2020
source: Section 3, Theorem 1
aliases:
  - Theorem 1
  - regular language recognition
  - DFA simulation by transformer
assumptions:
  - transformer
depends_on:
  - ../objects/deterministic_finite_state_automaton.md
  - ../objects/transformer.md
---

# Transformer DFA Simulation

## Statement

For every [DFA](../objects/deterministic_finite_state_automaton.md) $M$ with $Q$ states and input alphabet $\Sigma$, there exists a transformer that, on input $x_1 \cdots x_n$, computes the state sequence $q_0, q_1, \ldots, q_n$ of $M$ running on $x$.

## Consequence

$$
\mathrm{Regular} \;\subseteq\; \mathrm{Transformer}.
$$

Every regular language is recognized by some transformer.

## Construction sketch

States are encoded as one-hot vectors in $\mathbb{R}^{|Q|}$. One attention head retrieves the previous state; the feed-forward layer applies the transition function $\delta : Q \times \Sigma \to Q$ as a lookup table. The construction uses $O(|Q| \cdot |\Sigma|)$ parameters.

## Counter languages

The paper also shows transformers recognize certain counter languages that lie beyond the regular languages, including languages definable by threshold-counting constraints on symbol frequencies.

## Relation to other results

- [Angluin et al. 2023](../results/mhat_recognizes_star_free.md) gives an exact characterization (star-free) for masked hard-attention transformers, a strictly weaker model.
- [Merrill & Sabharwal 2024](../results/regular_language_recognition_with_linear_decoding.md) gives a log-precision decoder-only construction for regular languages with linear decoding steps.

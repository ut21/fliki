---
title: Saturated Transformers in TC⁰
type: result
paper: Merrill, Sabharwal, and Smith, "Saturated Transformers are Constant-Depth Threshold Circuits", TACL 2022
source: Section 4, Theorem 1
aliases:
  - Theorem 1
  - TC0 upper bound
  - saturated transformer upper bound
assumptions:
  - transformer
  - saturated-attention
depends_on:
  - ../objects/tc0_circuits.md
  - ../objects/saturated_attention.md
  - ../objects/transformer.md
---

# Saturated Transformers in TC⁰

## Statement

Every language recognized by a (uniform family of) saturated transformers is contained in uniform $\mathbf{TC}^0$.

$$
\mathbf{SatTransformer} \;\subseteq\; \mathbf{TC}^0.
$$

## Model

A **saturated transformer** is a transformer whose softmax attention weights are replaced by their idealized saturated form: for each query position $i$ and head $k$, the weight $\alpha_{i,j,k} \in \{0, 1/|M_i|\}$ where $M_i$ is a subset of key positions (see [Saturated Attention](../objects/saturated_attention.md)).

## Proof idea

The simulation constructs a $\mathbf{TC}^0$ circuit that mirrors the transformer computation layer by layer:

1. **Attention is averaging**: Saturated attention computes an unweighted average over a subset of values. Sums and comparisons needed to select the subset are computable in $\mathbf{TC}^0$ (threshold gates suffice for majority/comparison).

2. **FFN is a threshold circuit**: A ReLU or threshold feed-forward network of fixed width and depth is itself a constant-depth threshold circuit.

3. **Fixed depth**: A $d$-layer transformer corresponds to a circuit of depth $O(d)$, which is constant (independent of input length $n$).

Composing these three observations gives a $\mathbf{TC}^0$ circuit for any fixed saturated transformer.

## Consequence

Saturated transformers cannot solve problems outside $\mathbf{TC}^0$, such as:

- Any problem believed to be outside $\mathbf{NC}^1$ (e.g., integer linear programming).
- Any problem requiring super-constant circuit depth.

This gives a formal upper bound that rules out certain computations for this model class. In particular, saturated transformers without chain-of-thought cannot simulate arbitrary Turing machines.

## Contrast with log-precision models

[Log-precision transformers with chain-of-thought](../results/time_lower_bound.md) achieve $\mathbf{TIME}(t(n)) \subseteq \mathbf{CoT}(t(n))$, going far beyond $\mathbf{TC}^0$ for polynomial $t(n)$.

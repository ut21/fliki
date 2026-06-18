---
title: "Merrill et al. 2022: Saturated Transformers are Constant-Depth Threshold Circuits"
type: index
paper: Merrill, Sabharwal, and Smith, "Saturated Transformers are Constant-Depth Threshold Circuits", TACL 2022
source: https://aclanthology.org/2022.tacl-1.49/
---

# Merrill, Sabharwal, and Smith — Saturated Transformers are Constant-Depth Threshold Circuits

**Transactions of the Association for Computational Linguistics**, 10:843–856, 2022.

This paper establishes a $\mathbf{TC}^0$ upper bound on the expressive power of saturated transformers, connecting transformer expressivity to circuit complexity theory. It formalizes the intuition that transformers without chain-of-thought are limited to "shallow" computations.

## Core objects

- [Saturated Attention](../objects/saturated_attention.md)
- [Uniform TC⁰](../objects/tc0_circuits.md)
- [Transformer](../objects/transformer.md)

## Results

- [Saturated Transformers in TC⁰](../results/saturated_transformers_in_tc0.md)

## Key contributions

1. **TC⁰ upper bound**: Any saturated transformer family is in uniform $\mathbf{TC}^0$.
2. **Circuit simulation**: Constructs an explicit $\mathbf{TC}^0$ circuit family that mirrors the transformer computation.
3. **Formal separation**: Identifies specific tasks (e.g., counting, sorting beyond threshold) that are outside the reach of saturated transformers.

## Relation to other work

- [Pérez et al. 2021](perez2021.md): Hard attention + arbitrary precision achieves Turing completeness. Merrill et al. 2022 shows that realistic (saturated) attention is far more limited.
- [Merrill & Sabharwal 2024](../results/cot_sandwich_theorem.md): Adding chain-of-thought to log-precision decoders lifts expressivity far above $\mathbf{TC}^0$.
- [Angluin et al. 2023](angluin2023.md): Gives an exact characterization (star-free) for masked hard attention, a different attention model.

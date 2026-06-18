---
title: "Pérez et al. 2021: Attention is Turing Complete"
type: index
paper: Pérez, Marinković, and Barceló, "Attention is Turing Complete", JMLR 2021
source: https://jmlr.org/papers/v22/20-302.html
---

# Pérez, Marinković, and Barceló — Attention is Turing Complete

**Journal of Machine Learning Research**, 22(112):1–35, 2021.

This paper establishes that transformers with unique hard attention and arbitrary precision are Turing complete, placing them at the ceiling of computability. It is one of the foundational expressivity results for the transformer architecture.

## Core objects

- [Encoder-Only Transformer](../objects/encoder_only_transformer.md)
- [Arbitrary Precision](../objects/arbitrary_precision.md)
- [Hardmax Attention Weighting](../objects/hardmax.md)

## Results

- [Turing Completeness of Hard Attention](../results/turing_completeness_hard_attention.md)

## Key assumptions

- Encoder-only (bidirectional attention, no causal masking).
- Unique hard attention: each head attends to exactly one position.
- Arbitrary precision: values are arbitrary rationals with no bit-width bound.
- A fixed number of layers independent of input or computation length.

## Relation to other work

The Turing completeness result is a theoretical upper bound. It requires **arbitrary precision**, which is not realistic for deployed models. Contrast with:

- [Merrill & Sabharwal 2024](../results/turing_machine_simulation.md): achieves Turing machine simulation with **log precision** but requires chain-of-thought decoding steps.
- [Merrill, Sabharwal, Smith 2022](merrill2022.md): shows saturated (realistic) transformers are in $\mathbf{TC}^0$, far below Turing completeness.

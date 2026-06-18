---
title: Turing Completeness of Hard Attention
type: result
paper: Pérez, Marinković, and Barceló, "Attention is Turing Complete", JMLR 2021
source: Section 4, Theorem 3
aliases:
  - Theorem 3
  - attention is Turing complete
  - transformer Turing completeness
assumptions:
  - encoder-only
  - arbitrary-precision
  - hardmax-attention
depends_on:
  - ../objects/encoder_only_transformer.md
  - ../objects/arbitrary_precision.md
  - ../objects/hardmax.md
---

# Turing Completeness of Hard Attention

## Statement

For any Turing machine $M$ and input $x \in \Sigma^*$, there exists an [encoder-only transformer](../objects/encoder_only_transformer.md) with [unique hard attention](../objects/hardmax.md) and [arbitrary precision](../objects/arbitrary_precision.md) that simulates $M$ on $x$ in real time.

Formally, the transformer computes the same output sequence as $M$ step by step, with one transformer step per Turing machine step.

## Model assumptions

- **Architecture**: Encoder-only (bidirectional), no causal masking.
- **Attention**: Unique hard attention — each head attends to exactly one position (the unique score maximizer).
- **Precision**: Arbitrary — values are arbitrary rationals $\mathbb{Q}$, with no bound on bit-width.
- **Depth**: A fixed number of layers (independent of input length or computation time).

## Proof sketch

The simulation uses a scratchpad encoding: the input $x$ is extended with scratch tokens representing the Turing machine tape. At each step, each attention head retrieves the current head position by finding the unique position encoding a particular counter value. The feed-forward layer then applies the transition function.

Arbitrary precision is essential: exact integer indices must be stored and compared without rounding error.

## Contrast with bounded-precision models

For [log-precision](../objects/log_precision_transformer.md) decoder-only transformers, Turing machine simulation requires chain-of-thought decoding steps (see [Turing Machine Simulation](turing_machine_simulation.md)). The Pérez et al. result bypasses chain-of-thought but requires unbounded precision and bidirectional attention.

## Consequence

$$
\text{RE} \;\subseteq\; \text{HardAttn-}\infty\text{-Transformer},
$$

where $\text{RE}$ is the class of recursively enumerable languages and $\infty$ denotes arbitrary precision. This places the hard-attention, arbitrary-precision transformer at the ceiling of computability.

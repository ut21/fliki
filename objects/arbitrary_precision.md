---
title: Arbitrary Precision
type: model-assumption
paper: Pérez, Marinković, and Barceló, "Attention is Turing Complete", JMLR 2021
source: Section 2
aliases:
  - unbounded precision
  - infinite precision
related:
  - ../objects/log_precision_transformer.md
---

# Arbitrary Precision

An arbitrary-precision transformer places no bound on the number of bits used to represent values in the residual stream, attention weights, or feed-forward activations.

Formally, each value may be an arbitrary rational number $q \in \mathbb{Q}$, with precision that can grow without bound as a function of the input length $n$ or computation time $t$.

This contrasts with [log precision](log_precision_transformer.md), where values are restricted to $O(\log n)$ bits.

## Role in expressivity

Arbitrary precision allows a transformer to store and manipulate exact integer indices and unbounded counters. Together with hard attention, this enables simulation of arbitrary Turing machines.

Without precision bounds, the model is no longer realistic as a description of a fixed neural network, but it characterizes a theoretical ceiling on expressivity.

## Used by

- [Turing Completeness of Hard Attention](../results/turing_completeness_hard_attention.md)

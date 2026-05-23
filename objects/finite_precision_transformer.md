---
title: Finite-Precision Transformer
type: model-assumption
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 3, Proposition 1
aliases:
  - fixed-precision transformer
related:
  - transformer_classifier.md
  - uniform_attention.md
---

# Finite-Precision Transformer

A finite-precision transformer has precision $p$ fixed independently of context length $n$.

In this regime, sufficiently small attention weights round to zero.

## Limitation

Finite precision prevents universal attention patterns over long enough contexts.

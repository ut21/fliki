---
title: Transformer Components in Log-Uniform TC0
type: result
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 6, Lemma 2
aliases:
  - Lemma 2
assumptions:
  - transformer-classifier
  - log-precision
  - fixed-parameters
  - log-uniform-tc0
depends_on:
  - ../objects/transformer_classifier.md
  - ../objects/log_precision_transformer.md
  - ../objects/log_uniform_tc0.md
---

# Transformer Components in Log-Uniform TC0

Let $T$ be a fixed-parameter log-precision transformer.

Each component of $T$ is computable in log-uniform $\mathrm{TC}^0$:

- embedding,
- self-attention,
- feedforward,
- output.

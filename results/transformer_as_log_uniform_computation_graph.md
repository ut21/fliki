---
title: Transformer as Log-Uniform Computation Graph
type: result
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 6, Lemma 1
aliases:
  - Lemma 1
assumptions:
  - transformer-classifier
  - computation-graph-family
depends_on:
  - ../objects/transformer_classifier.md
  - ../objects/computation_graph_family.md
---

# Transformer as Log-Uniform Computation Graph

A transformer $T$ is a log-uniform computation graph family.

The primitive node types are:

- embedding,
- self-attention,
- feedforward,
- output.

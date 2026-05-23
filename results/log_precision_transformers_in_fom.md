---
title: Log-Precision Transformers in FO(M)
type: result
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 4, Theorem 2
aliases:
  - Theorem 2
  - FO(M) upper bound
  - logical characterization of log-precision transformers
assumptions:
  - transformer-classifier
  - log-precision
  - fixed-parameters
  - fom
depends_on:
  - ../objects/transformer_classifier.md
  - ../objects/log_precision_transformer.md
  - ../objects/first_order_logic_with_majority.md
  - ../results/transformer_as_log_uniform_computation_graph.md
  - ../results/transformer_components_in_log_uniform_tc0.md
  - ../results/log_uniform_computation_graphs_in_tc0.md
---

# Log-Precision Transformers in FO(M)

For every fixed-parameter log-precision transformer classifier $T$, there exists an FO(M) sentence $\varphi$ such that, for all strings $x$,

$$
\varphi(x)=T(x).
$$

## Consequence

FO(M) gives an upper bound on log-precision transformer classifiers, including models that can express uniform attention.

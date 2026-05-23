---
title: Computation Graph Circuit Simulation
type: result
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 6.1, Theorem 3
aliases:
  - Theorem 3
assumptions:
  - computation-graph-family
  - threshold-circuit
  - block-circuit-simulation
depends_on:
  - ../objects/computation_graph_family.md
  - ../objects/threshold_circuit.md
  - ../objects/block_circuit_simulation.md
---

# Computation Graph Circuit Simulation

Let $G$ be a computation graph over finitely many node types $F$.

Assume each $F\in\mathcal F$ is specified by a log-uniform circuit family and a valid block mapping is fixed.

Algorithms 1 and 2 define a circuit family $C$ such that:

$$
C \equiv G.
$$

Moreover,

$$
\operatorname{depth}_C(n)
\le
\operatorname{depth}_G(n)\max_F \operatorname{depth}_F(n),
$$

and

$$
\operatorname{size}_C(n)
\le
\operatorname{size}_G(n)\max_F \operatorname{size}_F(n).
$$

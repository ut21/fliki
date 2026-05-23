---
title: Log-Uniform Computation Graphs in TC0
type: result
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 6.1, Corollary 3.2
aliases:
  - Corollary 3.2
assumptions:
  - computation-graph-family
  - log-uniform-tc0
depends_on:
  - ../results/computation_graph_circuit_simulation.md
  - ../results/log_precision_component_padding.md
---

# Log-Uniform Computation Graphs in TC0

Let $G$ be a log-uniform, constant-depth computation graph family over a finite set of node types $\mathcal F$.

Assume each $F\in\mathcal F$ is specified by a log-uniform $\mathrm{TC}^0$ family with size

$$
size_F(n)=bsize(n),
$$

where $bsize(n)$ is a power of $2$ computable in $O(\log n)$ time.

Then $G$ can be simulated by a log-uniform $\mathrm{TC}^0$ family with the size and depth bounds of [Computation Graph Circuit Simulation](computation_graph_circuit_simulation.md).

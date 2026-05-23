---
title: Constant-Depth Computation Graphs in XC0
type: result
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 6.1, Corollary 3.1
aliases:
  - Corollary 3.1
assumptions:
  - computation-graph-family
  - constant-depth-poly-size
depends_on:
  - ../objects/xc0.md
  - ../results/computation_graph_circuit_simulation.md
---

# Constant-Depth Computation Graphs in XC0

Let $G$ be a constant-depth, polynomial-size computation graph family over a finite set of node types $\mathcal F$.

If every node type in $\mathcal F$ is computable by $\mathrm{XC}^0$ circuits, then the function computed by $G$ is in $\mathrm{XC}^0$.

Here $\mathrm{XC}^0$ may be, for example, $\mathrm{AC}^0$ or $\mathrm{TC}^0$.

---
title: Block Circuit Simulation
type: construction
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 6.1, Algorithms 1-2
aliases:
  - block mapping
related:
  - computation_graph_family.md
  - threshold_circuit.md
---

# Block Circuit Simulation

The simulation replaces each computation-graph node by a contiguous block of circuit gates.

The block mapping gives:

- $\operatorname{bnode}(n,i)$: graph node simulated by gate $i$,
- $\operatorname{bstart}(n,i')$: first gate in node $i'$'s block,
- $\operatorname{bsize}(n,i')$: size of node $i'$'s block.

Edges between graph nodes are routed between the corresponding gate blocks.

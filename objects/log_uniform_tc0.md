---
title: Log-Uniform TC0
type: complexity-class
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Sections 5.2 and 6
aliases:
  - log-uniform threshold circuits
  - log-uniform TC^0
related:
  - threshold_circuit.md
  - first_order_logic_with_majority.md
---

# Log-Uniform TC0

Log-uniform $\mathrm{TC}^0$ is the class recognized by log-uniform, constant-depth, polynomial-size threshold circuit families.

## Uniformity

A circuit family is log-uniform when its gate and wiring functions are computable in $O(\log n)$ time.

## Logic connection

The paper uses:

$$
\text{log-uniform }\mathrm{TC}^0 = \mathrm{FO(M)}.
$$

---
title: Computation Graph Family
type: object
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Sections 5.1-5.2, Definition 5
aliases:
  - uniform computation graph family
  - log-uniform computation graph
related:
  - threshold_circuit.md
---

# Computation Graph Family

A computation graph family maps each input length $n$ to a computation graph $G_n$.

It defines

$$
G(x)=G_{|x|}(x).
$$

## Graph access

The family is specified by:

- $\operatorname{node}_G(n,i)$: the type of node $i$ in $G_n$,
- $\operatorname{edge}_G(n,i,j)$: the argument index for edge $i\to j$, or absent.

## Log-uniformity

$G$ is log-uniform when $\operatorname{node}_G$ and $\operatorname{edge}_G$ are computable in $O(\log n)$ time.

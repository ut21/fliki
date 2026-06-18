---
title: Uniform TC⁰
type: object
paper: Merrill, Sabharwal, and Smith, "Saturated Transformers are Constant-Depth Threshold Circuits", TACL 2022
source: Section 2, Background
aliases:
  - TC0
  - uniform TC0
  - constant-depth threshold circuits
related:
  - ../results/saturated_transformers_in_tc0.md
---

# Uniform TC⁰

$\mathbf{TC}^0$ is the class of languages recognized by uniform families of constant-depth, polynomial-size Boolean circuits augmented with **threshold gates**.

A threshold gate $\mathrm{THR}_k(x_1, \ldots, x_m)$ outputs 1 if and only if at least $k$ of its inputs are 1.

## Uniformity

A circuit family $\{C_n\}_{n \ge 1}$ is **DLOGTIME-uniform** if, given $n$ in unary, a Turing machine can compute descriptions of $C_n$ in $O(\log n)$ time. Uniformity prevents circuits from hard-coding uncomputable information.

## Relationship to other classes

$$
\mathbf{AC}^0 \subsetneq \mathbf{TC}^0 \subseteq \mathbf{NC}^1 \subseteq \mathbf{L} \subseteq \mathbf{P}.
$$

$\mathbf{AC}^0$ uses only AND/OR gates (no threshold gates) and cannot compute parity or majority. $\mathbf{TC}^0$ adds threshold gates, making it capable of integer addition, multiplication, sorting, and majority.

## Significance for transformers

Saturated transformers can be simulated by $\mathbf{TC}^0$ circuits because:

1. Saturated attention is a weighted average over a subset — computable by addition and comparison.
2. ReLU/threshold feed-forward networks implement threshold gates directly.
3. A constant number of transformer layers maps to constant circuit depth.

## Used by

- [Saturated Transformers in TC⁰](../results/saturated_transformers_in_tc0.md)

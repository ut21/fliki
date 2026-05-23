---
title: Uniformity in Transformer Constructions
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 2.3"
---

# Uniformity in Transformer Constructions

A construction may depend on input length in three distinct ways.

## Length-dependent non-parameters

Non-parameter quantities may depend on $n$, including positional encodings and numerical precision.

## Maximum-length-dependent parameters

For a maximum length $N$, parameters may be chosen so that the transformer works for all $n\le N$.

## Computational uniformity condition

If parameter values or positional encodings depend on $n$ or $N$, the complexity of computing them should be specified. A common requirement is computability in

$$
\operatorname{poly}(\log N)
$$

time.

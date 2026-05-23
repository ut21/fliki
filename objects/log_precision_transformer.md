---
title: Log-Precision Transformer
type: model-assumption
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 2.1, Transformer Precision
aliases:
  - log precision
  - bounded precision transformer
related:
  - ../objects/decoder_only_transformer.md
---

# Log-Precision Transformer

For a computation over $m$ decoding positions, a log-precision transformer has at most

$$
c\log m
$$

bits of precision for a fixed constant $c$.

For an input of length $n$ and $t(n)$ intermediate decoding steps, the precision bound is

$$
O(\log(n+t(n))).
$$

The paper uses log precision to permit representation of indices and uniform-attention sums while remaining within bounded-precision transformer models.

## Used by

- [Regular Language Recognition with Linear Decoding](../results/regular_language_recognition_with_linear_decoding.md)
- [Turing Machine Simulation](../results/turing_machine_simulation.md)
- [Quadratic Time Upper Bound](../results/quadratic_time_upper_bound.md)
- [Space Upper Bound](../results/space_upper_bound.md)

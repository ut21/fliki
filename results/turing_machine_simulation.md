---
title: Turing Machine Simulation
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 3.3, Theorem 2
aliases:
  - Theorem 2
  - real-time Turing machine simulation
assumptions:
  - decoder-only
  - log-precision
  - projected-pre-norm
  - strict-causal-attention
  - saturated-attention
depends_on:
  - ../objects/multitape_turing_machine.md
  - ../objects/layer_norm_hash.md
  - ../objects/projected_pre_norm.md
  - ../objects/saturated_attention.md
  - ../objects/strict_causal_attention.md
  - ../constructions/turing_machine_diff_sequence.md
  - ../constructions/input_tape_retrieval_via_layer_norm_hash.md
  - ../constructions/rightmost_retrieval_via_layer_norm_hash.md
---

# Turing Machine Simulation

## Statement

Let $M$ be a Turing machine that, on input length $1+n$, runs for at most

$$
t(n)
$$

steps, with $t(n)$ at most polynomial.

There is a decoder-only [projected pre-norm](../objects/projected_pre_norm.md) transformer with [strict causal attention](../objects/strict_causal_attention.md) and [saturated attention](../objects/saturated_attention.md) such that, on input

$$
\$x,
$$

it takes

$$
t(n)
$$

decoding steps and then, using

$$
|M(x)|
$$

additional steps, outputs $M(x)$.

The construction works with or without positional encodings.

## Simulation invariant

Each decoding step simulates one Turing machine step by emitting a token from the [diff sequence](../constructions/turing_machine_diff_sequence.md).

For each tape $\tau$, the transformer reconstructs the current head position

$$
h_i^\tau
$$

and the symbol currently stored at that position.

## Tape reconstruction

Input tape values are recovered using

$$
\phi_i^0
=
\begin{cases}
\phi(1,1/i)=\phi(i,1), & x_i\in\Sigma,\\
\phi(h_i^0/i,1/i)=\phi(h_i^0,1), & \text{otherwise}.
\end{cases}
$$

and [input tape retrieval](../constructions/input_tape_retrieval_via_layer_norm_hash.md).

Work and output tape values are recovered using

$$
\phi_i^\tau=\phi(h_i^\tau/i,1/i)=\phi(h_i^\tau,1),
$$

$$
\psi_i^\tau=\phi(f(i),1),
$$

and [rightmost retrieval](../constructions/rightmost_retrieval_via_layer_norm_hash.md).

## Consequence

The theorem implies the time lower bound

$$
\operatorname{TIME}(t(n))\subseteq\operatorname{CoT}(t(n)).
$$

See [Time Lower Bound](time_lower_bound.md).

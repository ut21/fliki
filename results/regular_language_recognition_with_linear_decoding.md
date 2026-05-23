---
title: Regular Language Recognition with Linear Decoding
type: result
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 3.2, Theorem 1
aliases:
  - Theorem 1
  - regular language recognition
  - automaton simulation
assumptions:
  - decoder-only
  - log-precision
  - projected-pre-norm
  - saturated-attention
assumption_sets:
  theorem_statement:
    label: Theorem statement
    assumptions:
      - decoder-only
      - log-precision
      - projected-pre-norm
      - strict-causal-attention
      - saturated-attention
  proof_note:
    label: Proof note
    assumptions:
      - decoder-only
      - log-precision
      - projected-pre-norm
      - saturated-attention
depends_on:
  - ../objects/deterministic_finite_state_automaton.md
  - ../objects/layer_norm_hash.md
  - ../objects/projected_pre_norm.md
  - ../objects/multi_pre_norm.md
  - ../objects/saturated_attention.md
  - ../objects/strict_causal_attention.md
  - ../results/multi_pre_norm_simulation_by_projected_pre_norm.md
---

# Regular Language Recognition with Linear Decoding

## Statement

For every regular language $L$, there is a decoder-only [projected pre-norm](../objects/projected_pre_norm.md) transformer with [saturated attention](../objects/saturated_attention.md) such that, on input

$$
\$x,
$$

it decides whether

$$
x\in L
$$

using

$$
|x|+1
$$

decoding steps.

The construction works with or without positional encodings. The theorem statement uses strict causal saturated attention; the proof notes that strict causal masking is not needed for Theorem 1.

## Automaton simulated

Let

$$
A=\langle\Sigma,Q,q_0,\delta,F\rangle
$$

recognize $L$.

The transformer emits intermediate state tokens

$$
q_0,q_1,\ldots,q_n,
$$

where

$$
q_i=\delta(q_{i-1},x_i).
$$

After emitting $q_n$, it emits accept iff

$$
q_n\in F.
$$

## Core retrieval step

At decoding step $i>n$, the transformer must compute

$$
q_{i-n}=\delta(q_{i-n-1},x_{i-n}).
$$

The previous state $q_{i-n-1}$ is the current input token. The current input symbol $x_{i-n}$ is retrieved using layer-norm-hash matching after computing denominators $1/i$ and $1/(i-n)$ via uniform attention.

The construction uses [multi-pre-norm](../objects/multi_pre_norm.md), eliminated by [Proposition 1](multi_pre_norm_simulation_by_projected_pre_norm.md).

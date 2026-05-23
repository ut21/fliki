---
title: Turing Machine Diff Sequence
type: construction
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 3.3, Theorem 2 proof
depends_on:
  - ../objects/multitape_turing_machine.md
used_by:
  - ../results/turing_machine_simulation.md
---

# Turing Machine Diff Sequence

Let

$$
M=\langle\Sigma,\Gamma,k,b,Q,q_0,\delta,F\rangle
$$

be a multitape Turing machine.

Define a finite vocabulary

$$
\Delta
$$

representing elements of

$$
Q\times\Gamma^{k+1}\times\{0,\pm1\}^{k+2}.
$$

A deterministic run of $M$ induces a sequence

$$
\delta_0,\ldots,\delta_{t(n)}\in\Delta,
$$

where each diff token records:

$$
\delta_i=
\langle
q_i,
\gamma_i^1,\ldots,\gamma_i^{k+1},
d_i^0,\ldots,d_i^{k+1}
\rangle.
$$

Here $q_i$ is the entered state, $\gamma_i^\tau$ is the symbol written on tape $\tau$, and $d_i^\tau\in\{0,\pm1\}$ is the head movement on tape $\tau$.

The transformer simulation stores the Turing machine run as this sequence of diff tokens. Tape contents at a future head position are reconstructed by retrieving the rightmost prior diff affecting that position.

## Uses

- [Input Tape Retrieval via Layer-Norm Hash](input_tape_retrieval_via_layer_norm_hash.md) for tape $0$.
- [Rightmost Retrieval via Layer-Norm Hash](rightmost_retrieval_via_layer_norm_hash.md) for work and output tapes.

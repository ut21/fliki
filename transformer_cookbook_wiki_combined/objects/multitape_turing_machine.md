---
title: Multitape Turing Machine
type: computation-model
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source:
  - Section 2.2, Models of Computation
  - Appendix B, Turing Machines
aliases:
  - Turing machine
  - non-random-access multitape Turing machine
related:
  - ../results/turing_machine_simulation.md
  - ../constructions/turing_machine_diff_sequence.md
---

# Multitape Turing Machine

A multitape Turing machine is a tuple

$$
M=\langle\Sigma,\Gamma,k,b,Q,q_0,\delta,F\rangle,
$$

where:

$$
\Sigma\subseteq\Gamma
$$

is the input alphabet inside the tape alphabet,

$$
k
$$

is the number of work tapes,

$$
b\in\Gamma\setminus\Sigma
$$

is the blank symbol,

$$
Q
$$

is a finite state set with initial state $q_0$,

$$
F\subseteq Q
$$

is the set of halting states, and

$$
\delta:(Q\setminus F)\times\Gamma^{k+2}
\to
Q\times\Gamma^{k+1}\times\{\pm1\}^{k+2}
$$

is the transition function.

The $k+2$ tapes are:

$$
0,1,\ldots,k,k+1,
$$

where tape $0$ is the input tape, tapes $1,\ldots,k$ are work tapes, and tape $k+1$ is the output tape.

A configuration consists of a state $q$, tape contents

$$
c^0,c^1,\ldots,c^k,c^{k+1},
$$

and head positions

$$
h^0, h^1,\ldots,h^k,h^{k+1}.
$$

At step $i$, if $q_i\notin F$,

$$
\langle q_{i+1},\gamma_i^1,\ldots,\gamma_i^{k+1},d_i^0,\ldots,d_i^{k+1}\rangle
=
\delta(q_i,c_i^0[h_i^0],\ldots,c_i^{k+1}[h_i^{k+1}]).
$$

The written symbols update the scanned cells and the heads update by

$$
h_{i+1}^\tau=h_i^\tau+d_i^\tau.
$$

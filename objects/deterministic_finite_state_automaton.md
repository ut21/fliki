---
title: Deterministic Finite-State Automaton
type: computation-model
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 2.2, Models of Computation
aliases:
  - deterministic finite automaton
  - finite-state automaton
  - DFA
related:
  - ../results/regular_language_recognition_with_linear_decoding.md
---

# Deterministic Finite-State Automaton

A deterministic finite-state automaton is a tuple

$$
A=\langle\Sigma,Q,q_0,\delta,F\rangle,
$$

where:

$$
\Sigma
$$

is a finite input alphabet,

$$
Q
$$

is a finite state set with $q_0\in Q$,

$$
\delta:Q\times\Sigma\to Q
$$

is the transition function, and

$$
F\subseteq Q
$$

is the set of accepting states.

For input

$$
\sigma=\sigma_1\cdots\sigma_n\in\Sigma^n,
$$

the run is given by

$$
q_i=\delta(q_{i-1},\sigma_i),\qquad 1\le i\le n.
$$

The automaton accepts iff

$$
q_n\in F.
$$

The recognized language is

$$
L(A)=\{\sigma\in\Sigma^*:q_{|\sigma|}\in F\}.
$$

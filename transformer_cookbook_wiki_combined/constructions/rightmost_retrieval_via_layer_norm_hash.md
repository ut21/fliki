---
title: Rightmost Retrieval via Layer-Norm Hash
type: construction
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Appendix E, Lemmas 6-10
depends_on:
  - ../objects/layer_norm_hash.md
  - ../objects/finite_difference_tie_breaker.md
  - ../objects/strict_causal_attention.md
used_by:
  - ../results/turing_machine_simulation.md
---

# Rightmost Retrieval via Layer-Norm Hash

Let $h_1,\ldots,h_{i-1}$ be tape positions. Assume that if no earlier position equals $h_i$, then all earlier positions lie strictly on one side of $h_i$ under a fixed order $\prec\in\{<,>\}$.

Let $f(i)$ be the [finite-difference tie breaker](../objects/finite_difference_tie_breaker.md). Define

$$
\phi_i=\phi(h_i/i,1/i),
$$

$$
\psi_i=\phi(f(i),1),
$$

and

$$
e_1=\langle1,0,0,0\rangle.
$$

Use one attention head with

$$
Q_i=\langle\phi_i,e_1\rangle,
$$

$$
K_j=\langle\phi_j,-\psi_j\rangle,
$$

$$
V_j=\langle\phi_j,\delta_j\rangle.
$$

Let the output be

$$
\bar V=\langle\bar\phi,\bar\delta\rangle.
$$

Then

$$
\exists j<i\;[h_i=h_j]
\iff
\bar\phi=\phi_i.
$$

If such $j$ exists, then

$$
\bar\delta=\delta_j
$$

for the greatest $j<i$ with $h_i=h_j$.

The construction uses

$$
\phi(i,1)\cdot\phi(i-1,1)
\le 1-\frac{1}{2i^4}
$$

and

$$
f(i)<\frac{1}{2i^4}
$$

to ensure the tie-breaker cannot make an inexact match beat an exact match.

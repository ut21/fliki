---
title: Input Tape Retrieval via Layer-Norm Hash
type: construction
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Appendix D, Lemmas 3-5
depends_on:
  - ../objects/layer_norm_hash.md
  - ../objects/strict_causal_attention.md
used_by:
  - ../results/turing_machine_simulation.md
---

# Input Tape Retrieval via Layer-Norm Hash

Let $h_1,\ldots,h_{i-1}$ be tape positions. Define

$$
\phi_i=
\begin{cases}
\phi(i,1), & 1\le i\le n,\\
\phi(h_i,1), & \text{otherwise}.
\end{cases}
$$

Use one attention head with

$$
Q_i=\langle\phi_i,-1\rangle,
$$

$$
K_j=\langle\phi_j,\mathbf{1}[n<j]\rangle,
$$

$$
V_j=\langle\phi_j,\sigma_j\rangle.
$$

Let the output be

$$
\bar V=\langle\bar\phi,\bar\sigma\rangle.
$$

Then for $i>n$,

$$
1\le h_i\le n
\iff
\bar\phi=\phi_i.
$$

If $1\le h_i\le n$, then

$$
\bar\sigma=\sigma_{h_i}.
$$

The contrapositive direction uses the fact that if $q$ is strictly outside all integer keys $k_j$, then

$$
\phi_q\ne\frac{1}{m}\sum_{j=1}^m\phi_{k_j}.
$$

---
title: Almost-Orthogonal Index Lookup
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.3.2"
depends_on:
  - index_lookup.md
---

# Almost-Orthogonal Index Lookup

Let $x_1,
\ldots,x_N\in\mathbb{R}^m$ satisfy

$$
|x_i^\top x_j|\le \epsilon
\quad (i\ne j),
\qquad
x_i^\top x_i\ge 1-\epsilon.
$$

With $m=O(\log N)$, such vectors exist with high probability by random $\{\pm 1/\sqrt m\}$ sampling.

The target is

$$
\operatorname{aoLookup}:(\mathbb{R}^{2m+1})^+\to\mathbb{R}^+,
$$

$$
\operatorname{aoLookup}\left(
\begin{bmatrix}x_{q_1}\\x_1\\v_1\end{bmatrix},
\ldots,
\begin{bmatrix}x_{q_n}\\x_n\\v_n\end{bmatrix}
\right)
=
(v_{q_1},
\ldots,v_{q_n}).
$$

Using the same projections as one-hot lookup,

$$
q_i^\top k_j=x_{q_i}^\top x_j.
$$

For $\epsilon=1/4$, the target score is at least $3/4$, all non-target scores are at most $1/4$, and the hard-attention lookup is exact.

Soft-attention gap:

$$
\gamma=1-2\epsilon.
$$

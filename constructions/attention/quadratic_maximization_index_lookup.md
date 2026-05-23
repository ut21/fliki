---
title: Quadratic-Maximization Index Lookup
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.3.4"
depends_on:
  - index_lookup.md
  - ../../objects/positional_encodings.md
---

# Quadratic-Maximization Index Lookup

Assume positional features $j$ and $j^2$. Define the target

$$
\operatorname{qmLookup}:(\mathbb{R}^{5})^+\to\mathbb{R}^+,
$$

$$
\operatorname{qmLookup}\left(
\begin{bmatrix}q_1\\q_1^2\\1^2\\1\\v_1\end{bmatrix},
\ldots,
\begin{bmatrix}q_n\\q_n^2\\n^2\\n\\v_n\end{bmatrix}
\right)
=
(v_{q_1},
\ldots,v_{q_n}).
$$

Use query and key projections so that

$$
q_i'=\begin{bmatrix}q_i\\1\end{bmatrix},
\qquad
k_j'=\begin{bmatrix}2j\\-j^2\end{bmatrix}.
$$

Then

$$
s_{i,j}=q_i'^\top k_j'=2q_i j-j^2.
$$

This quadratic is uniquely maximized at

$$
j=q_i.
$$

Under hard attention, lookup is exact. Under soft attention, the non-target score gap is $\gamma=1$.

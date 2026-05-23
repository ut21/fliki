---
title: One-Hot Index Lookup
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.3.1"
depends_on:
  - ../../objects/categorical_representations.md
  - index_lookup.md
---

# One-Hot Index Lookup

Let $e_1,
\ldots,e_N\in\mathbb{R}^N$ be one-hot position encodings. The target is

$$
\operatorname{ohLookup}:
(\mathbb{R}^{2N+1})^+\to\mathbb{R}^+,
$$

$$
\operatorname{ohLookup}\left(
\begin{bmatrix}e_{q_1}\\e_1\\v_1\end{bmatrix},
\ldots,
\begin{bmatrix}e_{q_n}\\e_n\\v_n\end{bmatrix}
\right)
=
(v_{q_1},
\ldots,v_{q_n}).
$$

Use projections

$$
W^{(Q)}=\begin{bmatrix}I&0&0\end{bmatrix},
\qquad
W^{(K)}=\begin{bmatrix}0&I&0\end{bmatrix},
\qquad
W^{(V)}=\begin{bmatrix}0&0&1\end{bmatrix}.
$$

Then

$$
q_i^\top k_j=e_{q_i}^\top e_j=\mathbf{1}[j=q_i].
$$

Under hard attention, the lookup is exact. Under soft attention, the score gap is $\gamma=1$.

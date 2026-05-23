---
title: Average-Hard Simulation of Unique-Hard Attention
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.6"
depends_on:
  - ../../objects/hardmax.md
---

# Average-Hard Simulation of Unique-Hard Attention

Suppose attention scores satisfy a margin condition: for every $i,j$, either

$$
s_{i,j}=\max_{j'}s_{i,j'}
$$

or

$$
s_{i,j}<\max_{j'}s_{i,j'}-\gamma.
$$

To simulate unique-hard tie-breaking under average-hard attention, augment query and key vectors by a tie-breaking coordinate:

$$
\hat q_i=\begin{bmatrix}q_i\\\gamma\end{bmatrix},
\qquad
\hat k_j=\begin{bmatrix}k_j\\t(j)\end{bmatrix}.
$$

Typical choices:

$$
t(j)=-\frac{1}{j}
\quad\text{or}\quad
\frac{j}{n}
$$

for rightmost selection, and

$$
t(j)=\frac{1}{j}
\quad\text{or}\quad
-\frac{j}{n}
$$

for leftmost selection.

The perturbation must be smaller than the original score gap $\gamma$.

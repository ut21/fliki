---
title: Dyck-1 Recognition by Running Balance
type: example-construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 9.2.1"
depends_on:
  - ../constructions/attention/uniform_average_attention.md
  - ../constructions/feedforward/comparator_ffns.md
---

# Dyck-1 Recognition by Running Balance

For alphabet $\{(,)\}$, encode

$$
o_i=
\begin{cases}
+1, & x_i=(,\\
-1, & x_i=).
\end{cases}
$$

Define the running balance

$$
B_i=\sum_{j=1}^i o_j.
$$

A string is in Dyck-1 iff

$$
B_i\ge 0\quad\text{for all }i,
\qquad
B_n=0.
$$

Using future-masked uniform average attention,

$$
\frac{B_i}{i}=\frac{1}{i}\sum_{j=1}^i o_j.
$$

Prefix violations are detected by

$$
E_i=\operatorname{ReLU}(-B_i/i).
$$

Aggregate errors by

$$
t_i=\frac{1}{i}\sum_{j=1}^i E_j.
$$

At the final position, acceptance requires

$$
t_n=0
\qquad\text{and}\qquad
B_n/n=0.
$$

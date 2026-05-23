---
title: Dyck-1-2 Recognition by Active Matching
type: example-construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 9.2.2"
depends_on:
  - ../constructions/attention/predecessor_attention.md
  - ../constructions/feedforward/conditional_ffn.md
  - ../objects/attention_masking.md
---

# Dyck-1-2 Recognition by Active Matching

Dyck-1-2 is the one-bracket Dyck language restricted to nesting depth at most $2$.

Initialize each position by

$$
x_i=
\begin{bmatrix}
o_i\\1\\0\\0\\i/n
\end{bmatrix},
\qquad
 o_i=\begin{cases}+1,&x_i=(,\\-1,&x_i=).
\end{cases}
$$

The second coordinate is an active bit: $1$ means unmatched, $0$ means matched.

## Depth-1 pass

Fetch neighboring bracket types $o_{i-1},o_{i+1}$. Set

$$
a_i=
\begin{cases}
0, & o_i=+1\text{ and }o_{i+1}=-1,\\
0, & o_i=-1\text{ and }o_{i-1}=+1,\\
1, & \text{otherwise}.
\end{cases}
$$

## Depth-2 pass

Select nearest active unmatched brackets to the left and right, then apply the same matching update to obtain $a_i'$.

## Acceptance

Accept iff

$$
a_1'=a_2'=\cdots=a_n'=0.
$$

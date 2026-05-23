---
title: Dyck-k-D Recognition by Iterative Matching
type: example-construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 9.2.3"
depends_on:
  - dyck_1_2_active_matching.md
---

# Dyck-k-D Recognition by Iterative Matching

Dyck-$k$-$D$ is the Dyck language over $k$ parenthesis types with nesting depth at most $D$.

Grammar:

$$
S := \epsilon \mid (_i S )_i S,
\qquad i\in[k].
$$

Encode parenthesis type and polarity by

$$
o_i\in\{-k,
\ldots,-1,+1,
\ldots,+k\}.
$$

Generalization of Dyck-1-2:

1. maintain an active bit at each position;
2. select nearest active unmatched positions on the left and right;
3. check whether they form a matching pair of the same type;
4. repeat for depths $1,
\ldots,D$;
5. accept iff no active unmatched positions remain.

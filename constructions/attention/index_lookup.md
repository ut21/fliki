---
title: Index Lookup
type: construction-family
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 5.3"
depends_on:
  - ../../objects/self_attention.md
children:
  - one_hot_index_lookup.md
  - almost_orthogonal_index_lookup.md
  - layernorm_hash_index_lookup.md
  - quadratic_maximization_index_lookup.md
---

# Index Lookup

At each position $i$, assume:

- query index $q_i\in[n]$,
- an encoding of the current position $i$,
- value $v_i$.

The lookup target is

$$
\operatorname{lookup}\left(
\begin{bmatrix}q_1\\1\\v_1\end{bmatrix},
\ldots,
\begin{bmatrix}q_n\\n\\v_n\end{bmatrix}
\right)
=
(v_{q_1},
\ldots,v_{q_n}).
$$

Cookbook implementations:

| construction | width | requirement |
|---|---:|---|
| [One-Hot Index Lookup](one_hot_index_lookup.md) | $\Theta(N)$ | one-hot positional encodings |
| [Almost-Orthogonal Index Lookup](almost_orthogonal_index_lookup.md) | $\Theta(\log N)$ | almost-orthogonal positional vectors |
| [Layernorm-Hash Index Lookup](layernorm_hash_index_lookup.md) | $\Theta(1)$ | selective layer norm |
| [Quadratic-Maximization Index Lookup](quadratic_maximization_index_lookup.md) | $\Theta(1)$ | positional features $j$ and $j^2$ |

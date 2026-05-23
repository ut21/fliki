---
title: Circumventing Layer Normalization
type: construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 6.3"
depends_on:
  - ../../objects/standard_layer_normalization.md
  - ../../objects/boolean_representations.md
---

# Circumventing Layer Normalization

For layer norm with $\beta=0$, encode each coordinate with an additive inverse pair:

$$
\begin{bmatrix}x\\-x\end{bmatrix}.
$$

Then the vector has mean zero. Layer norm can only rescale the pair:

$$
\operatorname{LN}\left(\begin{bmatrix}x\\-x\end{bmatrix}\right)
=
\begin{bmatrix}cx\\-cx\end{bmatrix}
$$

for some scalar $c$.

Thus signs and paired truth values are preserved under normalization.

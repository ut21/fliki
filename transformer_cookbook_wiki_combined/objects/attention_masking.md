---
title: Attention Masking
type: object
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Sections 2.2.2 and 5"
---

# Attention Masking

Masking modifies attention scores by setting disallowed positions to $-\infty$.

## Future-masked attention

$$
s_{i,j}=
\begin{cases}
q_i^\top k_j/\sqrt{d_{\mathrm{key}}}, & j\le i,\\
-\infty, & \text{otherwise}.
\end{cases}
$$

## Strict future-masked attention

$$
s_{i,j}=
\begin{cases}
q_i^\top k_j/\sqrt{d_{\mathrm{key}}}, & j<i,\\
-\infty, & \text{otherwise}.
\end{cases}
$$

## Past-masked attention

$$
s_{i,j}=
\begin{cases}
q_i^\top k_j/\sqrt{d_{\mathrm{key}}}, & j\ge i,\\
-\infty, & \text{otherwise}.
\end{cases}
$$

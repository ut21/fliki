---
title: Hahn Sensitivity Bound
type: result
paper: Hahn, "Theoretical Limitations of Self-Attention in Neural Sequence Models", TACL 2020
source: Section 3, Theorem 1
aliases:
  - Theorem 1
  - vanishing sensitivity
  - Hahn lower bound
assumptions:
  - softmax-attention
depends_on:
  - ../objects/attention_weighting_function.md
---

# Hahn Sensitivity Bound

## Statement

For any fixed transformer with softmax attention and parameters $\theta$, and any input position $i$,

$$
\left|\frac{\partial \, \mathrm{output}_n}{\partial \, x_i}\right| \;\to\; 0 \quad \text{as } n \to \infty.
$$

The output's sensitivity to any single input position vanishes as sequence length grows.

## Consequence

No fixed softmax-attention transformer recognizes:

- **Parity**: $\{w \in \{0,1\}^* : \#_1(w) \equiv 0 \pmod{2}\}$,
- **Majority**: $\{w \in \{0,1\}^* : \#_1(w) > n/2\}$,
- **Dyck-2**: the balanced-bracket language over two bracket types.

All three require sensitivity to individual tokens that persists as $n$ grows.

## Proof idea

Softmax attention distributes weight across all $n$ positions. Each head's output at position $i$ is a convex combination of value vectors, where each coefficient is $O(1/n)$ in expectation. Backpropagating through $d$ layers gives sensitivity $O((1/n)^d) \to 0$.

## Contrast

[Chiang and Cholak 2022](../results/parity_hard_attention.md) show that **hard** attention transformers circumvent this bound: argmax attention assigns weight 1 to a single position, preserving sensitivity.

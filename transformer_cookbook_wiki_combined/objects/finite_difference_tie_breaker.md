---
title: Finite-Difference Tie Breaker
type: construction
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Appendix E.1, Definitions 6-7 and Lemmas 9-10
aliases:
  - rightmost retrieval tie breaker
  - f(i)
depends_on:
  - ../objects/layer_norm_hash.md
related:
  - ../constructions/rightmost_retrieval_via_layer_norm_hash.md
---

# Finite-Difference Tie Breaker

Define

$$
f(i,0)=\frac{1}{i},
$$

and

$$
f(i,k+1)=f(i-1,k)-f(i,k).
$$

For any $k$ and $i>k$,

$$
f(i,k)=\frac{k!}{\prod_{j=0}^k(i-j)}.
$$

Let

$$
\epsilon=10^{-10}.
$$

Define the final tie breaker

$$
f(i)=
\begin{cases}
1/1000-\epsilon i, & i\le4,\\
f(i,3)/100, & i\ge5.
\end{cases}
$$

Then

$$
f(i)<\frac{1}{2i^4}
$$

for all $i\ge1$.

## Role

In [rightmost retrieval](../constructions/rightmost_retrieval_via_layer_norm_hash.md), the term $f(i)$ breaks ties among exact layer-norm-hash matches while remaining smaller than the inexact-match gap from Lemma 8 of [layer-norm hash](layer_norm_hash.md).

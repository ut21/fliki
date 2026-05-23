---
title: Layer-Norm Hash
type: construction
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source:
  - Section 3.1, Definition 3 and Lemmas 1-2
  - Appendix D, Lemmas 3-5
  - Appendix E, Lemmas 6-10
aliases:
  - LN hash
  - phi hash
  - layer-normalized scalar hash
depends_on:
  - ../objects/layer_norm.md
related:
  - ../constructions/input_tape_retrieval_via_layer_norm_hash.md
  - ../constructions/rightmost_retrieval_via_layer_norm_hash.md
  - ../results/regular_language_recognition_with_linear_decoding.md
  - ../results/turing_machine_simulation.md
---

# Layer-Norm Hash

## Definition

For $x,y\in\mathbb{R}$, define

$$
\phi(x,y)\coloneqq\operatorname{LN}(x,y,-x,-y).
$$

For scalar encoding, define

$$
\phi_x\coloneqq\phi(x,1).
$$

Since $(x,y,-x,-y)$ has mean zero,

$$
\phi(x,y)
=
\frac{(x,y,-x,-y)}{\sqrt{2x^2+2y^2}}.
$$

Hence

$$
\phi_x
=
\frac{(x,1,-x,-1)}{\sqrt{2x^2+2}}.
$$

## Result: Lemma 1, Scale Invariance

For any $x\in\mathbb{R}$ and $i\in\mathbb{R}_{>0}$,

$$
\phi(x/i,1/i)=\phi_x.
$$

Equivalently,

$$
\phi(x/i,1/i)=\phi(x,1).
$$

## Result: Lemma 2, Equality Check

For any $q,k\in\mathbb{R}$,

$$
\phi_q\cdot\phi_k=1
\iff
q=k.
$$

Moreover,

$$
\phi_q\cdot\phi_k
=
\frac{qk+1}{\sqrt{(q^2+1)(k^2+1)}}.
$$

## Input Tape Retrieval Setup

Let $h_1,\ldots,h_{i-1}$ be tape positions and define

$$
\phi_i=
\begin{cases}
\phi(i,1), & 1\le i\le n,\\
\phi(h_i,1), & \text{otherwise}.
\end{cases}
$$

Use the attention head

$$
\operatorname{Query}_i=\langle\phi_i,-1\rangle,
$$

$$
\operatorname{Key}_j=\langle\phi_j,\mathbf{1}[n<j]\rangle,
$$

$$
v_j=\langle\phi_j,\sigma_j\rangle.
$$

Let

$$
\bar v=\langle\bar\phi,\bar\sigma\rangle.
$$

## Result: Lemma 3, Input-Position Detection

Let $i>n$. Then

$$
1\le h_i\le n
\iff
\bar\phi=\phi_i.
$$

## Result: Lemma 4, Input-Symbol Retrieval

Let $i>n$. If

$$
1\le h_i\le n,
$$

then

$$
\bar\sigma=\sigma_{h_i}.
$$

## Result: Lemma 5, No Out-of-Range False Positive

Let $q\in\mathbb{Z}$ and $k_j\in\mathbb{Z}$ for $1\le j\le m$. Let

$$
\succ\in\{<,>\}.
$$

If for all $j$,

$$
q\succ k_j,
$$

then

$$
\phi_q\ne\frac{1}{m}\sum_{j=1}^m\phi_{k_j}.
$$

## Rightmost Retrieval Setup

Let $h_1,\ldots,h_{i-1}$ be tape positions. Assume that if $h\ne h_j$ for all $j<i$, then either $h\prec h_j$ for all $j<i$, where $\prec$ is fixed as either $<$ or $>$.

Let $f(i)$ be a tie-breaking term. Define

$$
\phi_i\coloneqq\phi(h_i/i,1/i),
$$

$$
\psi_i\coloneqq\phi(f(i),1).
$$

Let

$$
e_1=\langle 1,0,0,0\rangle.
$$

Use the attention head

$$
\operatorname{Query}_i=\langle\phi_i,e_1\rangle,
$$

$$
\operatorname{Key}_j=\langle\phi_j,-\psi_j\rangle,
$$

$$
v_j=\langle\phi_j,\delta_j\rangle.
$$

Let

$$
\bar v=\langle\bar\phi,\bar\delta\rangle.
$$

## Result: Lemma 6, Previous-Position Detection

There exists $j<i$ such that

$$
h_i=h_j
$$

if and only if

$$
\bar\phi=\phi_i.
$$

## Result: Lemma 7, Rightmost Previous-Value Retrieval

If there exists $j<i$ such that

$$
h_i=h_j,
$$

then

$$
\bar\delta=\delta_j
$$

for the greatest such $j$.

## Result: Lemma 8, Inexact-Match Gap

For any $i\ge2$,

$$
\phi(i,1)\cdot\phi(i-1,1)
\le
1-\frac{1}{2i^4}.
$$

## Definition: Finite-Difference Tie Breaker

Define

$$
f(i,0)=\frac{1}{i},
$$

and recursively,

$$
f(i,k+1)=f(i-1,k)-f(i,k).
$$

## Result: Lemma 9, Closed Form

For any $k$ and $i>k$,

$$
f(i,k)=\frac{k!}{\prod_{j=0}^k(i-j)}.
$$

## Definition: Final Tie Breaker

Let

$$
\epsilon=10^{-10}.
$$

For $i\ge1$, define

$$
f(i)=
\begin{cases}
1/1000-\epsilon i, & i\le4,\\
f(i,3)/100, & i\ge5.
\end{cases}
$$

## Result: Lemma 10, Tie-Breaker Bound

For $i\ge1$,

$$
f(i)<\frac{1}{2i^4}.
$$

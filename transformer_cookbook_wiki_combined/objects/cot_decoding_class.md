---
title: CoT Decoding Class
type: definition
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 2, Preliminaries
aliases:
  - CoT(t(n))
  - intermediate decoding class
  - chain-of-thought decoding class
related:
  - ../objects/decoder_only_transformer.md
---

# CoT Decoding Class

Let $\Sigma$ be a finite alphabet and let

$$
f:\Sigma^*\to\Sigma
$$

be the next-token function parameterized by a decoder-only transformer.

Define the $k$-step extension of $f$ recursively by

$$
f^0(x)=x,
$$

$$
f^{k+1}(x)=f^k(x)\cdot f(f^k(x)),
$$

where $\cdot$ denotes string concatenation.

The transformer is run on input $x$ with $t(|x|)$ additional decoding steps by computing

$$
f^{t(|x|)}(x).
$$

For a designated accept token $1\in\Sigma$, define

$$
\operatorname{CoT}(t(n))
$$

as the class of languages recognized by some transformer using $t(n)$ decoding steps, i.e.

$$
L\in\operatorname{CoT}(t(n))
\iff
\exists f\;\forall x,
\quad
x\in L \iff f^{t(|x|)}(x)=1.
$$

## Used by

- [CoT Sandwich Theorem](../results/cot_sandwich_theorem.md)
- [Time Lower Bound](../results/time_lower_bound.md)
- [Quadratic Time Upper Bound](../results/quadratic_time_upper_bound.md)
- [Space Upper Bound](../results/space_upper_bound.md)

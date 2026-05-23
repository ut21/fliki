---
title: Transformer Classifier
type: model-definition
paper: Merrill and Sabharwal, "A Logic for Expressing Log-Precision Transformers", NeurIPS 2023
source: Section 2.1, Definitions 1-2
aliases:
  - transformer encoder binary classifier
  - p-precision transformer classifier
related:
  - log_precision_transformer.md
  - self_attention.md
---

# Transformer Classifier

A $p$-precision transformer classifier maps strings to bits:

$$
T:\Sigma^*\to\{0,1\}.
$$

For input $x\in\Sigma^n$, the classifier computes embeddings, self-attention blocks, activation blocks, and an output classifier head.

The output is

$$
T(x)=\kappa(h^d_n).
$$

The paper studies fixed-parameter classifiers whose forward-pass precision may depend on $n$.

## Scope

The results also apply to larger fixed output arity and causal decoder-only variants without generated-token feedback.

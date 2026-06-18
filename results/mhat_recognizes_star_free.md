---
title: MHAT Recognizes Exactly the Star-Free Languages
type: result
paper: Angluin, Chiang, and Yang, "Masked Hard Attention Transformers Recognize Exactly the Star-Free Languages", NeurIPS 2023
source: Section 1, Theorem 1 (Main Theorem)
aliases:
  - Theorem 1
  - MHAT star-free characterization
  - exact characterization of masked hard attention transformers
assumptions:
  - strict-causal-attention
  - hardmax-attention
depends_on:
  - ../objects/star_free_languages.md
  - ../objects/first_order_logic_strings.md
  - ../objects/hardmax.md
  - ../objects/strict_causal_attention.md
---

# MHAT Recognizes Exactly the Star-Free Languages

## Statement

Let **MHAT** denote the class of languages recognized by masked hard attention transformers (multi-layer, finite-precision, with leftmost-hardmax attention and causal masking). Then:

$$
\mathbf{MHAT} = \text{Star-free}.
$$

This is an exact characterization: every star-free language is MHAT-recognizable, and every MHAT-recognizable language is star-free.

## Model

A **masked hard attention transformer** (MHAT) is a decoder-only transformer with:

- **Causal masking**: position $i$ attends only to positions $j \le i$ ([strict causal attention](../objects/strict_causal_attention.md)).
- **Unique hard attention**: each head assigns weight 1 to the leftmost position achieving the maximum score ([leftmost hardmax](../objects/hardmax.md)).
- **Finite precision**: all parameters and activations are rational numbers of bounded bit-width.
- **Positional encodings**: absolute position encodings are available.

## Upper bound (MHAT ⊆ Star-free)

Any MHAT-recognizable language is star-free. The key insight is that leftmost-hardmax attention, under causal masking, can only retrieve information that is expressible as a first-order query over the string ordering. Inductively, each layer computes functions definable in $\mathrm{FO}[<]$, so the final output is $\mathrm{FO}[<]$-definable, i.e., star-free.

## Lower bound (Star-free ⊆ MHAT)

Every star-free language is recognized by some MHAT. The construction proceeds by induction on the star-free expression:

- **Atomic facts** (character $a$ at position $i$): recoverable from positional encodings.
- **Boolean combinations**: implemented by the feed-forward layer.
- **Concatenation and existential quantification** over positions: computed by a new attention layer that retrieves the relevant position via a score function.

## Significance

This is the first **exact** characterization of a natural transformer variant in terms of a formal language class. Prior results established only inclusions (upper or lower bounds). The star-free / $\mathrm{FO}[<]$ class is well-understood, giving a clean semantic picture of what masked hard attention transformers can and cannot compute.

## Contrast with other transformer models

| Model | Language class |
|---|---|
| MHAT (masked hard attention) | Star-free = $\mathrm{FO}[<]$ |
| Saturated transformer | $\subseteq \mathbf{TC}^0$ |
| Hard attention + arbitrary precision | Turing-complete |
| Log-precision decoder + CoT | $\mathbf{TIME}(t(n))$ lower bound |

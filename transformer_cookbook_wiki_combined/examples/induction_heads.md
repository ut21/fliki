---
title: Induction Heads
type: example-construction
paper: "Yang et al., The Transformer Cookbook, arXiv:2510.00368, 2025"
source: "Section 9.1"
depends_on:
  - ../constructions/attention/predecessor_attention.md
  - ../constructions/attention/index_lookup.md
---

# Induction Heads

The induction-head task is a length-preserving map

$$
\operatorname{Induct}:\Sigma^+\to\Sigma^+.
$$

At a position whose current symbol is $A$, if a previous occurrence of $A$ was followed by $B$, the target output is $B$.

## Most-recent induction

Use the rightmost previous occurrence of the current symbol. If no previous occurrence exists, output the current symbol.

Core operations:

1. encode current and predecessor symbols;
2. retrieve a previous matching current symbol;
3. output the symbol following that retrieved occurrence.

Dependencies: [Predecessor Attention](../constructions/attention/predecessor_attention.md), [Index Lookup](../constructions/attention/index_lookup.md), and Boolean/conditional FFNs.

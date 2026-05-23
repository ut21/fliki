---
title: Strict Causal Attention
type: attention-mask
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: Section 2.1, Definition 2 and lower-bound assumptions
aliases:
  - strict causal masking
related:
  - ../objects/decoder_only_transformer.md
---

# Strict Causal Attention

In the paper's notation, the causal visibility bound is $c(i)$.

Standard causal attention uses

$$
c(i)=i,
$$

so token $i$ may attend to positions $1,\ldots,i$.

Strict causal attention uses

$$
c(i)=i-1,
$$

so token $i$ may attend to positions $1,\ldots,i-1$ but not to itself.

## Used by

- [Turing Machine Simulation](../results/turing_machine_simulation.md)
- [Input Tape Retrieval via Layer-Norm Hash](../constructions/input_tape_retrieval_via_layer_norm_hash.md)
- [Rightmost Retrieval via Layer-Norm Hash](../constructions/rightmost_retrieval_via_layer_norm_hash.md)

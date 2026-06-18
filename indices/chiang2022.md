---
title: "Chiang and Cholak 2022: Overcoming a Theoretical Limitation of Self-Attention"
type: index
paper: Chiang and Cholak, "Overcoming a Theoretical Limitation of Self-Attention", ACL 2022
source: https://aclanthology.org/2022.acl-long.527/
---

# Chiang and Cholak — Overcoming a Theoretical Limitation of Self-Attention

**Proceedings of ACL**, 2022.

Shows that the [Hahn 2020](hahn2020.md) sensitivity lower bound does not apply to hard-attention transformers by constructing an $O(1)$-layer hard-attention transformer that computes Parity.

## Results

- [Parity via Hard Attention](../results/parity_hard_attention.md)

## Relation to other work

- [Hahn 2020](hahn2020.md): the lower bound being circumvented.
- [Angluin et al. 2023](angluin2023.md): exact characterization of masked hard-attention expressivity as star-free; Parity is not star-free, so is not recognized by MHAT — a finer-grained distinction than Chiang & Cholak's positive result (which uses unmasked hard attention).

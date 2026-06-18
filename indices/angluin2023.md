---
title: "Angluin et al. 2023: Masked Hard Attention Transformers Recognize Exactly the Star-Free Languages"
type: index
paper: Angluin, Chiang, and Yang, "Masked Hard Attention Transformers Recognize Exactly the Star-Free Languages", NeurIPS 2023
source: https://proceedings.neurips.cc/paper_files/paper/2023/hash/b3500a9f6c8a91f62a60d0e81fda6ef9-Abstract-Conference.html
---

# Angluin, Chiang, and Yang — Masked Hard Attention Transformers Recognize Exactly the Star-Free Languages

**Advances in Neural Information Processing Systems (NeurIPS)**, 2023.

This paper gives the first exact characterization of a natural transformer variant in terms of a formal language class. It proves that masked hard attention transformers (MHAT) recognize exactly the star-free regular languages, equivalent to the $\mathrm{FO}[<]$-definable languages.

## Core objects

- [Star-Free Languages](../objects/star_free_languages.md)
- [First-Order Logic over Strings](../objects/first_order_logic_strings.md)
- [Hardmax Attention Weighting](../objects/hardmax.md)
- [Strict Causal Attention](../objects/strict_causal_attention.md)

## Results

- [MHAT Recognizes Exactly the Star-Free Languages](../results/mhat_recognizes_star_free.md)

## Key contributions

1. **Exact characterization**: $\mathbf{MHAT} = \text{Star-free}$, proved via matching upper and lower bounds.
2. **Upper bound** (MHAT ⊆ star-free): Every MHAT-computable function is $\mathrm{FO}[<]$-definable; proved by tracking definability through each layer.
3. **Lower bound** (star-free ⊆ MHAT): Every star-free language has an MHAT recognizer; proved by constructive induction on the star-free expression.

## Key definitions in this paper

- **MHAT**: Multi-layer transformer with leftmost-hardmax attention and causal (masked) attention.
- **Star-free**: Regular languages definable without Kleene star (using union, concatenation, complement).
- **FO[<]**: First-order logic over string positions with the linear order.

## Relation to other work

- [Pérez et al. 2021](perez2021.md): Hard attention + **arbitrary precision** → Turing complete. The key difference here is **finite precision** + **masking**, which sharply limits expressivity to star-free.
- [Merrill et al. 2022](merrill2022.md): Saturated attention → $\mathbf{TC}^0$. Average-hardmax (saturated) attention is more expressive than unique-hardmax.
- [Strobl et al. 2024](strobl2024.md): Survey covering this result alongside the broader landscape.

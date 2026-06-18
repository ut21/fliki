---
title: "Strobl et al. 2024: Transformers as Recognizers of Formal Languages"
type: index
paper: Strobl, Merrill, Weiss, Chiang, and Angluin, "Transformers as Recognizers of Formal Languages: A Survey on Expressivity", TACL 2024
source: https://aclanthology.org/2024.tacl-1.43/
---

# Strobl, Merrill, Weiss, Chiang, and Angluin — Transformers as Recognizers of Formal Languages: A Survey on Expressivity

**Transactions of the Association for Computational Linguistics**, 12:1098–1112, 2024.

This survey provides a unified framework for comparing transformer expressivity results across different model variants (attention type, precision, masking, normalization). It organizes results from many papers into a single taxonomy, identifying where gaps remain.

## Taxonomy of transformer variants

The survey categorizes transformers along several axes:

| Axis | Variants |
|---|---|
| Attention | Softmax, average-hardmax (saturated), unique-hardmax |
| Masking | Causal (masked), bidirectional (full) |
| Precision | Arbitrary, log-precision, finite |
| Positional encodings | None, absolute, relative |
| Layers | Fixed depth, depth growing with input |

## Key results organized by model

| Model | Language class | Source |
|---|---|---|
| Masked unique-hardmax, finite precision | Star-free ($\mathrm{FO}[<]$) | [Angluin et al. 2023](angluin2023.md) |
| Saturated transformer | $\subseteq \mathbf{TC}^0$ | [Merrill et al. 2022](merrill2022.md) |
| Hard attention, arbitrary precision | Turing-complete | [Pérez et al. 2021](perez2021.md) |
| Log-precision decoder + CoT | $\supseteq \mathbf{TIME}(t(n))$ | [Merrill & Sabharwal 2024](../results/time_lower_bound.md) |

## Fliki entries related to this survey

### Architecture

- [Decoder-Only Transformer](../objects/decoder_only_transformer.md)
- [Encoder-Only Transformer](../objects/encoder_only_transformer.md)
- [Transformer](../objects/transformer.md)

### Attention

- [Hardmax Attention Weighting](../objects/hardmax.md)
- [Saturated Attention](../objects/saturated_attention.md)
- [Strict Causal Attention](../objects/strict_causal_attention.md)

### Language classes

- [Star-Free Languages](../objects/star_free_languages.md)
- [First-Order Logic over Strings](../objects/first_order_logic_strings.md)
- [Uniform TC⁰](../objects/tc0_circuits.md)

### Results

- [MHAT Recognizes Exactly the Star-Free Languages](../results/mhat_recognizes_star_free.md)
- [Saturated Transformers in TC⁰](../results/saturated_transformers_in_tc0.md)
- [Turing Completeness of Hard Attention](../results/turing_completeness_hard_attention.md)
- [Turing Machine Simulation](../results/turing_machine_simulation.md)
- [CoT Sandwich Theorem](../results/cot_sandwich_theorem.md)

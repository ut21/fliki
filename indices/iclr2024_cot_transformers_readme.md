---
title: ICLR 2024 CoT Transformers Wiki Entries
paper: Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
source: https://proceedings.iclr.cc/paper_files/paper/2024/file/1f59721c106ea80f613299039112f651-Paper-Conference.pdf
---

# ICLR 2024 CoT Transformers Wiki Entries

This bundle contains compact wiki entries for the paper's central definitions, constructions, and results.

## Rendering note

This version uses MathJax-style delimiters: inline math is written as `$...$` and display math as `$$...$$`.

## Core objects

- [CoT Decoding Class](objects/cot_decoding_class.md)
- [Decoder-Only Transformer](objects/decoder_only_transformer.md)
- [Log-Precision Transformer](objects/log_precision_transformer.md)
- [Saturated Attention](objects/saturated_attention.md)
- [Strict Causal Attention](objects/strict_causal_attention.md)
- [Deterministic Finite-State Automaton](objects/deterministic_finite_state_automaton.md)
- [Multitape Turing Machine](objects/multitape_turing_machine.md)
- [Layer Norm](objects/layer_norm.md)
- [Pre-Norm](objects/pre_norm.md)
- [Projected Pre-Norm](objects/projected_pre_norm.md)
- [Multi-Pre-Norm](objects/multi_pre_norm.md)
- [Layer-Norm Hash](objects/layer_norm_hash.md)
- [Finite-Difference Tie Breaker](objects/finite_difference_tie_breaker.md)

## Constructions

- [Input Tape Retrieval via Layer-Norm Hash](constructions/input_tape_retrieval_via_layer_norm_hash.md)
- [Rightmost Retrieval via Layer-Norm Hash](constructions/rightmost_retrieval_via_layer_norm_hash.md)
- [Turing Machine Diff Sequence](constructions/turing_machine_diff_sequence.md)

## Results

- [Multi-Pre-Norm Simulation by Projected Pre-Norm](results/multi_pre_norm_simulation_by_projected_pre_norm.md)
- [Regular Language Recognition with Linear Decoding](results/regular_language_recognition_with_linear_decoding.md)
- [Turing Machine Simulation](results/turing_machine_simulation.md)
- [Time Lower Bound](results/time_lower_bound.md)
- [Quadratic Time Upper Bound](results/quadratic_time_upper_bound.md)
- [Space Upper Bound](results/space_upper_bound.md)
- [CoT Sandwich Theorem](results/cot_sandwich_theorem.md)
- [Logarithmic Decoding Step Bound](results/logarithmic_decoding_step_bound.md)
- [Linear Decoding Step Bounds](results/linear_decoding_step_bounds.md)
- [Polynomial Decoding Equals P](results/polynomial_decoding_equals_p.md)

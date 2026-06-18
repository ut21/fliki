# Fliki — The FLaNN Wiki

A reference wiki for **Formal Language and Neural Networks (FLaNN)** research, focused on the expressive power of transformer architectures.

Browse at: **https://ut21.github.io/fliki/**

## What's here

Pages are organized into four categories:

| Directory | Contents |
|---|---|
| `objects/` | Definitions: transformer variants, attention types, language classes, complexity classes |
| `results/` | Theorems, lemmas, and corollaries with formal statements |
| `constructions/` | Sub-constructions used in proofs |
| `examples/` | Worked examples (Dyck languages, induction heads) |
| `indices/` | Cross-reference indexes (by assumption, by paper) |

Each page has YAML frontmatter declaring its `type`, source `paper`, `assumptions`, and dependencies.

## Papers currently covered

- Merrill and Sabharwal, "The Expressive Power of Transformers with Chain of Thought", ICLR 2024
- Pérez, Marinković, and Barceló, "Attention is Turing Complete", JMLR 2021
- Merrill, Sabharwal, and Smith, "Saturated Transformers are Constant-Depth Threshold Circuits", TACL 2022
- Angluin, Chiang, and Yang, "Masked Hard Attention Transformers Recognize Exactly the Star-Free Languages", NeurIPS 2023
- Strobl, Merrill, Weiss, Chiang, and Angluin, "Transformers as Recognizers of Formal Languages: A Survey on Expressivity", TACL 2024
- Yang et al., "The Transformer Cookbook", arXiv:2510.00368, 2025

## Contributing

1. Create a branch.
2. Add your Markdown file using one of the [templates](indices/templates.md).
3. Add the new path to `indices/site_index.json` (or run `node scripts/build_site_index.mjs` to regenerate it).
4. If you added a result, run `node scripts/build_assumption_index.mjs` to update the assumption index.
5. Run `node scripts/build_paper_index.mjs` to update the by-paper index.
6. Open a pull request.

## Build scripts

| Script | What it does |
|---|---|
| `scripts/build_assumption_index.mjs` | Regenerates `indices/assumption_index.json` and `indices/by_assumption.md` from result frontmatter |
| `scripts/build_site_index.mjs` | Regenerates `indices/site_index.json` by walking the filesystem |
| `scripts/build_paper_index.mjs` | Regenerates `indices/by_paper.md` by grouping all pages by their `paper` field |

Run all three after a batch of additions:

```sh
node scripts/build_site_index.mjs
node scripts/build_assumption_index.mjs
node scripts/build_paper_index.mjs
```

## Page format

```yaml
---
title: Result Title
type: result          # object | result | construction | example | index
paper: Author, "Title", Venue Year
source: Section 3, Theorem 1
assumptions:
  - log-precision     # ids from indices/assumptions.yml
depends_on:
  - ../objects/log_precision_transformer.md
---
```

For new assumptions, add an entry to `indices/assumptions.yml` and run `build_assumption_index.mjs`.

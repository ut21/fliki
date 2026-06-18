---
title: Wiki Entry Templates
type: index
---

# Wiki Entry Templates

Use these templates when adding or editing pages. Create a branch, add the Markdown file, then run the build scripts (or update `indices/site_index.json` manually), and open a pull request.

## Result

```md
---
title: Result Title
type: result
paper: Author, "Paper Title", Venue Year
source: Section 3, Theorem 1
aliases:
  - theorem name
assumptions:
  - log-precision
depends_on:
  - ../objects/log_precision_transformer.md
---

# Result Title

## Statement

Concise statement.

## Consequence

Concise consequence.
```

## Object

```md
---
title: Object Title
type: object
paper: Author, "Paper Title", Venue Year
source: Definition 1
aliases:
  - alternate name
related:
  - ../results/time_lower_bound.md
---

# Object Title

Compact definition.

## Used by

- [Time Lower Bound](../results/time_lower_bound.md)
```

## Construction

```md
---
title: Construction Title
type: construction
paper: Author, "Paper Title", Venue Year
source: Section 4
depends_on:
  - ../../objects/example_object.md
---

# Construction Title

## Goal

What the construction computes.

## Method

Brief steps.
```

## Paper Index

```md
---
title: Paper Wiki Entries
type: index
paper: Author, "Paper Title", Venue Year
source: https://example.com/paper.pdf
---

# Paper Wiki Entries

Compact entries for the paper's central definitions, constructions, and results.

## Core objects

- [Log-Precision Transformer](../objects/log_precision_transformer.md)

## Results

- [Time Lower Bound](../results/time_lower_bound.md)
```

## Assumptions

Use canonical assumption ids from `indices/assumptions.yml`.

Common ids include:

| Id | Meaning |
|---|---|
| `decoder-only` | Decoder-only (causal) architecture |
| `encoder-only` | Encoder-only (bidirectional) architecture |
| `log-precision` | Log-bounded precision |
| `arbitrary-precision` | Unbounded/arbitrary precision |
| `projected-pre-norm` | Projected pre-norm |
| `strict-causal-attention` | Strict causal (no self) masking |
| `saturated-attention` | Saturated (average-hardmax) attention |
| `hardmax-attention` | Unique/leftmost hardmax attention |
| `softmax-attention` | Standard softmax attention |
| `cot-decoding` | Chain-of-thought decoding |
| `uniform-tc0` | Uniform TC⁰ (complexity class) |

For new assumptions, add an entry to `indices/assumptions.yml` before using the id.

## Build scripts

After adding pages, regenerate the indexes:

```sh
node scripts/build_site_index.mjs        # regenerates site_index.json
node scripts/build_assumption_index.mjs  # regenerates by_assumption.md and assumption_index.json
node scripts/build_paper_index.mjs       # regenerates by_paper.md
```

You can also update `indices/site_index.json` manually instead of running the script.

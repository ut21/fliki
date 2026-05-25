---
title: Wiki Entry Templates
type: index
---

# Wiki Entry Templates

Use these templates when adding or editing pages. Create a branch, add the Markdown file, update `indices/site_index.json`, and open a pull request.

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

- `decoder-only`
- `log-precision`
- `finite-precision`
- `projected-pre-norm`
- `strict-causal-attention`
- `saturated-attention`
- `transformer-classifier`
- `fom`
- `log-uniform-tc0`

For new assumptions, add an entry to `indices/assumptions.yml`.

## Site Index

Add each new page path to `indices/site_index.json`:

```json
{
  "paths": [
    "objects/object_title.md",
    "results/result_title.md"
  ]
}
```

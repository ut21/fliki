---
title: First-Order Logic over Strings
type: object
paper: Angluin, Chiang, and Yang, "Masked Hard Attention Transformers Recognize Exactly the Star-Free Languages", NeurIPS 2023
source: Section 2, Preliminaries
aliases:
  - FO[<]
  - FO over strings
  - first-order definable languages
related:
  - ../objects/star_free_languages.md
  - ../results/mhat_recognizes_star_free.md
---

# First-Order Logic over Strings

**$\mathrm{FO}[<]$** is first-order logic interpreted over a string $w = w_1 \cdots w_n$ viewed as a relational structure:

- **Domain**: positions $\{1, \ldots, n\}$.
- **Order**: $x < y$ holds when position $x$ precedes position $y$.
- **Character predicates**: $Q_a(x)$ holds when $w_x = a$, for each $a \in \Sigma$.

A **sentence** $\varphi$ in $\mathrm{FO}[<]$ uses variables $x, y, z, \ldots$ ranging over positions, the predicates above, logical connectives $\land, \lor, \neg, \to$, and quantifiers $\exists x, \forall x$.

## Language of a sentence

The language defined by $\varphi$ is

$$
L(\varphi) = \{ w \in \Sigma^* : w \models \varphi \}.
$$

## Example

The sentence

$$
\exists x \exists y \;(x < y \;\land\; Q_a(x) \;\land\; Q_b(y))
$$

defines the language of strings containing an $a$ before some $b$.

## Equivalence to star-free

By the Schützenberger–McNaughton–Papert theorem:

$$
\mathrm{FO}[<]\text{-definable} = \text{Star-free}.
$$

Both classes coincide with the aperiodic regular languages.

## Used by

- [Star-Free Languages](star_free_languages.md)
- [MHAT Recognizes Exactly the Star-Free Languages](../results/mhat_recognizes_star_free.md)

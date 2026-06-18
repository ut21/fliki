---
title: Star-Free Languages
type: object
paper: Angluin, Chiang, and Yang, "Masked Hard Attention Transformers Recognize Exactly the Star-Free Languages", NeurIPS 2023
source: Section 2, Preliminaries
aliases:
  - aperiodic languages
  - FO-definable languages
  - star-free regular languages
related:
  - ../objects/first_order_logic_strings.md
  - ../objects/deterministic_finite_state_automaton.md
  - ../results/mhat_recognizes_star_free.md
---

# Star-Free Languages

A language $L \subseteq \Sigma^*$ is **star-free** if it can be expressed by a regular expression built from:

- individual symbols $a \in \Sigma$,
- the empty language $\emptyset$ and the set of all strings $\Sigma^*$,
- union $L_1 \cup L_2$,
- concatenation $L_1 \cdot L_2$,
- complement $\overline{L}$,

but **not** Kleene star $L^*$.

## Equivalent characterizations

The star-free languages admit three equivalent descriptions:

**1. Aperiodic regular languages.** A regular language is star-free if and only if its syntactic monoid is aperiodic, i.e., for some $n$, $w^n = w^{n+1}$ holds for all strings $w$.

**2. First-order logic.** $L$ is star-free if and only if it is definable in first-order logic $\mathrm{FO}[<]$ over the string ordering. See [First-Order Logic over Strings](first_order_logic_strings.md).

**3. Counter-free automata.** $L$ is star-free if and only if it is recognized by a deterministic finite automaton with no non-trivial cycles in its state transition structure (counter-free).

## Examples

- All finite languages.
- $\{a^* b a^*\}$ (strings containing exactly one $b$).
- The language of strings with an even number of $a$'s is **not** star-free (it is recognized by a cyclic DFA).

## Position in the regular language hierarchy

$$
\text{Star-free} = \text{FO}[<]\text{-definable} \subsetneq \text{Regular}.
$$

Star-free languages are a proper subclass of regular languages and a proper superclass of languages definable by Boolean combinations of threshold counting constraints.

## Used by

- [MHAT Recognizes Exactly the Star-Free Languages](../results/mhat_recognizes_star_free.md)

---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:10
modified: 2025-06-25T19:15:56
permalink:
---

[[exercise - permutations and combinations]]

## permutations

A permutation of a set is an arrangement of its elements into a sequence, where the order of the elements matter. For example, if we have 10 books on a shelf and we need to pick 3 to put on another shelf, there are $P(10,3)$ ways to do that.

For example, the 6 permutations (orderings) of the set {1, 2, 3} are (1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), and (3, 2, 1).

For a set with $n$ distinct elements, the number of permutations possible if we pick $k$ elements from the set and ordered them is called a k-permutation, represented as $P(n,k)$.

$P(n,k)=\dfrac{n!}{(n-k)!}$

```anki
id: 1741511531746
---
$P(n,k)$ = ==$\dfrac{n!}{(n-k)!}$==
```

## combinations

A combination is a selection of items from a set that has distinct members, such that the order of selection does not matter. Unlike [[permutation|permutations]].

A k-combination of a set $S$ is a subset of $k$ that has $n$ distinct elements of $S$
in other words, if a set has $n$ elements and we need to select $k$ of them and we do not care about the order, $C(n,k)$ is the number of k-combinations, and is also a binomial coefficient - that is, one of the numbers seen in [[Pascal's triangle]].

$C(n,k)=\dfrac{n!}{k!(n-k)!}$

A k-combination can be represented in one of these ways. $C(n,k)={}^{n}C_{k}=C_{k}^{n}=\displaystyle\binom{n}{k}$

```anki
id: 1741511532095
---
$C(n,k)$ = ==$\dfrac{n!}{k!(n-k)!}$==
```

Symmetry seen in Pascal's triangle is represented with the equation $C(n,k)=C(n,n-k)$.

a special case of the combination function where $k=2$ can use the formula $C(n,2)=\dfrac{n(n-1)}{2}$

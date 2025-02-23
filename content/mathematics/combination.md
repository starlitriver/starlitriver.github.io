---
title: 
description: 
aliases: [combinations]
tags: []
created: 2024-11-19T21:16:10
modified: 2025-02-22T19:04:09
permalink:
---

A combination is a selection of items from a set that has distinct members, such that the order of selection does not matter. Unlike [[permutation|permutations]].

A k-combination of a set $S$ is a subset of $k$ that has $n$ distinct elements of $S$
in other words, if a set has $n$ elements and we need to select $k$ of them and we do not care about the order, $C(n,k)$ is the number of k-combinations, and is also a binomial coefficient - that is, one of the numbers seen in [[Pascal's triangle]].

A k-combination can be represented in one of these ways. $C(n,k)={}^{n}C_{k}=C_{k}^{n}=\displaystyle\binom{n}{k}$

%%

```anki
id: 1740272617723
---
The combination function is ==$C(n,k)=\dfrac{n!}{(n-k)!(k!)}$==
```

%%

Symmetry seen in Pascal's triangle is represented with the equation $C(n,k)=C(n,n-k)$.

a special case of the combination function where $k=2$ can use the formula $C(n,2)=\dfrac{n(n-1)}{2}$



[[guide to permutations and combinations]]

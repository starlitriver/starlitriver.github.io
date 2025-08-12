---
title: 
description: 
aliases: []
tags: []
created: 2025-02-23T16:52:29
modified: 2025-04-14T11:17:57
permalink:
---



An item in a sequence is called a term. The nth term of a sequence is denoted with $t_n$ - the first term is $t_1$. A sequence can be arithmetic (common difference) or geometric (common ratio).

A series is the sum of the first n terms of a sequence. A series can be arithmetic (common difference) or geometric (common ratio).

## recurrence / explicit

### recurrence

A recurrence relation like $t_n=t_n-1+3,t_1=2$ is a relation that defines a sequence recursively.

It means each term is defined using previous terms.

A recurrence relation must have initial conditions - these are specific values of the sequence that are defined directly.


Consider the sequence 3,5,7,9... - The recurrence relation is $t_1=3$, $t_n=t_{n-1}+2$.
Consider the sequence 1,1,2,3,5,8,13... - The recurrence relation is $t_1=1$, $t_2=1$, $t_n=t_{n-2}+t_{n-1}$.

### explicit

An explicit formula like $t_n=a(n-1)d$ defines every nth term directly as a function of n.

$t_n=a+(n-1)d$

a is the first term
d is the common difference (calculated with the common difference between three terms)

Consider the sequence 3,5,7,9... - The explicit formula is $t_n=1+2n$.
Consider the sequence 2,5,10,17,26... - The explicit formula is $t_n=n^2+1$.

## arithmetic sequence

$t_n=a+(n-1)d$

```anki
id: 1744589592928
---
Arithmetic sequence is ==$t_n=a+(n-1)d$==
```

a is the first term
d is the common difference (calculated with the common difference between three terms)

## arithmetic series

For an arithmetic sequence, the arithmetic series is a sum of some terms.

There are two equations we use:
$S_n=\dfrac{n}{2}[2a+(n-1)d]$

```anki
id: 1744589592964
---
Arithmetic series is ==$S_n=\dfrac{n}{2}[2a+(n-1)d]$==
```

$S_n=\dfrac{n}{2}(a+l)$

l is the last term

## geometric sequence

$t_n=ar^{n-1}$

```anki
id: 1744589592988
---
Geometric sequence is ==$t_n=ar^{n-1}$==
```

a is first term
r is common ratio (calculated with the common ratio between three terms)

## geometric series

$S_n=\dfrac{a(r^n-1)}{r-1}$

```anki
id: 1744589593014
---
Geometric series is ==$S_n=\dfrac{a(r^n-1)}{r-1}$==
```

## infinite geometric series

$S_\infty=\dfrac{a}{1-r}, |r|<1$

```anki
id: 1744589593067
---
Infinite geometric series is ==$S_\infty=\dfrac{a}{1-r}, |r|<1$==
```

---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:10
modified: 2025-07-03T14:30:23
permalink:
---


A logarithm is the inverse operation of exponentiation.

It answers the question: "To what exponent must I raise a base to get a number?"

$2^3=8$
$\log_2(8)=3$

As you can see, the sentence "a log is a power" can be useful as a small reminder: The base of the log is the base, the inside of the log is the result, the output of the log is the power.

A log function shows the base as a subscript. If no subscript, it is assumed the base is 10 - so $\log(a)=\log_{10}(a)$.


If $a^b=c$ then $\log_a(c)=b$.


To evaluate $\log_a(b)$, we must restrict $b\in(0,\infty)$ and $a\in(0,\infty) \backslash \{1\}$.

```anki
id: 1741560995957
---
To evaluate $\log_a(b)$, we must restrict ==$b\in(0,\infty)$ and $a\in(0,\infty) \backslash \{1\}$.==
```

## log identities

### 1

$\log_a(m)+\log_a(n)=\log_a(mn)$

```anki
id: 1751516843183
---
==$\log_a(m)+\log_a(n)$== = ==$\log_a(mn)$==
```

### 2

$\log_a(m)-\log_a(n)=\log_a(\dfrac{m}{n})$

```anki
id: 1751516843233
---
==$\log_a(m)-\log_a(n)$== = ==$\log_a(\dfrac{m}{n})$==
```

### 3

$p\cdot \log_a(m)=\log_a(m^p)$

```anki
id: 1741560974857
---
==$p\cdot \log_a(m)$== = ==$\log_a(m^p)$==
```

### the easy ones

$\log_a(1)=0$

```anki
id: 1741560974806
---
$\log_a(1)$ = ==$0$==
```

### change of base 

$\log_a(b)=\dfrac{\log_{c}(b)}{\log_{c}(a)}$

```anki
id: 1741560974907
---
$\log_a(b)$ = ==$\dfrac{\log_{c}(b)}{\log_{c}(a)}$==
```

### special case of the change of base

$\log_a(b)=\dfrac{1}{\log_b(a)}$

```anki
id: 1741560974956
---
==$\log_a(b)$== = $\dfrac{1}{\log_b(a)}$
```
